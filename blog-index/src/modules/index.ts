import { combineReducers } from 'redux'
import { reducer as formReducer, FormStateMap } from 'redux-form'
import { reducer as blogsReducer, State as BlogsState } from './blogs'
import { reducer as ratingsReducer, State as RatingsState } from './ratings'

interface State {
  form: FormStateMap
  blogs: BlogsState,
  ratings: RatingsState
}

const reducers = combineReducers({
  form: formReducer,
  blogs: blogsReducer,
  ratings: ratingsReducer
})

export { State, reducers }