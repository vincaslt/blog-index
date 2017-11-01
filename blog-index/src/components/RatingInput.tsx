import * as React from 'react'
import { Rating, Popup, RatingProps } from 'semantic-ui-react'

export interface Props {
  onRate: (rating: number) => void,
  initialRating?: number
  isSelected?: boolean
}

interface State {
  selectedRating?: number
}

class RatingInput extends React.Component<Props, State> {
  static defaultProps: Partial<Props> = {
    isSelected: false
  }
  state: State = {}

  constructor(props: Props) {
    super(props)
    if (props.isSelected) {
      this.state = { selectedRating: props.initialRating }
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.isSelected) {
      this.setState({ selectedRating: nextProps.initialRating })
    }
  }

  handleRate = (event: React.SyntheticEvent<{}>, data: RatingProps) => {
    const newRating = data.rating as number | undefined
    if (newRating) {
      this.props.onRate(newRating)
    } else {
      console.log('TODO: remove')
    }
    this.setState({ selectedRating: newRating })
  }

  render() {
    const ratingField = (
      <Rating
        key="rating"
        maxRating={5}
        defaultRating={
          this.state.selectedRating ||
          this.props.initialRating
        }
        icon="star"
        size="massive"
        onRate={this.handleRate}
      />
    )
    return this.state.selectedRating !== undefined ? (
      <Popup
        content={`You rated ${this.state.selectedRating}`}
        trigger={ratingField}
        position="bottom center"
        inverted
      />
    ) : ratingField
  }
}

export { RatingInput }