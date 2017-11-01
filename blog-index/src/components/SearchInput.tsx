import * as React from 'react'
import { Input } from 'semantic-ui-react'

export interface Props {
  onSearch: (searchText: string) => any,
  secondary?: boolean,
}

interface State {
  searchText: string
}

class SearchInput extends React.Component<Props, State> {
  state = {
    searchText: ''
  }

  handleClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    this.props.onSearch(this.state.searchText)
  }

  handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      this.props.onSearch(this.state.searchText)
    }
  }

  handleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    this.setState({ searchText: e.currentTarget.value })
  }

  render() {
    const { onSearch, secondary, ...rest} = this.props
    const params = {
      action: !secondary ? { icon: 'search', onClick: this.handleClick } : undefined,
      icon: secondary ? { name: 'search', circular: true, link: true, onClick: this.handleClick } : undefined
    }
    return (
      <Input
        onKeyPress={this.handleKeyPress}
        onChange={this.handleChange}
        placeholder="Search..."
        {...params}
        {...rest}
      />
    )
  }
}

export { SearchInput }