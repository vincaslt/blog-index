import * as React from 'react'
import { withRouter, Route } from 'react-router-dom'
import styled from 'styled-components'
import { routeNames } from '../constants/routeNames'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { IndexPage } from './IndexPage'
import { BlogPage } from './BlogPage'

const Container = styled.div`
  min-height: 100vh;
`

const Application = () => {
  return (
    <Container>
      <Header />
      <Route exact path={routeNames.index} component={IndexPage} />
      <Route exact path={routeNames.blog} component={BlogPage} />
      <Footer />
    </Container>
  )
}

const DecoratedApplication = withRouter<{}>(Application)

export { DecoratedApplication as Application }