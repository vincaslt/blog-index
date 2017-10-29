import * as m from './models'
import { CategoriesDto } from '../../../../common/dto/CategoryDto'

export const requestCategories =
  (): m.RequestCategoriesAction => ({
    type: m.types.REQUEST_CATEGORIES
  })

export const receiveCategories =
  (categories: CategoriesDto): m.ReceiveCategoriesAction => ({
    type: m.types.RECEIVE_CATEGORIES,
    categories
  })
