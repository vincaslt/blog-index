import * as m from './models'

export const setActiveBlog = 
  (id: number): m.SetActiveBlogAction => ({
    type: m.types.SET_ACTIVE,
    id
  })

export const requestInformation =
  (id: number): m.RequestInformationAction => ({
    type: m.types.REQUEST_INFORMATION,
    id
  })

export const receiveInformation =
  (blog: m.BlogInformation): m.ReceiveInformationAction => ({
    type: m.types.RECEIVE_INFORMATION,
    blog
  })