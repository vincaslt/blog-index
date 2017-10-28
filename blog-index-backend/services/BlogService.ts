import * as jimp from 'jimp'
import { Transaction, Repository, getRepository } from 'typeorm'
import { TransactionRepository } from 'typeorm/decorator/transaction/TransactionRepository'
import { BlogEntity } from '../entities/BlogEntity'
import { PhotoEntity } from '../entities/PhotoEntity'
import { CategoryEntity } from '../entities/index'

export class BlogService {
  @Transaction()
  public static async addBlog(
    blog: BlogEntity,
    categoryId: number,
    @TransactionRepository(BlogEntity) blogRepo?: Repository<BlogEntity>,
    @TransactionRepository(PhotoEntity) photoRepo?: Repository<PhotoEntity>,
    @TransactionRepository(CategoryEntity) categoryRepo?: Repository<CategoryEntity>
  ) {
    if (!blogRepo || !photoRepo || !categoryRepo) {
      throw new Error('Cannot inject repositories')
    }

    const category = await categoryRepo.findOneById(categoryId)
    if (category) {
      if (!category.selectable) {
        throw new Error(`Category ${categoryId} is unassignable`)
      }
      blog.photo = await photoRepo.save(blog.photo)
      blog.category = category
      return blogRepo.save(blog)
    }
    throw new Error(`Category with id ${categoryId} was not found`)
  }

  public static async getBlog(id: number) {
    const blogRepo = getRepository(BlogEntity)
    const blog = await blogRepo.findOneById(id, { relations: ['photo', 'category'] })
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