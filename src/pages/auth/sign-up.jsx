import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Form } from '../../components/form'
import { TextField } from '../../components/text-field'
import { authActions } from '../../store/auth/slices'
import { useNavigate } from 'react-router-dom'


export const SignUpPage = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    username: '',
    password: '',
  })

  const dispatch = useDispatch()
  const { status, error } = useSelector(state => state.auth.login)

  useEffect(() => {
    if (status === 'fulfilled') {
      navigate('/')
      return () => {
        dispatch(authActions.resetLogin())
      }
    }
  }, [status, navigate, dispatch])

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
      title="Sign Up"
      onSubmit={handleSubmit}
      linkUnder={{ path: '/auth/login', text: 'Go to login' }}
      error={error}
    >
      <TextField
        type="text"
        name="username"
        placeholder="username"
        value={form.username}
        onChange={handleChange}
      />

      <TextField
        type="text"
        name="first Name"
        placeholder="first name"
        value={form.firstName}
        onChange={handleChange}
      />

      <TextField
        type="number"
        name="age"
        placeholder="age"
        value={form.age}
        onChange={handleChange}
      />
      <TextField
        type="password"
        name="password"
        placeholder="password"
        value={form.password}
        onChange={handleChange}
      />
      <TextField
        type="repeat password"
        name="repeat password"
        placeholder="repeat password"
        value={form.repeatpassword}
        onChange={handleChange}
      />
    </Form>
  )
}