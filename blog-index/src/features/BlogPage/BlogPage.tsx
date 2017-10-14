import * as React from 'react'
import { MainInfo } from './MainInfo'
import { UserReviews } from './UserReviews'
import { Comments } from './Comments'

const BlogPage = () => (
  <div>
    <MainInfo />
    <UserReviews />
    <Comments />
  </div>
)

export { BlogPage }