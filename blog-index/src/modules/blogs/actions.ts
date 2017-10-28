import * as m from './models'
import { BlogDto } from '../../../../common/dto/BlogDto'

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
  (blog: BlogDto): m.ReceiveInformationAction => ({
    type: m.types.RECEIVE_INFORMATION,
    blog
  })