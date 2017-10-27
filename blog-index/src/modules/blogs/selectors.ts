import { createSelector } from 'reselect'
import { State as ReduxState } from '../index'

const allBlogsSelector = (state: ReduxState) => state.blogs.byId
// const blogSelector = (state: ReduxState, blogId: number) => state.blogs.byId[blogId]
const activeBlogIdSelector = (state: ReduxState) => state.blogs.currentlyActive

export const activeBlogSelector = createSelector(
  activeBlogIdSelector,
  allBlogsSelector,
  (activeBlogId, allBlogs) => activeBlogId ? allBlogs[activeBlogId] : undefined
)