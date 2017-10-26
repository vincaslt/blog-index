import { all } from 'redux-saga/effects'
import { addBlogFormSagas } from './addBlogForm'
import { blogSagas } from './blogs'

export function* sagas() {
  yield all([
    ...addBlogFormSagas,
    ...blogSagas
  ])
}
