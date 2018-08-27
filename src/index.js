import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'

import App from './components/App'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCog, faEdit, faHome, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import commonStore from './stores/commonStore'

library.add(faEdit)
library.add(faCog)
library.add(faHome)
library.add(faSignInAlt)
library.add(faSignOutAlt)

const stores = {
  commonStore,
}

ReactDOM.render((
  <Provider {...stores}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
), document.getElementById('root'))
