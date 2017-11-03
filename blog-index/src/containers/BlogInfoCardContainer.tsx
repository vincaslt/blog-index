import { connect } from 'react-redux'
import { BlogInfoCard } from '../components/BlogInfoCard'
import { State as ReduxState } from '../modules'
import { selectors } from '../modules/blogs'

interface OwnProps {
  id: number
}

interface StateProps {
  title: string
}

const mapStateToProps = (state: ReduxState, props: OwnProps): StateProps => {
  const blog = selectors.blogByIdSelector(state, props.id)
  return {
    title: blog.title
  }
}

export const BlogInfoCardContainer =
  connect<StateProps, {}, OwnProps>(mapStateToProps)(BlogInfoCard)