import * as m from './models'

export interface State {
  currentlyActive?: number
  byId: {
    [blogId: number]: m.BlogInformation
  }
}

export const initialState: State = {
  byId: {}
}

export const reducer = (state: State = initialState, action: m.BlogAction): State => {
  switch (action.type) {
    case m.types.SET_ACTIVE:
      return {
        ...state,
        currentlyActive: action.id
      }
    case m.types.RECEIVE_INFORMATION:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.blog.id]: action.blog
        }
      }
    default:
      return state
  }
}