import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './app/store'
import { Provider } from 'react-redux'
import { onGetUserData } from './modules/dashboard/dashboard-slice'

function GetUsers() {
  if (store.getState().dashboard.usersData.length === 0) {
    return store.dispatch(onGetUserData())
  }
}
GetUsers()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)