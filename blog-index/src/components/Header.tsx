import * as React from 'react'
import { Link } from 'react-router-dom'
import styled, { StyledComponentClass } from 'styled-components'
import { Menu, MenuProps, Button } from 'semantic-ui-react'
import { routeNames } from '../constants/routeNames'
import { SearchInputContainer as SearchInput } from '../containers/SearchInputContainer'

const StyledMenu = styled(Menu)`
  box-shadow: none !important;
` as StyledComponentClass<MenuProps, {}>

const Header = () => (
  <StyledMenu fixed="top">
    <Menu.Item header>
      <Link to={routeNames.index.url}>Blog Seeker</Link>
    </Menu.Item>
    <Menu.Menu position="right">
      <Menu.Item>
        <SearchInput secondary />
      </Menu.Item>
      <Menu.Item>
        <Link to={routeNames.addBlog.url}>
          <Button color="teal" icon="compose" labelPosition="right" content="List a Blog" />
        </Link>
      </Menu.Item>
    </Menu.Menu>
  </StyledMenu>
)

export { Header }