import * as React from 'react'
import { useDispatch } from 'react-redux'
import { onGetUserData } from './modules/dashboard/dashboard-slice'
import HomePage from './pages/main'

function App() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(onGetUserData())
  }, [])

  return <HomePage />
}

export default App