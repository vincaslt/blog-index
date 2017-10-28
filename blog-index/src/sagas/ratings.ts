import { takeLatest, call, put } from 'redux-saga/effects'
import { models as m, actions } from '../modules/ratings'
import { RatingDto } from '../../../common/dto/RatingDto'
import * as api from '../api/blog'

function* rateBlogSaga(action: m.RateBlogAction) {
  try {
    const ratingDto: RatingDto = yield call(api.rateBlog, action.blogId, action.rating)
    yield put(actions.updateRating(action.blogId, ratingDto.rating, action.rating))
  } catch (e) { 
    console.log('UNHANDLED ERROR: ', e.message)  
  }
}

export const ratingSagas = [
  takeLatest(m.types.RATE_BLOG, rateBlogSaga)
]
