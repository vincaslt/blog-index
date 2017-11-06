import { axios } from '../utils/apiUtils'
import { SearchResultDto } from '../../../common/dto/SearchResultDto'

export function search(query: string, start: number): Promise<SearchResultDto> {
  return axios.get(`/search`, {
    params: { query, start }
  }).then(({ data }) => data)
}
