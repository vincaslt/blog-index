import { FormFieldsDto } from '../../../../common/dto/FormFieldsDto'

export type FormModel = FormFieldsDto

export enum types {
  ADD_BLOG_FORM_SUBMIT = 'ADD_BLOG_FORM/SUBMIT'
}

export interface SubmitAction {
  type: types.ADD_BLOG_FORM_SUBMIT,
  formData: FormFieldsDto
}

export type AddBlogFormAction = SubmitAction
