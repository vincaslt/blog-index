import { all } from 'redux-saga/effects'
import { addBlogFormSagas } from './addBlogForm'
import { blogSagas } from './blogs'
import { ratingSagas } from './ratings'

export function* sagas() {
  yield all([
    ...addBlogFormSagas,
    ...blogSagas,
    ...ratingSagas
  ])
}
