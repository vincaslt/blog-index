import * as React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Select } from 'semantic-ui-react'
import { BlogInfoCardContainer as BlogInfoCard } from '../../containers/BlogInfoCardContainer'
import { BlogCategoryDropdown } from '../../containers/BlogCategoryDropdown'
import { State as ReduxState } from '../../modules'
import { selectors } from '../../modules/search'

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

interface StateProps {
  resultIds: number[]
}

type Props = StateProps

const SearchResultsPage = ({ resultIds = [] }: Props) => {
  const results = resultIds.map((id) => <BlogInfoCard key={id} id={id} />)
  return (
    <div>
      <FiltersContainer>
        <BlogCategoryDropdown  />
        <Select defaultValue={sortOptions[0].value} options={sortOptions} placeholder="Sort by" />
      </FiltersContainer>
      {results}
      TODO pagination?
    </div>
  )
}

const mapStateToProps = (state: ReduxState): StateProps => ({
  resultIds: selectors.searchResultIdsSelector(state)
})

const ConnectedSearchResultsPage = connect(mapStateToProps)(SearchResultsPage)

export { ConnectedSearchResultsPage as SearchResultsPage }