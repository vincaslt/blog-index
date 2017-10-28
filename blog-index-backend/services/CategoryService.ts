import { getRepository } from 'typeorm'
import { CategoryEntity } from '../entities/CategoryEntity'

export class CategoryService {

  public static async getCategories() {
    const categoryRepo = getRepository(CategoryEntity)
    const categories = await categoryRepo.find()
    return categories
  }

}