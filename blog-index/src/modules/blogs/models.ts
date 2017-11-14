import { BlogDto } from '../../../../common/dto/BlogDto'

export type BlogInformation = BlogDto

export enum types {
  SET_ACTIVE = 'BLOG/SET_ACTIVE',
  REQUEST_INFORMATION = 'BLOG/REQUEST_INFORMATION',
  RECEIVE_INFORMATION = 'BLOG/RECEIVE_INFORMATION',
  RATE_BLOG = 'RATINGS/RATE_BLOG',
  UPDATE_RATING = 'RATINGS/UPDATE_RATING'
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

export interface RateBlogAction {
  type: types.RATE_BLOG,
  blogId: number,
  rating: number
}

export interface UpdateRatingAction {
  type: types.UPDATE_RATING,
  blogId: number,
  rating?: number
  yourRating?: number
}

export type BlogAction =
  | RequestInformationAction
  | ReceiveInformationAction
  | SetActiveBlogAction
  | RateBlogAction
  | UpdateRatingAction
