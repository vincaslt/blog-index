import * as m from './models'

export const submit = (formData: m.FormModel): m.SubmitAction => ({
  type: m.types.ADD_BLOG_FORM_SUBMIT,
  formData
})