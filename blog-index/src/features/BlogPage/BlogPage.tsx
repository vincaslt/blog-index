import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router'
import { connect } from 'react-redux'
import { actions } from '../../modules/blogs'
import { BlogInformationContainer as BlogInformation } from '../../containers/BlogInformationContainer'
import { UserReviews } from './UserReviews'
import { Comments } from './Comments'

interface RouteProps {
  id: string
}

interface DispatchProps {
  setActiveBlog: typeof actions.setActiveBlog
}

type Props = DispatchProps & RouteComponentProps<RouteProps>

class BlogPage extends React.Component<Props> {
  componentDidMount() {
    this.props.setActiveBlog(parseInt(this.props.match.params.id, 10))
  }

  componentWillUpdate(nextProps: Props) {
    const currentId = parseInt(this.props.match.params.id, 10)
    const nextId = parseInt(this.props.match.params.id, 10)
    if (currentId !== nextId) {
      nextProps.setActiveBlog(nextId)
    }
  }

  render() {
    return (
      <div>
        <BlogInformation />
        <UserReviews />
        <Comments />
      </div>
    )
  }
}

const mapDispatchToProps = {
  setActiveBlog: actions.setActiveBlog
}

const ConnectedBlogPage = connect(null, mapDispatchToProps)(withRouter(BlogPage))

export { ConnectedBlogPage as BlogPage }