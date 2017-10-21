import * as React from 'react'
import { Rating, Popup, RatingProps } from 'semantic-ui-react'

interface Props {
  initialRating: number
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

  handleRate = (event: React.SyntheticEvent<{}>, data: RatingProps) => {
    this.setState({ selectedRating: data.rating as number })
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