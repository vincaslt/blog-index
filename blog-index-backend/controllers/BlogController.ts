import {
  JsonController,
  BadRequestError,
  UseBefore,
  Post,
  Req,
  Get,
  Param
} from 'routing-controllers'
import { BlogService } from '../services/BlogService'
import { RatingService } from '../services/RatingService'
import { PhotoService } from '../services/PhotoService'
import { Request } from 'express'
import * as multer from 'multer'
import { BlogEntity } from '../entities/BlogEntity'
import { logger } from '../utils/logger'
import { FormFieldsDto } from '../../common/dto/FormFieldsDto'
import { BlogDto } from '../../common/dto/BlogDto'
import { config } from '../config'
import { mapCategoryToDto } from '../utils/mappers'


interface FormRequest<Fields> extends Request {
  body: Fields
}

@JsonController()
export class BlogController {

  @Post('/blog')
  @UseBefore(multer().single('photo'))
  public async addBlog( @Req() request: FormRequest<FormFieldsDto>) {
    const form = request.body
    try {
      const { filename } = await PhotoService.savePhoto(request.file.buffer, request.file.mimetype)

      const newBlog = new BlogEntity()
      newBlog.description = form.description
      newBlog.link = form.link
      newBlog.tagline = form.tagline
      newBlog.tags = form.tags
      newBlog.title = form.title
      newBlog.photo = filename

      if (await BlogService.addBlog(newBlog, Number(form.categoryId))) {
        return { status: 'ok'}
      }
    } catch (e) {
      logger.error(e)
    }
    return new BadRequestError('Blog could not be added')
  }

  @Get('/blog/:id')
  public async blog( @Param('id') id: number, @Req() request: Request): Promise<BlogDto|Error> {
    try {
      const blog = await BlogService.getBlog(id)
      const userRating = await RatingService.getUserRating(request.connection.remoteAddress || 'unknown', id)
      if (blog) {
        return {
          id: blog.id,
          title: blog.title,
          category: mapCategoryToDto(blog.category),
          description: blog.description,
          link: blog.link,
          photo: `${config.IMAGES_URL}/${blog.photo}`,
          yourRating: userRating ? userRating.rating : undefined,
          rating: blog.rating,
          tagline: blog.tagline,
          tags: blog.tags
        }
      }
    } catch (e) {
      logger.error(e)
      return new BadRequestError('Blog could not be received')
    }
    return new BadRequestError(`No blog found with id ${id}`)
  }

}