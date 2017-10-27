import { createSelector } from 'reselect'
import { State as ReduxState } from '../index'

const allBlogsSelector = (state: ReduxState) => state.blogs.byId
const activeBlogIdSelector = (state: ReduxState) => state.blogs.currentlyActive

export const activeBlogSelector = createSelector(
  activeBlogIdSelector,
  allBlogsSelector,
  (activeBlogId, allBlogs) => activeBlogId ? allBlogs[activeBlogId] : undefined
)