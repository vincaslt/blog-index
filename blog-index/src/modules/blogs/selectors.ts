import { createSelector } from 'reselect'
import { State as ReduxState } from '../index'

const activeBlogIdSelector = (state: ReduxState) => state.blogs.currentlyActive

export const allBlogsSelector = (state: ReduxState) => state.blogs.byId
export const blogByIdSelector = (state: ReduxState, blogId: number) => state.blogs.byId[blogId]

export const activeBlogSelector = createSelector(
  activeBlogIdSelector,
  allBlogsSelector,
  (activeBlogId, allBlogs) => activeBlogId ? allBlogs[activeBlogId] : undefined
)
