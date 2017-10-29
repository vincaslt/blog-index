import * as m from './models'
import * as R from 'ramda'

export interface State {
  byId: {
    [blogId: number]: m.BlogRating
  }
}

export const initialState: State = {
  byId: {}
}

// TODO: decide if Ramda is better than typesafe approach with plain JS but more verbose
export const reducer = (state: State = initialState, action: m.RatingsAction): State => {
  switch (action.type) {
    case m.types.RATE_BLOG:
      return R.assocPath(['byId', action.blogId, 'yourRating'], action.rating, state)
    case m.types.UPDATE_RATING:
      return R.assocPath(['byId', action.blogId], {
        blogId: action.blogId,
        rating: action.rating,
        yourRating: action.yourRating
      } as m.BlogRating, state)
    default:
      return state
  }
}