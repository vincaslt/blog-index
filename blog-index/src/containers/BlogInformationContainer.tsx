import { connect } from 'react-redux'
import { State as ReduxState } from '../modules'
import { selectors as blogSelectors } from '../modules/blogs'
import { BlogInformation, Props as BlogInformationProps } from '../components/BlogInformation'

// FIXME: if blog is not fount, redirect to 404
// FIXME: don't bind to active blog but generic blog id
const mapStateToProps = (state: ReduxState): BlogInformationProps => {
  const activeBlog = blogSelectors.activeBlogSelector(state)
  return activeBlog ? {
    id: activeBlog.id,
    title: activeBlog.title,
    description: activeBlog.description,
    image: activeBlog.photo,
    link: activeBlog.link,
    rating: activeBlog.rating || 0,
    tags: activeBlog.tags,
    category: {
      icon: activeBlog.category.icon,
      name: activeBlog.category.name
    }
  } : {
    id: 0,
    title: '',
    description: '',
    image: '',
    link: '',
    rating: 0,
    category: {
      icon: '',
      name: ''
    }
  } /// TODO: loading
}

const ConnectedBlogInformation = connect<BlogInformationProps>(mapStateToProps)(BlogInformation)

export { ConnectedBlogInformation as BlogInformationContainer }

