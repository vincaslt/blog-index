import * as React from 'react'
import { BlogCard } from './BlogCard'
import { ShowcaseSection } from './ShowcaseSection'

const Showcase = () => (
  <div>
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
  </div>
)

export { Showcase }