import * as React from 'react'
import styled from 'styled-components'
import { Rating, Label } from 'semantic-ui-react'

const ScoreContainer = styled.span`
  display: flex;
  align-items: center;
`

interface Props {
  score: number
  maxRating?: number
}

const RatingPreview = ({ score, maxRating = 5 }: Props) => (
  <ScoreContainer>
    <Rating rating={score} maxRating={maxRating} disabled />
    <Label circular basic>{score}</Label>
  </ScoreContainer>
)

export { RatingPreview }

