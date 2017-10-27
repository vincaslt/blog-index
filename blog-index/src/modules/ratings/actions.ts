import * as m from './models'

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
