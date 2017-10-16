import * as React from 'react'
import { Header, Container } from 'semantic-ui-react'
import styled from 'styled-components'
import { Switch } from 'react-router'
import { withRouter, RouteComponentProps, Route } from 'react-router'
import { routeNames } from '../../constants/routeNames'
import { SearchInputContainer as SearchInput } from '../../containers/SearchInputContainer'
import { Showcase } from './Showcase'
import { SearchResultsPage } from '../SearchResultsPage'

const StyledSearchInput = styled(SearchInput) `
  max-width: 400px;
  margin: 3rem auto;
  width: 100%;
`

interface RouteProps {
  query?: string
}

type Props = RouteComponentProps<RouteProps>

class IndexPage extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        <Container textAlign="center">
          <Header as="h1">What are you interested in?</Header>
          <StyledSearchInput />
        </Container>
        <Switch>
          <Route exact path={routeNames.searchResults.path} component={SearchResultsPage} />
          <Route exact path={routeNames.index.path} component={Showcase} />
        </Switch>
      </div>
    )
  }
}


const ConnectedIndexPage = withRouter(IndexPage)

export { ConnectedIndexPage as IndexPage }