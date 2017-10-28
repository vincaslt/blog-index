import {
  JsonController,
  BadRequestError,
  Get
} from 'routing-controllers'
import { logger } from '../utils/logger'
import { CategoryService } from '../services/CategoryService'
import { CategoriesDto } from '../../common/dto/CategoryDto'

@JsonController()
export class CategoryController {

  @Get('/categories')
  public async getSelectableCategories(): Promise<CategoriesDto|Error> {
    try {
      const categories = await CategoryService.getCategories()
      return {
        categories: categories.map((cat) => ({
          id: cat.id,
          name: cat.name,
          icon: cat.icon
        }))
      }
    } catch (e) {
      logger.error(e)
    }
    return new BadRequestError('Categories could not be received')
  }

}