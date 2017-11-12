import { connect, Dispatch } from 'react-redux'
import { RatingInput } from '../components/RatingInput'
import { State as ReduxState } from '../modules'
import { selectors, actions, models as m } from '../modules/blogs'

interface OwnProps {
  blogId: number
}

interface StateProps {
  initialRating?: number
  isSelected?: boolean
}

interface DispatchProps {
  onRate: (rating: number) => void
}

const mapStateToProps = (state: ReduxState, props: OwnProps): StateProps => {
  const yourRating = selectors.yourRatingSelector(state, props.blogId)
  const blogRating = selectors.ratingSelector(state, props.blogId)
  return {
    initialRating: yourRating || blogRating,
    isSelected: !!yourRating
  }
}

const mapDispatchToProps = (dispatch: Dispatch<m.BlogAction>, ownProps: OwnProps): DispatchProps => ({
  onRate: (rating: number) => dispatch(actions.rateBlog(ownProps.blogId, rating))
})

export const BlogRatingInput =
  connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(RatingInput)