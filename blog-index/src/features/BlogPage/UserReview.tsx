import * as React from 'react'
import styled from 'styled-components'
import { Item, Rating, Button } from 'semantic-ui-react'
import * as avatarImage from './avatar.png'

const DateText = styled.span`
  margin-left: 0.4rem;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.3);
`

interface Props {
  score?: number,
}

const UserReview = ({ score = 3 }: Props) => (
  <Item>
    <Item.Image size="tiny" src={avatarImage} />
    <Item.Content>
      <Item.Header>Nice quality tech tutorials</Item.Header>
      <Item.Meta>
        <Rating rating={score} maxRating={5} disabled />
        <DateText>12 days ago</DateText>
      </Item.Meta>
      <Item.Description>
        There is a very good content there. Some good content. All good content. Bla bla bla bla bla.
        There is a very good content there. Some good content. All good content. Bla bla bla bla bla.
        There is a very good content there. Some good content. All good content. Bla bla bla bla bla.
        There is a very good content there. Some good content. All good content. Bla bla bla bla bla.
      </Item.Description>
      <Item.Extra>
        <Button icon="thumbs up outline" compact basic circular/>
        <span>121 rated the review useful</span>
      </Item.Extra>
    </Item.Content>
  </Item>
)

export { UserReview }