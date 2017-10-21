import { connect } from 'react-redux'
import { State as ReduxState } from '../modules'
import { selectors } from '../modules/blog'
import { BlogInformation, Props as BlogInformationProps } from '../components/BlogInformation'

const mapStateToProps = (state: ReduxState): BlogInformationProps => ({
  title: selectors.blogTitle(state),
  description: selectors.blogDescription(state),
  image: selectors.blogPhoto(state),
  link: selectors.blogLink(state),
  rating: 5, // TODO: rating
  tags: selectors.blogTags(state)
})

const ConnectedBlogInformation = connect<BlogInformationProps>(mapStateToProps)(BlogInformation)

export { ConnectedBlogInformation as BlogInformationContainer }

