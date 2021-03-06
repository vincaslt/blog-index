import * as m from './models'

export const changeResultsPage =
  (page: number = 1): m.ChangeResultsPageAction => ({
    type: m.types.CHANGE_RESULTS_PAGE,
    page
  })

export const search =
  (query: string, page: number = 1, categoryId?: number): m.SearchBlogsAction => ({
    type: m.types.SEARCH,
    query,
    page,
    categoryId
  })

export const changeCategory =
  (categoryId?: number): m.ChangeCategoryAction => ({
    type: m.types.CHANGE_CATEGORY,
    categoryId
  })

export const receiveSearchResults =
  (
    resultBlogIds: number[],
    page: number,
    total: number,
    lastQuery: string,
    clearResults: boolean
  ): m.ReceiveSearchResultsAction => ({
    type: m.types.RECEIVE_RESULTS,
    resultBlogIds,
    page,
    total,
    lastQuery,
    clearResults
  })
