import {
  JsonController,
  BadRequestError,
  Get
} from 'routing-controllers'
import { logger } from '../utils/logger'
import { CategoryService } from '../services/CategoryService'
import { CategoriesDto, CategoryDto } from '../dto/CategoryDto'

@JsonController()
export class CategoryController {

  @Get('/categories')
  public async getSelectableCategories() {
    try {
      const categories = await CategoryService.getCategories()
      return {
        categories: categories.map((cat) => ({
          id: cat.id,
          name: cat.name,
          icon: cat.icon
        } as CategoryDto))
      } as CategoriesDto
    } catch (e) {
      logger.error(e)
    }
    return new BadRequestError('Categories could not be received')
  }

}