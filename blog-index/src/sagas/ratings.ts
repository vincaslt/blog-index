import { takeLatest, call } from 'redux-saga/effects'
import * as api from '../api/blog'
import { models as m } from '../modules/ratings'

function* rateBlogSaga(action: m.RateBlogAction) {
  try {
    yield call(api.rateBlog, action.blogId, action.rating)
    // TODO: update blog's rating
  } catch (e) { /* TODO: handle error */ }
}

export const ratingSagas = [
  takeLatest(m.types.RATE_BLOG, rateBlogSaga)
]
