import * as React from 'react'
import styled from 'styled-components'
import { Select } from 'semantic-ui-react'
import { BlogResult } from './BlogResult'
import { BlogCategoryDropdown } from '../../containers/BlogCategoryDropdown'

const sortOptions = [
  { key: 'rel', text: 'Relevance', value: 'relevance' },
  { key: 'sco', text: 'Score', value: 'score' },
  { key: 'rev', text: 'Reviews', value: 'reviews' }
]

const FiltersContainer = styled.div`
  text-align: right;
  & > * {
    margin-left: 1rem;
  }
`

const SearchResultsPage = () => (
  <div>
    <FiltersContainer>
      <BlogCategoryDropdown  />
      <Select defaultValue={sortOptions[0].value} options={sortOptions} placeholder="Sort by" />
    </FiltersContainer>
    <BlogResult />
    <BlogResult />
    <BlogResult />
    <BlogResult />
    <BlogResult />
    TODO pagination?
  </div>
)

export { SearchResultsPage }