import { connect } from 'react-redux'
import { State as ReduxState } from '../modules'
import { selectors as blogSelectors } from '../modules/blogs'
import { selectors as ratingSelectors } from '../modules/ratings'
import { BlogInformation, Props as BlogInformationProps } from '../components/BlogInformation'

// FIXME: don't bind to active blog but generic blog id
const mapStateToProps = (state: ReduxState): BlogInformationProps => {
  const activeBlog = blogSelectors.activeBlogSelector(state)
  return activeBlog ? {
    id: activeBlog.id,
    title: activeBlog.title,
    description: activeBlog.description,
    image: activeBlog.photo,
    link: activeBlog.link,
    rating: ratingSelectors.ratingSelector(state, activeBlog.id) || 1, // TODO: rating
    tags: activeBlog.tags
  } : {
    id: 0,
    title: '',
    description: '',
    image: '',
    link: '',
    rating: 5
  } /// TODO: loading
}

const ConnectedBlogInformation = connect<BlogInformationProps>(mapStateToProps)(BlogInformation)

export { ConnectedBlogInformation as BlogInformationContainer }

