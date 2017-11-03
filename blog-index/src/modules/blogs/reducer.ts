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
    default:
      return state
  }
}