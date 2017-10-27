import { takeLatest, call, put } from 'redux-saga/effects'
import * as api from '../api/blog'
import { models as m, actions } from '../modules/ratings'

function* rateBlogSaga(action: m.RateBlogAction) {
  try {
    const ratingDto: api.RatingDto = yield call(api.rateBlog, action.blogId, action.rating)
    yield put(actions.updateRating(action.blogId, ratingDto.rating, action.rating))
  } catch (e) { 
    console.log('UNHANDLED ERROR: ', e.message)  
  }
}

export const ratingSagas = [
  takeLatest(m.types.RATE_BLOG, rateBlogSaga)
]
