import * as m from './models'
import * as R from 'ramda'

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
      return R.assoc('currentlyActive', action.id, state)
    case m.types.RECEIVE_INFORMATION:
      return action.blogs.reduce((prevState, blog) => (
        R.assocPath(['byId', blog.id], blog, prevState)
      ), state)
    case m.types.RATE_BLOG:
      return R.assocPath(['byId', action.blogId, 'yourRating'], action.rating, state)
    case m.types.UPDATE_RATING:
      return R.assocPath(['byId', action.blogId], {
        ...state.byId[action.blogId],
        rating: action.rating,
        yourRating: action.yourRating
      }, state)
    default:
      return state
  }
}