import React, { useState } from 'react'
import { useAppDispatch } from '../hooks'
import { login, registration } from '../features/userSlice'

const LoginForm: React.FC = (): JSX.Element => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const dispatch = useAppDispatch()

  const handleLogin = (email: string, password: string) => {
    dispatch(login({ email, password }))
  }

  const handleRegistration = (email: string, password: string) => {
    dispatch(registration({ email, password }))
  }


  return (
    <div>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="text"
        placeholder='Email'
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder='Пароль'
      />
      <button onClick={() => handleLogin(email, password)}>Логин</button>
      <button onClick={() => handleRegistration(email, password)}>Регистрация</button>
    </div>
  )
}

export default LoginForm