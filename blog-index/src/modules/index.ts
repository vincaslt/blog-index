import { combineReducers } from 'redux'
import { reducer as formReducer, FormStateMap } from 'redux-form'
import { reducer as blogsReducer, State as BlogsState } from './blogs'
import { reducer as categoriesReducer, State as CategoriesState } from './categories'
import { reducer as searchReducer, State as SearchState } from './search'

interface State {
  form: FormStateMap
  blogs: BlogsState,
  categories: CategoriesState
  search: SearchState
}

const reducers = combineReducers({
  form: formReducer,
  blogs: blogsReducer,
  categories: categoriesReducer,
  search: searchReducer
})

export { State, reducers }