import * as React from 'react'
import styled, { StyledComponentClass } from 'styled-components'
import { Segment, SegmentProps, Container, Button, ButtonProps } from 'semantic-ui-react'

const FooterContainer = styled(Segment) `
  border: 0 !important;
  margin-top: 4rem !important;
  min-height: 6rem !important;
` as StyledComponentClass<SegmentProps, {}>

const Section = styled.div`
  padding-top: 0.7rem;
`

const SocialButton = styled(Button)`
  margin: 0 0.7rem !important;
` as StyledComponentClass<ButtonProps, {}>

const Footer = () => (
  <FooterContainer as="footer" inverted attached>
    <Container textAlign="center">
      <div>
        <SocialButton circular color="facebook" icon="facebook" />
        <SocialButton circular color="twitter" icon="twitter" />
        <SocialButton circular color="red" icon="reddit" />
        <SocialButton circular color="grey" icon="github" />
      </div>
      <Section>
        Search | About | Contact
      </Section>
    </Container>
  </FooterContainer>
)

export { Footer }