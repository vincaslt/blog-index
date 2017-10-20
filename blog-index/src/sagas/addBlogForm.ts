import { Action } from 'redux-actions'
import { takeLatest, call } from 'redux-saga/effects'
import { addBlog } from '../api/blog'
import { types, FormData } from '../modules/addBlogForm'

function* addBlogFormSubmitSaga(action: Action<FormData>) {
  console.log('jop')
  if (action.payload) {
    try {
      yield call(addBlog, action.payload)
    } catch (e) { /* TODO: handle error */}
  }
}

export const addBlogForm = [
  takeLatest(types.ADD_BLOG_FORM_SUBMIT, addBlogFormSubmitSaga)
]
