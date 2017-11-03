import * as m from './models'
import * as R from 'ramda'

export interface State {
  resultsByPage: number[][]
}

export const initialState: State = {
  resultsByPage: []
}

// TODO: decide if Ramda is better than typesafe approach with plain JS but more verbose
export const reducer = (state: State = initialState, action: m.SearchAction): State => {
  switch (action.type) {
    case m.types.RECEIVE_RESULTS:
      // TODO: pagination
      return R.assoc('resultsByPage', action.resultBlogIds, state)
    default:
      return state
  }
}