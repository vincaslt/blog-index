import * as React from 'react'
import { withRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { routeNames } from '../constants/routeNames'
import { Header } from '../components/Header'
import { IndexPage } from './IndexPage'
import { BlogPage } from './BlogPage'

const Application = () => {
  return (
    <div>
      <Header />
      <Route exact path={routeNames.index} component={IndexPage} />
      <Route exact path={routeNames.blog} component={BlogPage} />
    </div>
  )
}

const DecoratedApplication = withRouter<{}>(Application)

export { DecoratedApplication as Application }