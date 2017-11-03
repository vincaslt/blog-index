import { takeLatest, call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { routeNames } from '../constants/routeNames'
import { SearchResultDto } from '../../../common/dto/SearchResultDto'
import { models as m, actions as searchActions } from '../modules/search'
import { actions as blogActions } from '../modules/blogs'
import * as api from '../api/search'

// TODO: return results as ids and request only needed blog information
function* searchSaga(action: m.SearchBlogsAction) {
  try {
    yield put(push(routeNames.searchResults.url(action.query)))
    const response: SearchResultDto = yield call(api.search, action.query)
    yield put(blogActions.receiveInformation(response.results))
    const ids = response.results.map((blog) => blog.id)
    yield put(searchActions.receiveSearchResults(ids))
  } catch (e) {
    console.log('UNHANDLED ERROR: ', e.message)
  }
}

export const searchSagas = [
  takeLatest(m.types.SEARCH, searchSaga)
]
