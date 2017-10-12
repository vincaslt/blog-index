import * as React from 'react'
import { Container, Image, Header, Rating, Label } from 'semantic-ui-react'
import styled from 'styled-components'
import * as image from './envato-bg.png'

interface Props {
  className: string
}

const Content = styled.div`
  padding: 1.5rem;
  display: inline-flex;
  flex-direction: column;
  flex: 1;
`

const ScoreSection = styled.div`
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.04);
  padding: 1rem;
  display: flex;
  margin-bottom: 1rem;

  align-items: center;
`

const Labels = styled.div`
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  margin-left: 1rem;
  padding-left: 1rem;
  display: flex;
  align-items: center;
`

const BlogPage = ({ className }: Props) => (
  <Container className={className}>
    <Image
      label={{ as: 'span', color: 'yellow', content: 'Featured', icon: 'empty star', ribbon: true }}
      src={image}
      size="large"
    />
    <Content>
      <Header content="Envato Tuts+" as="h1" />
      <ScoreSection>
        <Rating maxRating={5} defaultRating={3} icon="star" size="massive" />
        <Labels>
          <Label color="violet">Tutorials</Label>
          <Label color="blue">Programming</Label>
          <Label color="teal">Multiple Authors</Label>
        </Labels>
      </ScoreSection>
      <div>
        Today Envato Tuts+ is a leading publisher of online tutorials and courses for self-directed
        learners to develop creative skills. Envato Tuts+ is part of Envato, a privately owned
        Australian company that operates an ecosystem of creative websites with a global community.
        We’re passionate about the web and enabling creators to make a living doing what they love.
      </div>
    </Content>
  </Container>
)

const StyledBlogPage = styled(BlogPage)`
  display: flex !important;
  margin-top: 6rem;
  background-color: white;
  border-radius: 5px;
  min-height: 210px;
`

export { StyledBlogPage as BlogPage }