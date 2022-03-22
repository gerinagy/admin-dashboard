import * as React from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { onGetUserData } from './modules/dashboard/dashboard-slice'
import DashboardPage from './pages/dashboard/index'
import UserFormPage from './pages/user-form/index'

function App() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(onGetUserData())
  }, [dispatch])

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<DashboardPage />} />
        <Route exact path='/user-form' element={<UserFormPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App