import React, { useState } from 'react'

const LoginForm: React.FC = (): JSX.Element => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

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
      <button>Логин</button>
      <button>Регистрация</button>
    </div>
  )
}

export default LoginForm