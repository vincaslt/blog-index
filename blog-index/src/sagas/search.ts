import { takeLatest, call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { routeNames } from '../constants/routeNames'
import { SearchResultDto } from '../../../common/dto/SearchResultDto'
import { models as m, actions } from '../modules/search'
import * as api from '../api/search'

function* searchSaga(action: m.SearchBlogsAction) {
  try {
    yield put(push(routeNames.searchResults.url(action.query)))
    const response: SearchResultDto = yield call(api.search, action.query)
    yield put(actions.receiveSearchResults(response))
  } catch (e) {
    console.log('UNHANDLED ERROR: ', e.message)
  }
}

export const searchSagas = [
  takeLatest(m.types.SEARCH, searchSaga)
]
