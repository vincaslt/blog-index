import { takeLatest, call, put, select } from 'redux-saga/effects'
import * as api from '../api/blog'
import { models as m, actions, selectors } from '../modules/blogs'

function* setActiveBlogSaga(action: m.SetActiveBlogAction) {
  const activeBlog = yield select(selectors.activeBlogSelector)
  if (!activeBlog) {
    yield put(actions.requestInformation(action.id))
  }
}

function* requestInformationSaga(action: m.RequestInformationAction) {
  try {
    const blog = yield call(api.getBlogInformation, action.id)
    yield put(actions.receiveInformation(blog))
  } catch (e) { /* TODO: handle error */ }
}

export const blogSagas = [
  takeLatest(m.types.REQUEST_INFORMATION, requestInformationSaga),
  takeLatest(m.types.SET_ACTIVE, setActiveBlogSaga)
]
