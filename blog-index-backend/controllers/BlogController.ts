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
import { Request } from 'express'
import * as multer from 'multer'
import { BlogEntity } from '../entities/BlogEntity'
import { PhotoEntity } from '../entities/PhotoEntity'
import { logger } from '../utils/logger'
import { FormFieldsDto } from '../../common/dto/FormFieldsDto'
import { BlogDto } from '../../common/dto/BlogDto'
import { config } from '../config'

const upload = multer({ dest: config.PHOTO_DEST })

interface FormRequest<Fields> extends Request {
  body: Fields
}

@JsonController()
export class BlogController {

  @Post('/blog')
  @UseBefore(upload.single('photo'))
  public async addBlog( @Req() request: FormRequest<FormFieldsDto>) {
    const form = request.body
    try {
      const newPhoto = new PhotoEntity()
      newPhoto.mimetype = request.file.mimetype
      newPhoto.path = request.file.path
      newPhoto.size = request.file.size

      const newBlog = new BlogEntity()
      newBlog.description = form.description
      newBlog.link = form.link
      newBlog.tagline = form.tagline
      newBlog.tags = form.tags
      newBlog.title = form.title
      newBlog.photo = newPhoto

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
          categoryId: blog.category.id,
          description: blog.description,
          link: blog.link,
          photo: blog.photo,
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