import * as React from 'react'
import { Header, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Switch } from 'react-router'
import { push } from 'connected-react-router'
import { withRouter, RouteComponentProps, Route } from 'react-router'
import { routeNames } from '../../constants/routeNames'
import { SearchInput } from './SearchInput'
import { Showcase } from './Showcase'
import { SearchResultsPage } from '../SearchResultsPage'


interface DispatchProps {
  push: typeof push
}

interface RouteProps {
  query?: string
}

type Props = DispatchProps & RouteComponentProps<RouteProps>

class IndexPage extends React.Component<Props, {}> {
  handleSearch = (searchText: string) => {
    this.props.push(`${routeNames.searchResults.url}/${searchText}`)
  }

  render() {
    return (
      <div>
        <Container textAlign="center">
          <Header as="h1">What are you interested in?</Header>
          <SearchInput onClick={this.handleSearch} />
        </Container>
        <Switch>
          <Route exact path={routeNames.searchResults.path} component={SearchResultsPage} />
          <Route exact path={routeNames.index.path} component={Showcase} />
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps: DispatchProps = {
  push
}

const ConnectedIndexPage = connect(null, mapDispatchToProps)(withRouter(IndexPage))

export { ConnectedIndexPage as IndexPage }