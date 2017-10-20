import { default as axiosCreator } from 'axios'
import { FormData } from '../modules/addBlogForm'

// TODO: move urls and data structures to shared

const axios = axiosCreator.create({
  baseURL: 'http://localhost:3030'
})

export function addBlog(data: FormData) {
  const formData = new FormData()
  Object.entries(data).forEach(([k, v]) => formData.append(k, v))
  return axios.post('/blog', formData)
}