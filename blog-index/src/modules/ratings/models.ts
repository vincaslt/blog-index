export enum types {
  RATE_BLOG = 'RATINGS/RATE_BLOG',
  UPDATE_RATING = 'RATINGS/UPDATE_RATING'
}

export interface BlogRating {
  blogId: number,
  rating?: number,
  yourRating?: number
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

export type RatingsAction = RateBlogAction
  | UpdateRatingAction
