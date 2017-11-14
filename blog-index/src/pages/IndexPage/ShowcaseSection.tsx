import * as React from 'react'
import styled from 'styled-components'
import { Card } from 'semantic-ui-react'
import { SectionTitle } from './SectionTitle'

const Content = styled(Card.Group)`
  min-height: 150px;
  padding: 0.5rem 0 1rem 2.5rem;
`

interface Props {
  icon: string
  title: string
  children: React.ReactNode
}

const ShowcaseSection = ({ icon, title, children }: Props) => (
  <div>
    <SectionTitle icon={icon} content={title} />
    <Content>
      {children}
    </Content>
  </div>
)

export { ShowcaseSection }