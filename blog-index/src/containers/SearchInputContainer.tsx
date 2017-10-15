import * as React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routeNames } from '../constants/routeNames'
import { SearchInput, Props as SearchInputProps } from '../components/SearchInput'

interface DispatchProps {
  push: typeof push
  onSearch?: (searchText: string) => void,
}

type Props = SearchInputProps & DispatchProps

class SearchInputContainer extends React.Component<Props> {
  handleSearch = (searchText: string) => {
    this.props.push(`${routeNames.searchResults.url}/${searchText}`)
  }

  render() {
    const { push, onSearch, ...rest } = this.props
    return <SearchInput onSearch={this.handleSearch} {...rest} />
  }
}

const mapDispatchToProps: DispatchProps = {
  push
}

const ConnectedSearchInput = connect(null, mapDispatchToProps)(SearchInputContainer)

export { ConnectedSearchInput as SearchInputContainer }

