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

@JsonController()
export class SearchController {

  @Get('/search')
  public async search(
    @QueryParam('query') query: string,
    @QueryParam('start') start: number
  ): Promise<SearchResultDto|Error> {
    try {
      const [resultEntities, total] = await SearchService.searchByTitleOrTags(query, start, start + 10)
      const blogs = await BlogService.getBlogs(resultEntities.map(({ id }) => id))
      const results = blogs.map((blog) => ({
          id: blog.id,
          title: blog.title,
          categoryId: blog.category.id,
          description: blog.description,
          link: blog.link,
          photo: blog.photo,
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
    return new BadRequestError('Categories could not be received')
  }

}