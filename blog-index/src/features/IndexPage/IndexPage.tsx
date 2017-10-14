import * as React from 'react'
import { Header, Container } from 'semantic-ui-react'
import styled from 'styled-components'
import { BlogCard } from './BlogCard'
import { SearchInput } from './SearchInput'
import { ShowcaseSection } from './ShowcaseSection'


const IndexPage = ({ className }: { className: string }) => (
  <Container className={className}>
    <Container textAlign="center">
      <Header as="h1">What are you interested in?</Header>
      <SearchInput />
    </Container>
    <ShowcaseSection title="Featured" icon="empty star">
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </ShowcaseSection>
    <ShowcaseSection title="Trending" icon="line chart">
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </ShowcaseSection>
    <ShowcaseSection title="Lifestyle" icon="image">
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </ShowcaseSection>
    <ShowcaseSection title="Coding" icon="code">
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </ShowcaseSection>
    <ShowcaseSection title="Travel" icon="travel">
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </ShowcaseSection>
  </Container>
)

const StyledIndexPage = styled(IndexPage)`
  margin-top: 6rem;
`

export { StyledIndexPage as IndexPage }