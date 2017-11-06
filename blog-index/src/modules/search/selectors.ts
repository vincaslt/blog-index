import { createSelector } from 'reselect'
import { State as ReduxState } from '../index'

export const totalPagesSelector = (state: ReduxState) => Math.floor(state.search.total / 10) + 1
export const activePageSelector = (state: ReduxState) => state.search.activePage
export const lastQuerySelector = (state: ReduxState) => state.search.lastQuery
export const searchResultIdsSelector = (state: ReduxState) => state.search.resultsByPage
export const searchResultsSelector =
  (state: ReduxState, id: number): number[] | undefined | null => state.search.resultsByPage[id]

export const activePageSearchResultIdsSelector = createSelector(
  activePageSelector,
  searchResultIdsSelector,
  (page, ids) => ids[page]
)