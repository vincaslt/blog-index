import * as m from './models'

export interface State {
  byId: {
    [blogId: number]: m.BlogRating
  }
}

export const initialState: State = {
  byId: {}
}

export const reducer = (state: State = initialState, action: m.RatingsAction) => {
  switch (action.type) {
    case m.types.RATE_BLOG:
      return {
        ...state,
        [action.blogId]: {
          ...state.byId[action.blogId],
          yourRating: action.rating
        } as m.BlogRating
      }
    default:
      return state
  }
}