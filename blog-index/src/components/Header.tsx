import * as React from 'react'
import { Link } from 'react-router-dom'
import styled, { StyledComponentClass } from 'styled-components'
import { Menu, MenuProps, Button, Input } from 'semantic-ui-react'
import { routeNames } from '../constants/routeNames'

const StyledMenu = styled(Menu)`
  box-shadow: none !important;
` as StyledComponentClass<MenuProps, {}>

const Header = () => ( 
  <StyledMenu fixed="top">
    <Menu.Item header>
      <Link to={routeNames.index}>Blog Seeker</Link>
    </Menu.Item>
    <Menu.Menu position="right">
      <Menu.Item>
        <Input className="icon" icon="search" placeholder="Search..." />
      </Menu.Item>
      <Menu.Item>
        <Link to={routeNames.addBlog}>
          <Button color="teal" icon="compose" labelPosition="right" content="List a Blog" />
        </Link>
      </Menu.Item>
    </Menu.Menu>
  </StyledMenu>
)

export { Header }