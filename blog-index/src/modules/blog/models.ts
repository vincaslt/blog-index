export enum types {
  REQUEST_INFORMATION = 'BLOG/REQUEST_INFORMATION'
}

export interface RequestInformationAction {
  type: types.REQUEST_INFORMATION,
  id: number
}

export type BlogAction = RequestInformationAction
