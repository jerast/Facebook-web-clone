import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '@app/hooks/useAuth'
import { useForm } from '@app/hooks/useForm'
import { title } from '@shared/utils/title'
import { useEffect } from 'react'

const loginFormInit = {
  user: 'jose.romero.9602',
  password: '12345678'
}

export const LoginPage = () => {
  const navigate = useNavigate()
  const { logIn } = useAuth()
  const { form, isLoading, onChangeForm,  onSubmitForm } = useForm(loginFormInit)
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    const result = await onSubmitForm( logIn )
    result.ok && navigate('/')
  }

  useEffect(() => {
    title('Log into Facebook')
  }, [])

  return (
    <form 
      onSubmit={handleSubmit}
      className="login-form"
    >
      <h1 className="login-form__title">Log Into Facebook</h1>
      <input 
        type="text"
        name="user"
        placeholder="Email or username"
        className="login-form__input"
        value={form.user}
        onChange={onChangeForm}
      />
      <input 
        type="password" 
        name="password"
        placeholder="Password"
        className="login-form__input"
        value={form.password}
        onChange={onChangeForm}
      />
      <button
        type="submit"
        className="login-form__button"
        disabled={isLoading}
      >
        Log In
      </button>
      <Link 
        to="/reg"
        className="login-form__link"
      >
        Sign up for Facebook
      </Link>
    </form>
  )
}
