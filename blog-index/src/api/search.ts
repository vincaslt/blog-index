import { axios } from '../utils/apiUtils'
import { SearchResultDto } from '../../../common/dto/SearchResultDto'

export function search(query: string): Promise<SearchResultDto> {
  return axios.get(`/search`, {
    params: { query }
  }).then(({ data }) => data)
}
