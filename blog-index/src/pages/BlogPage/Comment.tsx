import * as React from 'react'
import { Comment as CommentItem } from 'semantic-ui-react'
import * as avatarImage from './avatar.png'

interface Props {
  children?: React.ReactNode
}

const Comment = ({ children }: Props) => (
  <CommentItem>
    <CommentItem.Avatar src={avatarImage} />
    <CommentItem.Content>
      <CommentItem.Author as="a">Elliot Fu</CommentItem.Author>
      <CommentItem.Metadata>
        <div>Yesterday at 12:30AM</div>
      </CommentItem.Metadata>
      <CommentItem.Text>
        <p>This has been very useful for my research. Thanks as well!</p>
      </CommentItem.Text>
      <CommentItem.Actions>
        <CommentItem.Action>Reply</CommentItem.Action>
      </CommentItem.Actions>
    </CommentItem.Content>
    <CommentItem.Group collapsed={!children}>
      {children}
    </CommentItem.Group>
  </CommentItem>
)

export { Comment }