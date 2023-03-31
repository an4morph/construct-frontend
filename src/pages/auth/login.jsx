import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { Form } from '../../components/form'
import { TextField } from '../../components/text-field'
import * as authActions from '../../store/auth/actions'


export const LoginPage = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  })

  const dispatch = useDispatch()
  const { status, error } = useSelector(state => state.auth.login)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(authActions.login(form))
  }

  return (
    <Form 
      title="Log in"
      onSubmit={handleSubmit}
      linkUnder={{ path: '/auth/signup', text: 'Go to sign up' }}
    >
      <div>{status}: {error}</div>
      <TextField
        type="text"
        name="username"
        placeholder="username"
        value={form.username}
        onChange={handleChange}
      />
      <TextField
        type="password"
        name="password"
        placeholder="password"
        value={form.password}
        onChange={handleChange}
      />
    </Form>
  )
}