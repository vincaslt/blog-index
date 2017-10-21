import * as m from './models'

export type State = m.BlogInformation | {}

export const initialState: State = {}

export const reducer = (state: State = initialState, action: m.BlogAction) => {
  switch (action.type) {
    case m.types.RECEIVE_INFORMATION:
      return action.blog
    default:
      return state
  }
}