import {
  JsonController,
  BadRequestError,
  QueryParam,
  Get
} from 'routing-controllers'
import { logger } from '../utils/logger'
import { SearchService } from '../services/SearchService'
import { BlogService } from '../services/BlogService'
import { SearchResultDto } from '../../common/dto/SearchResultDto'
import { mapCategoryToDto } from '../utils/mappers'
import { config } from '../config'

@JsonController()
export class SearchController {

  @Get('/search')
  public async search(
    @QueryParam('query') query: string,
    @QueryParam('start') start: number = 0
  ): Promise<SearchResultDto|Error> {
    try {
      const [resultEntities, total] = await SearchService.searchByTitleOrTags(query, start, start + 10)
      const blogs = await BlogService.getBlogs(resultEntities.map(({ id }) => id))
      const results = blogs.map((blog) => ({
          id: blog.id,
          title: blog.title,
          category: mapCategoryToDto(blog.category),
          description: blog.description,
          link: blog.link,
          photo: `${config.IMAGES_URL}/${blog.photo}`,
          rating: blog.rating,
          tagline: blog.tagline,
          tags: blog.tags
      }))
      return {
        results,
        total,
        start
      }
    } catch (e) {
      logger.error(e)
    }
    return new BadRequestError('Search results could not be received')
  }

}