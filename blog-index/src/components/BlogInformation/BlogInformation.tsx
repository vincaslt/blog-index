import * as React from 'react'
import styled, { StyledComponentClass } from 'styled-components'
import {
  Segment, Image, Header, HeaderProps, Rating, Button, Popup, Icon
} from 'semantic-ui-react'
import { Tags } from './Tags'
import * as image from './envato-bg.png'

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

const Score = styled.h2`
  margin: 0 1rem 0 0;
  padding-right: 1rem;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
`

const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  justify-content: space-between;
`

const Title = styled(Header)`
  margin: 0 !important;
  font-size: 2rem !important;
` as StyledComponentClass<HeaderProps, {}>


interface Props {
  className?: string
  tags?: string[]
}

// TODO: formalize, that image size is 1024x720 (720p)
const BlogInformation = ({ className, tags = [] }: Props) => (
  <Segment className={className} attached>
    <Image
      label={{ as: 'span', color: 'yellow', content: 'Featured', icon: 'empty star', ribbon: true }}
      src={image}
      size="large"
    />
    <Content>
      <TitleContainer>
        <Title content="Envato Tuts+" as="a" href="https://tutsplus.com" target="_blank" />
        <Popup
          content="Open the blog"
          trigger={<Button as="a" href="https://tutsplus.com" target="_blank" icon="external" circular basic />}
          position="bottom center"
          inverted
        />
      </TitleContainer>
      <ScoreSection>
        <Icon color="yellow" size="big" name="star" />
        <Score key="score">4.3</Score>
        <Popup
          content="Your score 5"
          trigger={<Rating clearable key="rating" maxRating={5} defaultRating={4.3} icon="star" size="massive" />}
          position="bottom center"
          inverted
        />
        <Tags labels={tags} />
      </ScoreSection>
      <div>
        Today Envato Tuts+ is a leading publisher of online tutorials and courses for self-directed
        learners to develop creative skills. Envato Tuts+ is part of Envato, a privately owned
        Australian company that operates an ecosystem of creative websites with a global community.
        We’re passionate about the web and enabling creators to make a living doing what they love.
      </div>
    </Content>
  </Segment>
)

const StyledBlogInformation = styled(BlogInformation) `
  display: flex !important;
  min-height: 210px;
  padding: 0 !important;
`

export { StyledBlogInformation as BlogInformation }