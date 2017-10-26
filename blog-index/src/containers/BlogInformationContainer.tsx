import { connect } from 'react-redux'
import { State as ReduxState } from '../modules'
import { selectors } from '../modules/blogs'
import { BlogInformation, Props as BlogInformationProps } from '../components/BlogInformation'

const mapStateToProps = (state: ReduxState): BlogInformationProps => {
  const activeBlog = selectors.activeBlog(state)
  return activeBlog ? {
    title: activeBlog.title,
    description: activeBlog.description,
    image: activeBlog.photo,
    link: activeBlog.link,
    rating: 5, // TODO: rating
    tags: activeBlog.tags
  } : {
    title: '',
    description: '',
    image: '',
    link: '',
    rating: 5
  } /// TODO: loading
}

const ConnectedBlogInformation = connect<BlogInformationProps>(mapStateToProps)(BlogInformation)

export { ConnectedBlogInformation as BlogInformationContainer }

