import * as React from 'react'
import styled from 'styled-components'
import { Comment as CommentItem, Form, Button } from 'semantic-ui-react'
import { Comment } from './Comment'

interface Props {
  className?: string
}

const Comments = ({ className }: Props) => (
  <div className={className}>
    <CommentItem.Group>
      <Comment>
        <Comment />
        <Comment />
      </Comment>
      <Comment>
        <Comment>
          <Comment />
          <Comment />
        </Comment>
        <Comment />
      </Comment>
    </CommentItem.Group>
    <Form>
      <Form.Input placeholder="Name" required width="6" />
      <Form.TextArea placeholder="Comment" required width="10" />
      <Button content="Comment" labelPosition="left" icon="edit" primary />
    </Form>
  </div>
)

const StyledComments = styled(Comments) `
  margin-top: 3rem;
`

export { StyledComments as Comments }