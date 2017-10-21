import { ImageFile } from '../../components/ImageDropzone'

export enum types {
  ADD_BLOG_FORM_SUBMIT = 'ADD_BLOG_FORM/SUBMIT'
}

export interface FormModel {
  photo: ImageFile
  title: string
  category: string
  link: string
  tags?: string[]
  tagline?: string
  description: string
}

export interface SubmitAction {
  type: types.ADD_BLOG_FORM_SUBMIT,
  formData: FormModel
}

export type AddBlogFormAction = SubmitAction
