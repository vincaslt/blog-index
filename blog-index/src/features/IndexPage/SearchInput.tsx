import * as React from 'react'
import styled from 'styled-components'
import { Input } from 'semantic-ui-react'

const SearchInput = ({ ...rest }) => (
  <Input action={{ icon: 'search' }} placeholder="Find it..." {...rest} />
)

const StyledSearchInput = styled(SearchInput)`
  max-width: 400px;
  margin: 30px auto 125px auto;
  width: 100%;
`

export { StyledSearchInput as SearchInput }