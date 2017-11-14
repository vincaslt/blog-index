import * as m from './models'
import * as R from 'ramda'

export interface State {
  activePage: number
  total: number
  resultsByPage: number[][]
  lastQuery: string
  categoryId?: number
}

export const initialState: State = {
  lastQuery: '',
  activePage: 1,
  total: 0,
  resultsByPage: []
}

export const reducer = (state: State = initialState, action: m.SearchAction): State => {
  switch (action.type) {
    case m.types.SEARCH:
      return { ...state, categoryId: action.categoryId }
    case m.types.CHANGE_CATEGORY:
      return { ...state, categoryId: action.categoryId, resultsByPage: [] }
    case m.types.RECEIVE_RESULTS:
      let newState = action.clearResults
        ? R.assoc('resultsByPage', [], state)
        : state
      newState = R.assocPath(['resultsByPage', action.page], action.resultBlogIds, newState)
      return R.merge(newState, {
        total: action.total,
        activePage: action.page,
        lastQuery: action.lastQuery
      })
    case m.types.CHANGE_RESULTS_PAGE:
      return R.assoc('activePage', action.page, state)
    default:
      return state
  }
}