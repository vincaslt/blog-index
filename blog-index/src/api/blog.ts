import { axios } from '../utils/apiUtils'
import { BlogDto } from '../../../common/dto/BlogDto'
import { RatingDto } from '../../../common/dto/RatingDto'
import { FormFieldsDto } from '../../../common/dto/FormFieldsDto'

export function addBlog(data: FormFieldsDto): {} {
  const formData = new FormData()
  Object.entries(data).forEach(([k, v]) => formData.append(k, v))
  return axios.post('/blog', formData)
    .then(({ data }) => data)
}

export function getBlogInformation(id: number): Promise<BlogDto> {
  return axios.get(`/blog/${id}`)
    .then(({ data }) => data)
}

export function rateBlog(blogId: number, rating: number): Promise<RatingDto> {
  return axios.post(`/rate`, { blogId, rating })
    .then(({ data }) => data)
}