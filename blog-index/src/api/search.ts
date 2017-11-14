import { axios } from '../utils/apiUtils'
import { SearchResultDto } from '../../../common/dto/SearchResultDto'

export function search(query: string, start: number, category?: number): Promise<SearchResultDto> {
  return axios.get(`/search`, {
    params: { query, start, category }
  }).then(({ data }) => data)
}
