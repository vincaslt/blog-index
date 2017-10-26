import { combineReducers } from 'redux'
import { reducer as formReducer, FormStateMap } from 'redux-form'
import { reducer as blogsReducer, State as BlogsState } from './blogs'

interface State {
  form: FormStateMap
  blogs: BlogsState
}

const reducers = combineReducers({
  form: formReducer,
  blogs: blogsReducer
})

export { State, reducers }