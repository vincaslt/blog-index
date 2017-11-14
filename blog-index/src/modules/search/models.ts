import { SearchResultDto } from '../../../../common/dto/SearchResultDto'

export type SearchResults = SearchResultDto

export enum types {
  SEARCH = 'SEARCH/SEARCH',
  RECEIVE_RESULTS = 'SEARCH/RECEIVE_RESULTS',
  CHANGE_RESULTS_PAGE = 'SEARCH/CHANGE_RESULTS_PAGE',
  CHANGE_CATEGORY = 'SEARCH/CHANGE_CATEGORY'
}

export interface ChangeResultsPageAction {
  type: types.CHANGE_RESULTS_PAGE,
  page: number
}

export interface SearchBlogsAction {
  type: types.SEARCH,
  query: string
  page: number
  categoryId?: number
}

export interface ReceiveSearchResultsAction {
  type: types.RECEIVE_RESULTS,
  resultBlogIds: number[]
  page: number
  total: number
  lastQuery: string
  clearResults: boolean
}

export interface ChangeCategoryAction {
  type: types.CHANGE_CATEGORY,
  categoryId?: number
}

export type SearchAction = 
  | SearchBlogsAction
  | ReceiveSearchResultsAction
  | ChangeResultsPageAction
  | ChangeCategoryAction