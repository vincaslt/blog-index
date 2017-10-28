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
import { RatingDto } from '../../common/dto/RatingDto'

@JsonController()
export class RatingController {

  @Post('/rate')
  @UseBefore(NoProxy)
  public async rateBlog(
    @Body() data: RatingDto,
    @Req() request: Request
  ): Promise<RatingDto|Error> {
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
        const rating = await RatingService.getBlogRating(data.blogId)
        return { blogId: data.blogId, rating }
      }
    } catch (e) {
      logger.error(e)
    }
    return new BadRequestError('Rating could not be saved')
  }

}