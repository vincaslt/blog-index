import { Transaction, Repository, getRepository } from 'typeorm'
import { TransactionRepository } from 'typeorm/decorator/transaction/TransactionRepository'
import { BlogEntity, CategoryEntity } from '../entities/index'
import { RatingService } from './RatingService'

export class BlogService {
  @Transaction()
  public static async addBlog(
    blog: BlogEntity,
    categoryId: number,
    @TransactionRepository(BlogEntity) blogRepo?: Repository<BlogEntity>
  ) {
    if (!blogRepo) {
      throw new Error('Cannot inject repositories')
    }
    const categoryRepo = getRepository(CategoryEntity)
    const category = await categoryRepo.findOneById(categoryId)
    if (category) {
      if (!category.selectable) {
        throw new Error(`Category ${categoryId} is unassignable`)
      }
      blog.category = category
      return blogRepo.save(blog)
    }
    throw new Error(`Category with id ${categoryId} was not found`)
  }

  public static async getBlog(id: number) {
    return (await BlogService.getBlogs([id]))[0]
  }

  public static async getBlogs(ids: number[]) {
    const blogRepo = getRepository(BlogEntity)
    const blogs = ids.length > 0
      ? await blogRepo.findByIds(ids, { relations: ['category'] })
      : []
    return Promise.all(blogs.map(async (blog) => {
      const rating = await RatingService.getBlogRating(blog.id)
      return { ...blog, rating }
    }))
  }
}