import { takeLatest, call, put, select } from 'redux-saga/effects'
import { BlogDto } from '../../../common/dto/BlogDto'
import { models as m, actions as blogActions, selectors } from '../modules/blogs'
import { actions as ratingActions } from '../modules/ratings'
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
    yield put(blogActions.receiveInformation([blog]))
    if (blog.rating) {
      yield put(ratingActions.updateRating(blog.id, blog.rating, blog.yourRating))
    }
  } catch (e) {
    console.log('UNHANDLED ERROR: ', e.message)  
  }
}

export const blogSagas = [
  takeLatest(m.types.REQUEST_INFORMATION, requestInformationSaga),
  takeLatest(m.types.SET_ACTIVE, setActiveBlogSaga)
]
