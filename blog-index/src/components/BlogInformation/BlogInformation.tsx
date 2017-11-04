import * as React from 'react'
import styled, { StyledComponentClass } from 'styled-components'
import {
  Segment, Image, Header, HeaderProps, Button, Icon, Popup
} from 'semantic-ui-react'
import { BlogRatingInput } from '../../containers/BlogRatingInput'
import { Tags } from './Tags'

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


export interface Props {
  id: number
  title: string
  image: string
  rating: number
  link: string
  description: string
  tags?: string[]
  className?: string
}

// TODO: connected rating
// TODO: formalize, that image size is 1024x720 (720p)
const BlogInformation = ({
  id,
  image,
  title,
  rating,
  description,
  link,
  tags = [],
  className
}: Props) => (
  <Segment className={className} attached>
    <Image
      label={{ as: 'span', color: 'yellow', content: 'Featured', icon: 'empty star', ribbon: true }}
      src={image}
      size="large"
    />
    <Content>
      <TitleContainer>
        <Title content={title} as="a" href="https://tutsplus.com" target="_blank" />
        <Popup
          content="Open the blog"
          trigger={<Button as="a" href={link} target="_blank" icon="external" circular basic />}
          position="bottom center"
          inverted
        />
      </TitleContainer>
      <ScoreSection>
        <Icon color="yellow" size="big" name="star" />
        <Score key="score">{rating}</Score>
        <BlogRatingInput blogId={id} />
        <Tags labels={tags} />
      </ScoreSection>
      <div>{description}</div>
    </Content>
  </Segment>
)

const StyledBlogInformation = styled(BlogInformation) `
  display: flex !important;
  min-height: 210px;
  padding: 0 !important;
`

export { StyledBlogInformation as BlogInformation }