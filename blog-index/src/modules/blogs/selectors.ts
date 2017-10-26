import { createSelector } from 'reselect'
import { State as ReduxState } from '../index'

const allBlogsSelector = (state: ReduxState) => state.blogs.byId
const activeBlogIdSelector = (state: ReduxState) => state.blogs.currentlyActive

export const activeBlog = createSelector(
  activeBlogIdSelector,
  allBlogsSelector,
  (activeBlogId, allBlogs) => activeBlogId ? allBlogs[activeBlogId] : undefined
)

// export const blogTitle = createSelector(
//   blogInformationSelector,
//   (blogInfo) => blogInfo ? blogInfo.title : ''
// )

// export const blogCategory = createSelector(
//   blogInformationSelector,
//   (blogInfo) => blogInfo ? blogInfo.category : ''
// )

// export const blogDescription = createSelector(
//   blogInformationSelector,
//   (blogInfo) => blogInfo ? blogInfo.description : ''
// )

// export const blogLink = createSelector(
//   blogInformationSelector,
//   (blogInfo) => blogInfo ? blogInfo.link : ''
// )

// export const blogPhoto = createSelector(
//   blogInformationSelector,
//   (blogInfo) => blogInfo ? blogInfo.photo : ''
// )

// export const blogTags = createSelector(
//   blogInformationSelector,
//   (blogInfo) => blogInfo ? blogInfo.tags : []
// )

// export const blogTagline = createSelector(
//   blogInformationSelector,
//   (blogInfo) => blogInfo ? blogInfo.tagline : ''
// )

