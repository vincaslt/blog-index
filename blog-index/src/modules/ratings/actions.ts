import * as m from './models'

export const rateBlog =
  (blogId: number, rating: number): m.RateBlogAction => ({
    type: m.types.RATE_BLOG,
    blogId,
    rating 
  })
