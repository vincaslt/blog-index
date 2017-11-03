import { SearchResultDto } from '../../../../common/dto/SearchResultDto'

export type SearchResults = SearchResultDto

export enum types {
  SEARCH = 'SEARCH/SEARCH',
  RECEIVE_RESULTS = 'SEARCH/RECEIVE_RESULTS'
}

export interface SearchBlogsAction {
  type: types.SEARCH,
  query: string
}

export interface ReceiveSearchResultsAction {
  type: types.RECEIVE_RESULTS,
  resultBlogIds: number[]
  // TODO: pagination - total, start
}

export type SearchAction = SearchBlogsAction
  | ReceiveSearchResultsAction