export enum types {
  REQUEST_INFORMATION = 'BLOG/REQUEST_INFORMATION',
  RECEIVE_INFORMATION = 'BLOG/RECEIVE_INFORMATION'
}

export interface BlogInformation {
  photo: string
  id: number
  title: string
  category: string
  link: string
  tags?: string[]
  tagline?: string
  description: string
}

export interface RequestInformationAction {
  type: types.REQUEST_INFORMATION,
  id: number
}

export interface ReceiveInformationAction {
  type: types.RECEIVE_INFORMATION,
  blog: BlogInformation
}

export type BlogAction = RequestInformationAction
  | ReceiveInformationAction 
