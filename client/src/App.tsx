
import './App.css'

import LoginForm from './components/LoginForm'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './hooks'
import { checkAuth } from './features/userSlice'

function App(): JSX.Element {
  const dispatch = useAppDispatch()
  const { isAuth } = useAppSelector(state => state.user)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth())
    }
  }, [])


  if(!isAuth) {
    return <LoginForm />
  }

  return (
    <>
      <h1>{isAuth ? 'Авторизован' : 'Не авторизован'}</h1>
    </>
  )
}

export default App
