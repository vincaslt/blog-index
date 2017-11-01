import * as m from './models'

export const search =
  (query: string): m.SearchBlogsAction => ({
    type: m.types.SEARCH,
    query
  })

export const receiveSearchResults =
  (response: m.SearchResults): m.ReceiveSearchResultsAction => ({
    type: m.types.RECEIVE_RESULTS,
    response
  })
