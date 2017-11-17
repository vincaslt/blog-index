import * as React from 'react'
import { connect } from 'react-redux'
import { BlogInfoCard } from '../components/BlogInfoCard'
import { State as ReduxState } from '../modules'
import { selectors } from '../modules/blogs'

interface OwnProps {
  id: number
}

interface StateProps {
  title: string
  shortDescription: string
  photo: string
  rating?: number
  tags?: string[]
  category: { icon: string, name: string }
}

type Props = OwnProps & StateProps

const BlogInfoCardContainer = ({ ...rest }: Props) => (
  <BlogInfoCard {...rest} />
)

const mapStateToProps = (state: ReduxState, props: OwnProps): StateProps => {
  const blog = selectors.blogByIdSelector(state, props.id)
  if (!blog) {
    throw new Error(`Blog ${props.id} is undefined, but should have been`)
  }
  return {
    title: blog.title,
    rating: blog.rating,
    shortDescription: blog.tagline || blog.description,
    photo: blog.photo,
    tags: blog.tags,
    category: { icon: blog.category.icon, name: blog.category.name }
  }
}

export const ConnectedBlogInfoCard = connect(mapStateToProps)(BlogInfoCardContainer)

export { ConnectedBlogInfoCard as BlogInfoCardContainer }