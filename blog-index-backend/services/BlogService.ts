import { Transaction, Repository } from 'typeorm'
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
      return undefined
    }
    
    blog.photo = await photoRepo.save(blog.photo)
    return blogRepo.save(blog)
  }
}