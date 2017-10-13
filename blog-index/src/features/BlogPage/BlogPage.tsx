import * as React from 'react'
import { Container } from 'semantic-ui-react'
import { MainInfo } from './MainInfo'
import { UserReviews } from './UserReviews'
import { Comments } from './Comments'
import styled from 'styled-components'

interface Props {
  className?: string
}

const BlogPage = ({ className }: Props) => (
  <Container className={className}>
    <MainInfo />
    <UserReviews />
    <Comments />
  </Container>
)

const StyledBlogPage = styled(BlogPage)`
  margin-top: 6rem;
`

export { StyledBlogPage as BlogPage }