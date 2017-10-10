import * as React from 'react'
import { withRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { routeNames } from '../constants/routeNames'
import { IndexPage } from './IndexPage'

const Application = () => {
  return (
    <div>
      <Route exact path={routeNames.index} component={IndexPage} />
    </div>
  )
}

const DecoratedApplication = withRouter<{}>(Application)

export { DecoratedApplication as Application }