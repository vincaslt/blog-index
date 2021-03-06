import { Transaction, Repository, getRepository } from 'typeorm'
import { TransactionRepository } from 'typeorm/decorator/transaction/TransactionRepository'
import { BlogEntity } from '../entities/BlogEntity'
import { RatingEntity } from '../entities/RatingEntity'

export class RatingService {

  @Transaction()
  public static async addRating(
    blogId: number,
    rating: RatingEntity,
    @TransactionRepository(BlogEntity) blogRepo?: Repository<BlogEntity>,
    @TransactionRepository(RatingEntity) ratingRepo?: Repository<RatingEntity>
  ) {
    if (!blogRepo || !ratingRepo) {
      throw new Error('Cannot inject repositories')
    }
    const blog = await blogRepo.findOneById(blogId)
    if (blog) {
      rating.blog = blog
    } else {
      throw new Error(`Blog with id: ${blogId} was not found`)
    }
    return ratingRepo.save(rating)
  }

  public static async getBlogRating(blogId: number) {
    const blogRepository = getRepository(BlogEntity)
    const blog = await blogRepository.findOneById(blogId, { relations: ['ratings'] })
    if (blog) {
      return blog.ratings.reduce((sum, next) => sum + next.rating, 0) / blog.ratings.length
    } else {
      throw new Error(`Blog with id: ${blogId} was not found`)
    }
  }

  public static async getUserRating(userIp: string, blogId: number) {
    const ratingsRepository = getRepository(RatingEntity)
    const blogRepository = getRepository(BlogEntity)
    const blog = await blogRepository.findOneById(blogId)
    if (blog) {
      return ratingsRepository.findOne({ where: { blog: blog.id, ip: userIp } })
    } else {
      throw new Error(`Blog with id: ${blogId} was not found`)
    }
  }

}