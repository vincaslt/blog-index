import { createSelector } from 'reselect'
import { State as ReduxState } from '../index'

const allCategoriesSelector = (state: ReduxState) => state.categories.byId

export const categoriesSelector = createSelector(
  allCategoriesSelector,
  (categories) => Object.values(categories)
)