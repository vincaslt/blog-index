import {
  JsonController,
  BadRequestError,
  UseBefore,
  Body,
  Post,
  Req
} from 'routing-controllers'
import { Request } from 'express'
import { logger } from '../utils/logger'
import { NoProxy } from '../middlewares/NoProxy'
import { RatingEntity } from '../entities/RatingEntity'
import { RatingService } from '../services/RatingService'

interface RatingBody {
  blogId: number
  rating: number
}

@JsonController()
export class RatingController {

  @Post('/rate')
  @UseBefore(NoProxy)
  public async rateBlog(
    @Body() data: RatingBody,
    @Req() request: Request
  ) {
    // FIXME: only temporary, use class-validator to auto check
    if (data.rating === undefined) {
      return new BadRequestError('No rating specified')
    }

    try {
      const newRating = new RatingEntity()
      newRating.date = new Date()
      newRating.ip = request.connection.remoteAddress || 'unknown'
      newRating.rating = data.rating
      if (await RatingService.addRating(data.blogId, newRating)) {
        return { status: 'ok' }
      }
    } catch (e) {
      logger.error(e)
    }
    return new BadRequestError('Rating could not be saved')
  }

}