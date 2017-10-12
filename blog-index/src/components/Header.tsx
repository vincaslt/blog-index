import * as React from 'react'
import { Menu, Button, Input } from 'semantic-ui-react'

const Header = () => ( 
  <Menu attached="top">
    <Menu.Item name="Sign Up">
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
  </Menu>
)

export { Header }