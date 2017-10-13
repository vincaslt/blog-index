import * as React from 'react'
import styled, { StyledComponentClass } from 'styled-components'
import { Menu, MenuProps, Button, Input } from 'semantic-ui-react'

const StyledMenu = styled(Menu)`
  box-shadow: none !important;
` as StyledComponentClass<MenuProps, {}>

const Header = () => ( 
  <StyledMenu fixed="top">
    <Menu.Item header name="Sign Up">
      BlogIdx
    </Menu.Item>
    <Menu.Menu position="right">
      <Menu.Item name="Sign Up">
        <Input className="icon" icon="search" placeholder="Search..." />
      </Menu.Item>
      <Menu.Item name="Sign Up">
        <Button primary>Sign Up</Button>
      </Menu.Item>
    </Menu.Menu>
  </StyledMenu>
)

export { Header }