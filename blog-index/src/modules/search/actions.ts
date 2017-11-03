import * as m from './models'

export const search =
  (query: string): m.SearchBlogsAction => ({
    type: m.types.SEARCH,
    query
  })

export const receiveSearchResults =
  (resultBlogIds: number[]): m.ReceiveSearchResultsAction => ({
    type: m.types.RECEIVE_RESULTS,
    resultBlogIds
  })
