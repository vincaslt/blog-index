import * as React from 'react'
import { Link } from 'react-router-dom'
import { routeNames } from '../../constants/routeNames'
import styled, { StyledComponentClass } from 'styled-components'
import { Image, ImageProps, Label, Header, HeaderProps } from 'semantic-ui-react'
import { RatingPreview } from '../../components/RatingPreview' 
import { colors } from '../../constants/colors'
import * as blogImage from './envato-bg.png'

const Container = styled.div`
  margin: 1.5rem 0;
  border: 1px solid ${colors.border};
  background-color: white;
  min-height: 10rem;
  display: flex;
`

const ContentContainer = styled.div`
  padding: 0.75rem;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
`

const Content = styled.div`
  display: flex;
  flex: 1 0 auto;
  margin: 0.2rem 0;
`

const Heading = styled.div`
  display: flex;
  flex: 1 0 auto;
  align-items: flex-start;
  justify-content: space-between;
`

const Extras = styled.div`
  display: flex;
  justify-content: space-between;
`

const Title = styled(Header)`
  margin: 0 1rem 0 0 !important;
  a {
    color: ${colors.font} !important;
  }
` as StyledComponentClass<HeaderProps, {}>

const BlogImage = styled(Image)`
  height: 10rem;
  img {
    height: 100% !important;
  }
` as StyledComponentClass<ImageProps, {}>

const BlogResult = () => (
  <Container>
    <Link to={routeNames.blog.url}>
      <BlogImage
        label={{ as: 'span', content: 'New', ribbon: true }}
        src={blogImage}
      />
    </Link>
    <ContentContainer>
      <Heading>
        <Title as="h3">
          <Link to={routeNames.blog.url}>
            Envato Tuts+
          </Link>
          <Header.Subheader>
            Tutorials, Programming, Multiple Authors
          </Header.Subheader>
        </Title>
        <RatingPreview score={4.3} />
      </Heading>
      <Content>
        Some very short tagline taking at most one hundred
        and fifteen text characters and taking up to three lines of text
      </Content>
      <Extras>
        <div>
          <Label icon="comments outline" detail="reviews" content="121" image basic />
          <Label icon={{ name: 'comments', key: 'comments_icon' }} detail="comments" content="56" image basic />
        </div>
        <Label icon="checkmark" content="Verified" color="teal" basic />
      </Extras>
    </ContentContainer>
  </Container>
)

export { BlogResult }