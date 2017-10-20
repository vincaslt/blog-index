import {
  JsonController,
  BadRequestError,
  UseBefore,
  Post,
  Req
} from 'routing-controllers'
import { getRepository } from 'typeorm'
import { Request } from 'express'
import * as multer from 'multer'
import { BlogEntity } from '../entities/BlogEntity'
import { PhotoEntity } from '../entities/PhotoEntity'
import { logger } from '../utils/logger'

const upload = multer({ dest: `_blog-images/` })

declare interface FormRequest<Fields> extends Request {
  body: Fields
}

interface FormFields {
  title: string
  category: string
  link: string
  tags: string[]
  tagline: string
  description: string
  photo: any
}

@JsonController()
export class BlogController {

  @Post('/blog')
  @UseBefore(upload.single('photo'))
  public async addBlog( @Req() request: FormRequest<FormFields>) {
    try {
      const photoRepository = getRepository(PhotoEntity)
      const newPhoto = new PhotoEntity()
      newPhoto.mimetype = request.file.mimetype
      newPhoto.path = request.file.path
      newPhoto.size = request.file.size
      const savedPhoto = await photoRepository.save(newPhoto)

      const blogRepository = getRepository(BlogEntity)
      const newBlog = new BlogEntity()
      newBlog.category = request.body.category
      newBlog.description = request.body.description
      newBlog.link = request.body.link
      newBlog.tagline = request.body.tagline
      newBlog.tags = request.body.tags
      newBlog.title = request.body.title
      newBlog.photo = savedPhoto
      const savedBlog = await blogRepository.save(newBlog)
      return savedBlog
    } catch (e) {
      logger.error(e)
      throw new BadRequestError('Blog could not be added')
    }
  }

}