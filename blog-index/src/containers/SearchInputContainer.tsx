import { connect } from 'react-redux'
import { SearchInput } from '../components/SearchInput'
import { actions } from '../modules/search'

interface DispatchProps {
  onSearch: typeof actions.search
}

const mapDispatchToProps: DispatchProps = {
  onSearch: actions.search
}

const ConnectedSearchInput = connect(null, mapDispatchToProps)(SearchInput)

export { ConnectedSearchInput as SearchInputContainer }

