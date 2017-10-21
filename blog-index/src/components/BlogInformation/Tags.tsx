import * as React from 'react'
import styled from 'styled-components'
import { Label, SemanticCOLORS } from 'semantic-ui-react'

const Labels = styled.div`
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  margin-left: 1rem;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

const StyledLabel = styled(Label)`
  margin: 0.1rem !important;
`

interface Props {
  labels?: string[]
}

const assignColor = (i: number) => {
  return [
    'violet',
    'blue',
    'teal'
  ][i % 3] as SemanticCOLORS
}

const Tags = ({ labels = [] }: Props) => {
  const tags = labels.map((tag, i) => (
    <StyledLabel key={tag} color={assignColor(i)}>{tag}</StyledLabel>
  ))
  return (
    <Labels>
      {tags}
    </Labels>
  )
}

export { Tags }