import * as React from 'react'
import { Header, HeaderProps } from 'semantic-ui-react'
import styled, { StyledComponentClass } from 'styled-components'

const HR = styled.hr`
  width: 100%;
  margin-left: 15px;
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`

const SectionTitle = ({ className, ...rest }: HeaderProps) => (
  <div className={className}>
    <div>
      <Header as="h4" {...rest} />
    </div>
    <HR />
  </div>
)

const StyledSectionTitle = styled(SectionTitle)`
  display: flex;
  align-items: center;
  margin: 10px auto;
` as StyledComponentClass<HeaderProps, {}>

export { StyledSectionTitle as SectionTitle }