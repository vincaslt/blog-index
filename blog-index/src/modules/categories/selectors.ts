import { createSelector } from 'reselect'
import { State as ReduxState } from '../index'
import * as m from './models'

const allCategoriesSelector = (state: ReduxState) => state.categories.byId

export const allCategoriesLoadedSelector = (state: ReduxState) => state.categories.allLoaded
export const categoriesSelector = createSelector(
  allCategoriesSelector,
  (categories) => Object.values<m.Category>(categories)
)