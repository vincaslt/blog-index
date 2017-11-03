import { State as ReduxState } from '../index'

export const searchResultIdsSelector = (state: ReduxState) => state.search.resultsByPage[0] // TODO: pagination