import * as React from 'react'
import { Menu, Button } from 'semantic-ui-react'

const Pagination = () => (
  <Menu attached pagination>
    <Menu.Item as={Button} name="1" active />
    <Menu.Item as={Button} name="2" />
    <Menu.Item as={Button} name="3" />
    <Menu.Item disabled>...</Menu.Item>
    <Menu.Item as={Button} name="8" />
    <Menu.Item as={Button} name="9" />
    <Menu.Item as={Button} name="10" />
    <Menu.Item as={Button} name="11" />
    <Menu.Item as={Button} name="12" />
  </Menu>
)

export { Pagination }