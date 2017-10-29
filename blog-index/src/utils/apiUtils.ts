import { default as axiosCreator } from 'axios'

export const axios = axiosCreator.create({
  baseURL: 'http://localhost:3030'
})