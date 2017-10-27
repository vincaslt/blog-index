import { default as axiosCreator } from 'axios'
import { models as m } from '../modules/addBlogForm'

// TODO: move urls and data structures to shared

const axios = axiosCreator.create({
  baseURL: 'http://localhost:3030'
})

export function addBlog(data: m.FormModel) {
  const formData = new FormData()
  Object.entries(data).forEach(([k, v]) => formData.append(k, v))
  return axios.post('/blog', formData)
    .then(({ data }) => data)
}

export function getBlogInformation(id: number) {
  return axios.get(`/blog/${id}`)
    .then(({ data }) => data)
}

export function rateBlog(blogId: number, rating: number) {
  return axios.post(`/rate`, { blogId, rating })
    .then(({ data }) => data)
}