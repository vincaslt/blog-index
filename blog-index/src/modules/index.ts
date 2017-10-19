import { combineReducers } from 'redux'
import { reducer as formReducer, FormStateMap } from 'redux-form'

interface State {
  form: FormStateMap
}

const reducers = combineReducers({
  form: formReducer
})

export { State, reducers }