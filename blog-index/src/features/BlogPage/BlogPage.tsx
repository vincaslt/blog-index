import * as React from 'react'
import { BlogInformation } from '../../components/BlogInformation'
import { UserReviews } from './UserReviews'
import { Comments } from './Comments'

const BlogPage = () => (
  <div>
    <BlogInformation tags={['Tutorials', 'Programming', 'Multiple Authors']} />
    <UserReviews />
    <Comments />
  </div>
)

export { BlogPage }