import * as React from 'react'
import { Input } from 'semantic-ui-react'

const IndexPage = () => (
  <div>
    <div>What interests you now?</div>
    <Input action={{ icon: 'search' }} placeholder="Find it..." />
  </div>
)

export { IndexPage }