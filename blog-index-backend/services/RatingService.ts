import { Transaction, Repository } from 'typeorm'
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

}