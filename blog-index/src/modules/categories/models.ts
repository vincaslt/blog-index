import { CategoriesDto, CategoryDto } from '../../../../common/dto/CategoryDto'

export type Category = CategoryDto

export enum types {
  REQUEST_CATEGORIES = 'CATEGORIES/REQUEST',
  RECEIVE_CATEGORIES = 'CATEGORIES/RECEIVE'
}

export interface RequestCategoriesAction {
  type: types.REQUEST_CATEGORIES
}

export interface ReceiveCategoriesAction {
  type: types.RECEIVE_CATEGORIES,
  categories: CategoriesDto
  allLoaded: boolean
}

export type CategoryAction =
  | RequestCategoriesAction
  | ReceiveCategoriesAction
