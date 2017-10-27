import { takeLatest, call, put, select } from 'redux-saga/effects'
import * as api from '../api/blog'
import { models as m, actions as blogActions, selectors } from '../modules/blogs'
import { actions as ratingActions } from '../modules/ratings'

function* setActiveBlogSaga(action: m.SetActiveBlogAction) {
  const activeBlog = yield select(selectors.activeBlogSelector)
  if (!activeBlog) {
    yield put(blogActions.requestInformation(action.id))
  }
}

function* requestInformationSaga(action: m.RequestInformationAction) {
  try {
    const blog: api.BlogDto = yield call(api.getBlogInformation, action.id)
    yield put(blogActions.receiveInformation({
      category: blog.category,
      description: blog.description,
      id: blog.id,
      link: blog.link,
      photo: blog.photo,
      tagline: blog.tagline,
      tags: blog.tags,
      title: blog.title
    }))
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
