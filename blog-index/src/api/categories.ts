import { axios } from '../utils/apiUtils'
import { CategoriesDto } from '../../../common/dto/CategoryDto'

export function getCategories(): Promise<CategoriesDto> {
  return axios.get(`/categories`)
    .then(({ data }) => data)
}
