import * as React from 'react'
import { connect } from 'react-redux'
import { State as ReduxState } from '../modules'
import { selectors, actions } from '../modules/search'
import { Pagination } from '../components/Pagination'

interface StateProps {
  totalPages: number
  activePage: number
}

interface DispatchProps {
  onSelect: (page: number) => void
}

type Props = StateProps & DispatchProps

const SearchResultsPagination = ({ totalPages, activePage, onSelect }: Props) => (
  totalPages > 1
    ? <Pagination pages={totalPages} activePage={activePage} onSelect={onSelect} />
  : null
)

const mapStateToProps = (state: ReduxState): StateProps => ({
  activePage: selectors.activePageSelector(state),
  totalPages: selectors.totalPagesSelector(state)
})

const mapDispatchToProps: DispatchProps = {
  onSelect: actions.changeResultsPage
}

const ConnectedSearchResultsPagination = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultsPagination)

export { ConnectedSearchResultsPagination as SearchResultsPagination }
