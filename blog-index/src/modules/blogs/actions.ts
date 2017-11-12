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
  (blogs: BlogDto[]): m.ReceiveInformationAction => ({
    type: m.types.RECEIVE_INFORMATION,
    blogs
  })

export const rateBlog =
  (blogId: number, rating: number): m.RateBlogAction => ({
    type: m.types.RATE_BLOG,
    blogId,
    rating
  })

export const updateRating =
  (blogId: number, rating?: number, yourRating?: number): m.UpdateRatingAction => ({
    type: m.types.UPDATE_RATING,
    blogId,
    rating,
    yourRating
  })
