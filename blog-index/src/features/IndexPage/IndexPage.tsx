import * as React from 'react'
import { Header, Container } from 'semantic-ui-react'
import styled from 'styled-components'
import { SearchInput } from './SearchInput'
import { SectionTitle } from './SectionTitle'

const Content = styled.div`
  height: 150px
`

const IndexPage = ({ className }: { className: string }) => (
  <Container className={className} textAlign="center">
    <Header as="h1">What are you interested in?</Header>
    <SearchInput />
    <SectionTitle icon="empty star" content="Featured" />
    <Content />
    <SectionTitle icon="line chart" content="Trending" />
    <Content />
    <SectionTitle icon="image" content="Lifestyle" />
    <Content />
    <SectionTitle icon="code" content="Coding" />
    <Content />
    <SectionTitle icon="travel" content="Travel" />
    <Content />
  </Container>
)

const StyledIndexPage = styled(IndexPage)`
  margin-top: 6rem;
`

export { StyledIndexPage as IndexPage }