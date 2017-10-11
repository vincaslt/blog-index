import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import { injectGlobal } from 'styled-components'
import { store, browserHistory } from './store'
import { Application } from './features/Application'
import { colors } from './constants/colors'
import 'core-js/es7'

import 'normalize.css'
import 'semantic-ui-css/semantic.min.css'

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  * {
    box-sizing: border-box
  }

  body {
    background-color: ${colors.background}
  }
`

ReactDOM.render(
  <Provider store={store} >
    <ConnectedRouter history={browserHistory}>
      <Application />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
)
