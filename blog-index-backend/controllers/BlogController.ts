import {
  JsonController,
  BadRequestError,
  UseBefore,
  Post,
  Req
} from 'routing-controllers'
import { BlogService } from '../services/BlogService'
import { Request } from 'express'
import * as multer from 'multer'
import { BlogEntity } from '../entities/BlogEntity'
import { PhotoEntity } from '../entities/PhotoEntity'
import { logger } from '../utils/logger'
import { FormFieldsDto } from '../dto/FormFieldsDto'

const upload = multer({ dest: `_blog-images/` })

interface FormRequest<Fields> extends Request {
  body: Fields
}

@JsonController()
export class BlogController {

  @Post('/blog')
  @UseBefore(upload.single('photo'))
  public async addBlog( @Req() request: FormRequest<FormFieldsDto>) {
    try {
      const newPhoto = new PhotoEntity()
      newPhoto.mimetype = request.file.mimetype
      newPhoto.path = request.file.path
      newPhoto.size = request.file.size

      const newBlog = new BlogEntity()
      newBlog.category = request.body.category
      newBlog.description = request.body.description
      newBlog.link = request.body.link
      newBlog.tagline = request.body.tagline
      newBlog.tags = request.body.tags
      newBlog.title = request.body.title
      newBlog.photo = newPhoto

      await BlogService.addBlog(newBlog)
      return { status: 'ok'}
    } catch (e) {
      logger.error(e)
      throw new BadRequestError('Blog could not be added')
    }
  }

}