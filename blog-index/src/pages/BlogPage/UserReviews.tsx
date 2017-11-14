import * as React from 'react'
import styled, { StyledComponentClass } from 'styled-components'
import { Message, Segment, SegmentProps, Item } from 'semantic-ui-react'
import { Pagination } from '../../components/Pagination'
import { UserReview } from './UserReview'

interface Props {
  className?: string
}

const ReviewsContainer = styled(Segment)`
  display: flex !important;
  min-height: 210px;
  padding: 1.5rem;
` as StyledComponentClass<SegmentProps, {}>

const UserReviews = ({ className }: Props) => (
  <div className={className}>
    <Message
      attached
      header="User Reviews"
      content="Check out what other users say"
    />
    <ReviewsContainer attached>
      <Item.Group divided>
        <UserReview />
        <UserReview score={5} />
        <UserReview score={1} />
        <UserReview score={4} />
      </Item.Group>
    </ReviewsContainer>
    <Pagination
      onSelect={(page) => { console.log(page) }}
      activePage={16}
      pages={18}
    />
  </div>
)

const StyledUserReviews = styled(UserReviews) `
  margin-top: 3rem;
`

export { StyledUserReviews as UserReviews }