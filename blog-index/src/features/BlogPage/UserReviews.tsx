import * as React from 'react'
import styled, { StyledComponentClass } from 'styled-components'
import { Message, Segment, SegmentProps, Item, Menu, Button } from 'semantic-ui-react'
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
    <Menu attached pagination>
      <Menu.Item name="1" active />
      <Menu.Item name="2" />
      <Menu.Item name="3" />
      <Menu.Item disabled>...</Menu.Item>
      <Menu.Item name="8" />
      <Menu.Item name="9" />
      <Menu.Item name="10" />
      <Menu.Item name="11" />
      <Menu.Item name="12" />
      <Menu.Menu position="right">
        <Menu.Item>
          <Button icon="pencil" content="Write a review" />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  </div>
)

const StyledUserReviews = styled(UserReviews) `
  margin-top: 3rem;
`

export { StyledUserReviews as UserReviews }