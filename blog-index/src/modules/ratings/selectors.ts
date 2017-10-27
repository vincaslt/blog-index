import { createSelector } from 'reselect'
import * as  m from './models'
import { State as ReduxState } from '../index'

const blogRatingSelector = (state: ReduxState, blogId: number): m.BlogRating | undefined => state.ratings.byId[blogId]

export const ratingSelector = createSelector(
  blogRatingSelector,
  (ratingEntity) => ratingEntity ? ratingEntity.rating : undefined
)

export const yourRatingSelector = createSelector(
  blogRatingSelector,
  (ratingEntity) => ratingEntity ? ratingEntity.yourRating : undefined
)