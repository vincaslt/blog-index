import * as React from 'react'
import { withRouter, Route } from 'react-router-dom'
import { Switch } from 'react-router'
import styled from 'styled-components'
import { Container } from 'semantic-ui-react'
import { routeNames } from '../constants/routeNames'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { scrollToTop } from '../components/ScrollToTop'
import { IndexPage } from './IndexPage'
import { BlogPage } from './BlogPage'
import { AddBlogPage } from './AddBlogPage'

const AppContainer = styled.div`
  min-height: 100%;
  position: relative;
`

const ContentContainer = styled(Container)`
  padding-top: 6rem;
  padding-bottom: 10rem;
`

const Application = () => {
  return (
    <AppContainer>
      <Header />
      <ContentContainer>
        <Switch>
          <Route exact path={routeNames.index.path} component={scrollToTop(IndexPage)} />
          <Route exact path={routeNames.searchResults.path} component={scrollToTop(IndexPage)} />
          <Route exact path={routeNames.addBlog.path} component={scrollToTop(AddBlogPage)} />
          <Route exact path={routeNames.blog.path} component={scrollToTop(BlogPage)} />
        </Switch>
      </ContentContainer>
      <Footer />
    </AppContainer>
  )
}

const DecoratedApplication = withRouter<{}>(Application)

export { DecoratedApplication as Application }