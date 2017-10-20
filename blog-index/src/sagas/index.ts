import { all } from 'redux-saga/effects'
import { addBlogForm } from './addBlogForm'

export function* sagas() {
  yield all([
    ...addBlogForm
  ])
}
