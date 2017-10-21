import { takeLatest, call } from 'redux-saga/effects'
import * as api from '../api/blog'
import { models as m } from '../modules/addBlogForm'

function* addBlogFormSubmitSaga(action: m.SubmitAction) {
  try {
    yield call(api.addBlog, action.formData)
  } catch (e) { /* TODO: handle error */}
}

export const addBlogFormSagas = [
  takeLatest(m.types.ADD_BLOG_FORM_SUBMIT, addBlogFormSubmitSaga)
]
