import * as React from 'react'
import { Header, HeaderProps, Divider } from 'semantic-ui-react'
import styled, { StyledComponentClass } from 'styled-components'

const StyledHeader = styled(Header)`
  margin-right: 15px !important;
  margin-bottom: 0 !important;
` as StyledComponentClass<HeaderProps, {}>

const StyledDivider = styled(Divider)`
  width: 100%;
`

const SectionTitle = ({ className, ...rest }: HeaderProps) => (
  <div className={className}>
    <StyledHeader as="h4" {...rest} />
    <StyledDivider />
  </div>
)

const StyledSectionTitle = styled(SectionTitle)`
  display: flex;
  align-items: center;
  margin: 10px auto;
` as StyledComponentClass<HeaderProps, {}>

export { StyledSectionTitle as SectionTitle }