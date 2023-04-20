
import { useState } from 'react'
import { Form } from '../../components/form'
import { TextField } from '../../components/text-field'



export const SignUpPage = () => {
  
  const [form, setForm] = useState({
    username: '',
    password: '',
  })


  const handleChange = (event) => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <Form 
      title="Sign Up"
      onSubmit={handleSubmit}
      linkUnder={{ path: '/auth/login', text: 'Go to login' }}
      // error={error}
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