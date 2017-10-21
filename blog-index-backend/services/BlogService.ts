import * as jimp from 'jimp'
import { Transaction, Repository, getRepository } from 'typeorm'
import { TransactionRepository } from 'typeorm/decorator/transaction/TransactionRepository'
import { BlogEntity } from '../entities/BlogEntity'
import { PhotoEntity } from '../entities/PhotoEntity'

export class BlogService {
  @Transaction()
  public static async addBlog(
    blog: BlogEntity,
    @TransactionRepository(BlogEntity) blogRepo?: Repository<BlogEntity>,
    @TransactionRepository(PhotoEntity) photoRepo?: Repository<PhotoEntity>
  ) {
    if (!blogRepo || !photoRepo) {
      throw new Error('Cannot inject repositories')
    }
    
    blog.photo = await photoRepo.save(blog.photo)
    return blogRepo.save(blog)
  }

  public static async getBlog(id: number) {
    const blogRepo = getRepository(BlogEntity)
    const blog = await blogRepo.findOneById(id, { relations: ['photo'] })
    if (blog) {
      const photoFile = await jimp.read(blog.photo.path)
      // TODO: do conversions before saving
      const photoBuffer = await new Promise<Buffer>((resolve, reject) => {
        photoFile
          .resize(1024, 720)
          .quality(60)
          .getBuffer(photoFile.getMIME(), (err, buffer) => {
            if (err) {
              reject(err)
            }
            resolve(buffer)
          })
      })
      const photo = photoBuffer.toString('base64')
      return { ...blog, photo }
    }
    return undefined
  }
}