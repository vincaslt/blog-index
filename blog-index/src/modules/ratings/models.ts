export enum types {
  RATE_BLOG = 'RATINGS/RATE_BLOG'
}

export interface BlogRating {
  blogId: number,
  rating: number,
  yourRating: number
}

export interface RateBlogAction {
  type: types.RATE_BLOG,
  blogId: number,
  rating: number
}

export type RatingsAction = RateBlogAction
