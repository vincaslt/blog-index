import { takeLatest, call, put } from 'redux-saga/effects'
import * as api from '../api/blog'
import { models as m, actions } from '../modules/blog'

function* requestInformationSaga(action: m.RequestInformationAction) {
  try {
    const blog = yield call(api.getBlogInformation, action.id)
    yield put(actions.receiveInformation(blog))
  } catch (e) { /* TODO: handle error */ }
}

export const blogSagas = [
  takeLatest(m.types.REQUEST_INFORMATION, requestInformationSaga)
]
