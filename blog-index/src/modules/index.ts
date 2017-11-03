import { combineReducers } from 'redux'
import { reducer as formReducer, FormStateMap } from 'redux-form'
import { reducer as blogsReducer, State as BlogsState } from './blogs'
import { reducer as ratingsReducer, State as RatingsState } from './ratings'
import { reducer as categoriesReducer, State as CategoriesState } from './categories'
import { reducer as searchReducer, State as SearchState } from './search'

interface State {
  form: FormStateMap
  blogs: BlogsState,
  ratings: RatingsState
  categories: CategoriesState
  search: SearchState
}

const reducers = combineReducers({
  form: formReducer,
  blogs: blogsReducer,
  ratings: ratingsReducer,
  categories: categoriesReducer,
  search: searchReducer
})

export { State, reducers }