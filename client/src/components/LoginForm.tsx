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
    </div>
  )
}

export default LoginForm