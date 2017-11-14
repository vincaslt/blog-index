import * as React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { BlogInfoCardContainer as BlogInfoCard } from '../../containers/BlogInfoCardContainer'
import { BlogCategoryDropdown } from '../../containers/BlogCategoryDropdown'
import { State as ReduxState } from '../../modules'
import { selectors, actions } from '../../modules/search'
import { SearchResultsPagination } from '../../containers/SearchResultsPagination'

const FiltersContainer = styled.div`
  text-align: right;
  & > * {
    margin-left: 1rem;
  }
`

interface StateProps {
  resultIds: number[],
  selectedCategory?: number
}

interface DispatchProps {
  changeCategory: typeof actions.changeCategory
}

type Props = StateProps & DispatchProps

const SearchResultsPage = ({ resultIds = [], changeCategory, selectedCategory }: Props) => {
  const results = resultIds.map((id) => <BlogInfoCard key={id} id={id} />)
  const filters = results.length > 0
    ? (
      <FiltersContainer>
        <BlogCategoryDropdown
          onChange={(e, { value }) => { changeCategory(value as number|undefined) }}
          value={selectedCategory}
          clearable
        />
      </FiltersContainer>
    ) : null
  return (
    <div>
      {filters}
      {results}
      <SearchResultsPagination />
    </div>
  )
}

const mapStateToProps = (state: ReduxState): StateProps => ({
  resultIds: selectors.activePageSearchResultIdsSelector(state),
  selectedCategory: selectors.categoryIdFilterSelector(state) 
})

const mapDispatchToProps: DispatchProps = {
  changeCategory: actions.changeCategory
}

const ConnectedSearchResultsPage = connect(mapStateToProps, mapDispatchToProps)(SearchResultsPage)

export { ConnectedSearchResultsPage as SearchResultsPage }