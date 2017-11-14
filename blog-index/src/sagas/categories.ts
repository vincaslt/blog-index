import { takeLatest, call, put } from 'redux-saga/effects'
import { CategoriesDto } from '../../../common/dto/CategoryDto'
import { models as m, actions } from '../modules/categories'
import * as api from '../api/categories'

function* requestCategoriesSaga() {
  try {
    const categories: CategoriesDto = yield call(api.getCategories)
    yield put(actions.receiveCategories(categories, true))
  } catch (e) {
    console.log('UNHANDLED ERROR: ', e.message)
  }
}

export const categoriesSagas = [
  takeLatest(m.types.REQUEST_CATEGORIES, requestCategoriesSaga)
]
