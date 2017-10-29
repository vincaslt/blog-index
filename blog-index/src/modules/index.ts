import { combineReducers } from 'redux'
import { reducer as formReducer, FormStateMap } from 'redux-form'
import { reducer as blogsReducer, State as BlogsState } from './blogs'
import { reducer as ratingsReducer, State as RatingsState } from './ratings'
import { reducer as categoriesReducer, State as CategoriesState } from './categories'

interface State {
  form: FormStateMap
  blogs: BlogsState,
  ratings: RatingsState
  categories: CategoriesState
}

const reducers = combineReducers({
  form: formReducer,
  blogs: blogsReducer,
  ratings: ratingsReducer,
  categories: categoriesReducer
})

export { State, reducers }