import * as m from './models'
import { entityIdMap } from '../../utils/reducerUtils'

export interface State {
  byId: {
    [id: number]: m.Category
  }
}

export const initialState: State = {
  byId: {}
}

export const reducer = (state: State = initialState, action: m.CategoryAction): State => {
  switch (action.type) {
    case m.types.REQUEST_CATEGORIES:
      return { ...state, byId: {} }
    case m.types.RECEIVE_CATEGORIES:
      return {
        ...state,
        byId: entityIdMap(action.categories)
      }
    default:
      return state
  }
}