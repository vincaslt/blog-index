import { takeLatest, call } from 'redux-saga/effects'
import * as api from '../api/blog'
import { models as m } from '../modules/blog'

function* requestInformationSaga(action: m.RequestInformationAction) {
  try {
    yield call(api.getBlogInformation, action.id)
  } catch (e) { /* TODO: handle error */ }
}

export const blogSagas = [
  takeLatest(m.types.REQUEST_INFORMATION, requestInformationSaga)
]
