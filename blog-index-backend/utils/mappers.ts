import { CategoryEntity } from '../entities/CategoryEntity'
import { CategoryDto } from '../../common/dto/CategoryDto'

export const mapCategoryToDto = (cat: CategoryEntity): CategoryDto => ({
  id: cat.id,
  icon: cat.icon,
  name: cat.name
}) 