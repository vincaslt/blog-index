import { takeLatest, call, put, select } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { routeNames } from '../constants/routeNames'
import { SearchResultDto } from '../../../common/dto/SearchResultDto'
import { models as m, actions as searchActions, selectors as searchSelectors } from '../modules/search'
import { actions as blogActions } from '../modules/blogs'
import * as api from '../api/search'

function* searchSaga(action: m.SearchBlogsAction) {
  try {
    yield put(push(routeNames.searchResults.url(action.query)))
    const response: SearchResultDto = yield call(api.search, action.query, (action.page - 1) * 10)
    yield put(blogActions.receiveInformation(response.results))
    const ids = response.results.map((blog) => blog.id)
    const prevQuery = yield select(searchSelectors.lastQuerySelector)
    // If query is not the same as before, results in other pages will be cleared
    yield put(searchActions.receiveSearchResults(
      ids,
      response.start / 10 + 1,
      response.total,
      action.query,
      prevQuery !== action.query
    ))
  } catch (e) {
    console.log('UNHANDLED ERROR: ', e.message)
  }
}

function* changeResultsPageSaga(action: m.ChangeResultsPageAction) {
  const lastQuery: string = yield select(searchSelectors.lastQuerySelector)
  // No need to query if we already have the results cached
  const cachedResults: number[] | undefined | null = yield select(searchSelectors.searchResultsSelector, action.page)
  if (!cachedResults) {
    yield put(searchActions.search(lastQuery, action.page))
  }
}

export const searchSagas = [
  takeLatest(m.types.SEARCH, searchSaga),
  takeLatest(m.types.CHANGE_RESULTS_PAGE, changeResultsPageSaga)
]
