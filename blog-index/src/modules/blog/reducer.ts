import * as m from './models'

export type State = m.BlogInformation | null

export const initialState: State = null

export const reducer = (state: State = initialState, action: m.BlogAction) => {
  switch (action.type) {
    case m.types.RECEIVE_INFORMATION:
      return action.blog
    default:
      return state
  }
}