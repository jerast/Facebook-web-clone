import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '@app/hooks/useAuth'
import { useForm } from '@app/hooks/useForm'
import { title } from '@shared/utils/title'
import { useEffect } from 'react'

const SignUpFormInit = {
	firstName: 'Aura',
	lastName: 'Castro',
	email: 'aura@gmail.com',
	password: '12345678'
}

export const SignupPage = () => {
	const navigate = useNavigate()
	const { signUp } = useAuth()
	const { form, isLoading, onChangeForm,  onSubmitForm } = useForm(SignUpFormInit)

	useEffect(() => {
		title('Sign Up for Facebook')
	}, [])

	const handleSubmit = async (event) => {
		event.preventDefault()

		const result = await onSubmitForm( signUp )
		result.ok && navigate('/login')
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="signup-form"
		>
			<div className="signup-form__header">
				<h1 className="signup-form__title">Create a new account</h1>
				<span className="signup-form__subtitle">It’s quick and easy.</span>
			</div>
			<div className="signup-form__content">
				<input
					type="text"
					name="firstName"
					placeholder="First name"
					className="signup-form__input"
					value={form.firstName}
					onChange={onChangeForm}
					autoComplete="off"
				/>
				<input
					type="text"
					name="LastName"
					placeholder="Last name"
					className="signup-form__input"
					value={form.lastName}
					onChange={onChangeForm}
					autoComplete="off"
				/>
				<input
					type="email"
					name="email"
					placeholder="Email"
					className="signup-form__input"
					value={form.email}
					onChange={onChangeForm}
					autoComplete="off"
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					className="signup-form__input"
					value={form.password}
					onChange={onChangeForm}
					autoComplete="off"
				/>
			</div>
			<div className="signup-form__abbeas-data">
				<span>People who use our service may have uploaded your contact information to Facebook. Learn more.</span>
				<span>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.</span>
			</div>
			<button
				type="submit"
				className="signup-form__button"
				disabled={isLoading}
			>
				Sign Up
			</button>
			<Link
				to="/login"
				className="signup-form__link"
			>
				Already have an account?
			</Link>
		</form>
	)
}
