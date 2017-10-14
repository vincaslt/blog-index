import * as React from 'react'
import styled from 'styled-components'
import { Card, Image, Rating, Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { routeNames } from '../../constants/routeNames'
import * as blogImage from './envato-bg.png'

const SpacedContent = styled.div`
  display: flex;
  justify-content: space-between;
`

const ScoreContainer = styled.span`
  display: flex;
  align-items: center;
`

const BlogCard = () => (
  <Card as={Link} to={routeNames.blog}>
    <Image src={blogImage} size="medium" />
    <Card.Content >
      <Card.Header>
        <SpacedContent>
          Envato Tuts+
          <ScoreContainer>
            <Rating rating={4.3} maxRating={5} disabled />
            <Label circular basic>4.3</Label>
          </ScoreContainer>
        </SpacedContent>
      </Card.Header>
      <Card.Meta>
        Tutorials, Programming, Multiple Authors
      </Card.Meta>
      <Card.Description>
        Some very short tagline, taking at most eighty symbols taking up to two lines...
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <SpacedContent>
        <Label icon="comments outline" detail="reviews" content="121" image basic/>
        <Label icon="checkmark" content="Verified" color="teal" basic/>
      </SpacedContent>
    </Card.Content>
  </Card>
)

export { BlogCard }