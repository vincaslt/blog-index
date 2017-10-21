import { combineReducers } from 'redux'
import { reducer as formReducer, FormStateMap } from 'redux-form'
import { reducer as blogReducer, State as BlogState } from './blog'

interface State {
  form: FormStateMap
  blog: BlogState
}

const reducers = combineReducers({
  form: formReducer,
  blog: blogReducer
})

export { State, reducers }