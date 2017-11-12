import { all } from 'redux-saga/effects'
import { addBlogFormSagas } from './addBlogForm'
import { blogSagas } from './blogs'
import { categoriesSagas } from './categories'
import { searchSagas } from './search'

export function* sagas() {
  yield all([
    ...addBlogFormSagas,
    ...blogSagas,
    ...categoriesSagas,
    ...searchSagas
  ])
}
