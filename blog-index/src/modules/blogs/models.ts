import { BlogDto } from '../../../../common/dto/BlogDto'

export type BlogInformation = BlogDto

export enum types {
  SET_ACTIVE = 'BLOG/SET_ACTIVE',
  REQUEST_INFORMATION = 'BLOG/REQUEST_INFORMATION',
  RECEIVE_INFORMATION = 'BLOG/RECEIVE_INFORMATION'
}

export interface SetActiveBlogAction {
  type: types.SET_ACTIVE,
  id: number
}

export interface RequestInformationAction {
  type: types.REQUEST_INFORMATION,
  id: number
}

export interface ReceiveInformationAction {
  type: types.RECEIVE_INFORMATION,
  blogs: BlogDto[]
}

export type BlogAction = RequestInformationAction
  | ReceiveInformationAction
  | SetActiveBlogAction
