import { all } from 'redux-saga/effects'
import { addBlogFormSagas } from './addBlogForm'
import { blogSagas } from './blog'

export function* sagas() {
  yield all([
    ...addBlogFormSagas,
    ...blogSagas
  ])
}
