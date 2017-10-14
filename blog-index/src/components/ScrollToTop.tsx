import * as React from 'react'
import { withRouter, RouteProps } from 'react-router'

type Props = RouteProps

class ScrollToTop extends React.Component<Props, {}> {
  componentDidUpdate(prevProps: Props) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return <div>{this.props.children}</div>
  }
}

const DecoratedComponent = withRouter(ScrollToTop)

export { DecoratedComponent as ScrollToTop } 