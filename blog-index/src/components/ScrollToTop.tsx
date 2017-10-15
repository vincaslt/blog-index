import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router'

function scrollToTop<P>(Component: React.ComponentType<P>) {
  type Props = RouteComponentProps<P>

  class ScrollToTop extends React.Component<Props, {}> {
    componentDidMount() {
      window.scrollTo(0, 0)
    }
  
    render() {
      return <Component {...this.props} />
    }
  }

  return withRouter(ScrollToTop)
}

export { scrollToTop } 