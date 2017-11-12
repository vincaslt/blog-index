import { takeLatest, call, put, select } from 'redux-saga/effects'
import { BlogDto } from '../../../common/dto/BlogDto'
import { RatingDto } from '../../../common/dto/RatingDto'
import { models as m, actions as blogActions, selectors } from '../modules/blogs'
import { actions as categoryActions } from '../modules/categories'
import * as api from '../api/blog'

function* setActiveBlogSaga(action: m.SetActiveBlogAction) {
  const activeBlog = yield select(selectors.activeBlogSelector)
  if (!activeBlog) {
    yield put(blogActions.requestInformation(action.id))
  }
}

function* requestInformationSaga(action: m.RequestInformationAction) {
  try {
    const blog: BlogDto = yield call(api.getBlogInformation, action.id)
    yield put(categoryActions.receiveCategories([blog.category]))
    yield put(blogActions.receiveInformation([blog]))
  } catch (e) {
    console.log('UNHANDLED ERROR: ', e.message)  
  }
}

function* rateBlogSaga(action: m.RateBlogAction) {
  try {
    const ratingDto: RatingDto = yield call(api.rateBlog, action.blogId, action.rating)
    yield put(blogActions.updateRating(action.blogId, ratingDto.rating, action.rating))
  } catch (e) {
    console.log('UNHANDLED ERROR: ', e.message)
  }
}

export const blogSagas = [
  takeLatest(m.types.REQUEST_INFORMATION, requestInformationSaga),
  takeLatest(m.types.SET_ACTIVE, setActiveBlogSaga),
  takeLatest(m.types.RATE_BLOG, rateBlogSaga)
]
