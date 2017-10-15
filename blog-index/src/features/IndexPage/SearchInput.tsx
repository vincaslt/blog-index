import * as React from 'react'
import styled from 'styled-components'
import { Input } from 'semantic-ui-react'

interface Props {
  onClick: (searchText: string) => void
}

interface State {
  searchText: string
}

class SearchInput extends React.Component<Props, State> {
  handleClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    this.props.onClick(this.state.searchText)
  }

  handleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    this.setState({ searchText: e.currentTarget.value })
  }

  render() {
    const { onClick, ...rest} = this.props
    return (
      <Input
        action={{ icon: 'search', onClick: this.handleClick }}
        onChange={this.handleChange}
        placeholder="Find it..."
        {...rest}
      />
    )
  }
}

const StyledSearchInput = styled(SearchInput)`
  max-width: 400px;
  margin: 30px auto 125px auto;
  width: 100%;
`

export { StyledSearchInput as SearchInput }