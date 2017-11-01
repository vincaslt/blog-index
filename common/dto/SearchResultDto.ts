import { BlogDto } from './BlogDto'

export interface SearchResultDto {
  start: number
  total: number
  results: BlogDto[]
}