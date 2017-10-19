import { ImageFile } from '../components/ImageDropzone'
import { createAction } from 'redux-actions'

export interface FormData {
  photo: ImageFile
  title: string
  category: string
  link: string
  tags: string[]
  tagline: string
  description: string
}

export const types = {
  ADD_BLOG_FORM_SUBMIT: 'ADD_BLOG_FORM/SUBMIT'
}

export const actions = {
  submit: createAction(types.ADD_BLOG_FORM_SUBMIT, (data: FormData) => data)
}