import * as React from 'react'
import styled from 'styled-components'
import { Card, Image, Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { RatingPreview } from '../../components/RatingPreview'
import { routeNames } from '../../constants/routeNames'
import * as blogImage from './envato-bg.png'

const SpacedContent = styled.div`
  display: flex;
  justify-content: space-between;
`


const BlogCard = () => (
  <Card as={Link} to={routeNames.blog.url(10)}>
    <Image src={blogImage} size="medium" />
    <Card.Content >
      <Card.Header>
        <SpacedContent>
          Envato Tuts+
          <RatingPreview score={4.3} />
        </SpacedContent>
      </Card.Header>
      <Card.Meta>
        Tutorials, Programming, Multiple Authors
      </Card.Meta>
      <Card.Description>
        Some very short tagline taking at most one hundred
        and fifteen text characters and taking up to three lines of text
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <SpacedContent>
        <Label icon="travel" content="Travel" />
        <Label icon="comments outline" detail="reviews" content="121" image />
      </SpacedContent>
    </Card.Content>
  </Card>
)

export { BlogCard }