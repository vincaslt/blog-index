import {
  JsonController,
  BadRequestError,
  Get
} from 'routing-controllers'
import { logger } from '../utils/logger'
import { CategoryService } from '../services/CategoryService'
import { CategoriesDto } from '../../common/dto/CategoryDto'
import { mapCategoryToDto } from '../utils/mappers'

@JsonController()
export class CategoryController {

  @Get('/categories')
  public async getCategories(): Promise<CategoriesDto|Error> {
    try {
      const categories = await CategoryService.getCategories()
      return categories.map(mapCategoryToDto)
    } catch (e) {
      logger.error(e)
    }
    return new BadRequestError('Categories could not be received')
  }

}