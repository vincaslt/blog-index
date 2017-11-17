import { createSelector, Selector } from 'reselect'
import { BlogInformation } from './models'
import { State as ReduxState } from '../index'

const activeBlogIdSelector = (state: ReduxState) => state.blogs.currentlyActive

export const allBlogsSelector = (state: ReduxState) => state.blogs.byId
export const blogByIdSelector = (state: ReduxState, blogId: number): BlogInformation|undefined => (
  state.blogs.byId[blogId]
)

export const activeBlogSelector: Selector<ReduxState, BlogInformation|undefined> = createSelector(
  activeBlogIdSelector,
  allBlogsSelector,
  (activeBlogId, allBlogs) => activeBlogId ? allBlogs[activeBlogId] : undefined
)

export const ratingSelector = createSelector(
  blogByIdSelector,
  (blog) => blog ? blog.rating : undefined
)

export const yourRatingSelector = createSelector(
  blogByIdSelector,
  (blog) => blog ? blog.yourRating : undefined
)