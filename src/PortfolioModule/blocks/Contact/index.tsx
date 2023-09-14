import { useState } from 'react'

// add propert storyblok types
type Props = {
	blok: any
}

const Contact: React.FC<Props> = ({ blok }) => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [msg, setMsg] = useState('')
	const [formStatus, setFormStatus] = useState('')
	const [formStatusMsg, setFormStatusMsg] = useState('default msg')

	const updateName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value)
	}
	const updateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value)
	}
	const updateMsg = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setMsg(e.target.value)
	}
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		fetch('https://formsubmit.co/ajax/piotr.lenartowicz@yahoo.com', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify({
				name,
				email,
				msg,
				_subject: `Portfolio form question from: ${name}`,
				_template: 'table',
				_next: 'https://lenypython.github.io/'
			})
		})
			.then(response => response.json())
			.then(data => {
				if (data?.success === 'true') {
					setFormStatusMsg(
						"Thank you! Your message has been sent I'll answer as soon as I can."
					)
					setFormStatus('success')
					setTimeout(() => {
						setFormStatusMsg('')
						setFormStatus('')
					}, 7000)
					setEmail('')
					setName('')
					setMsg('')
				} else {
					setFormStatusMsg(
						'Something went wrong, please try again later or write a direct email to piotr.lenartowicz@yahoo.com'
					)
					setFormStatus('error')
					setTimeout(() => {
						setFormStatusMsg('')
						setFormStatus('')
					}, 7000)
				}
			})
			.catch(error => {
				setFormStatusMsg(
					'Something went wrong, please try again later or write a direct email to piotr.lenartowicz@yahoo.com'
				)
				setFormStatus('error')
				setTimeout(() => {
					setFormStatusMsg('')
					setFormStatus('')
				}, 7000)
				console.error(error)
			})
	}
	const styles =
		'm-5 p-2 bg-background text-font placeholder:text-font border-b outline-0 focus:border-b-4'
	return (
		<div className='relative flex flex-col items-center w-3/4 max-w-4xl p-5 shadow-main shadow-font rounded-xl backdrop-blur-lg'>
			<h2 className='absolute top-0 left-8 -translate-y-3/4 text-3xl'>
				{blok.headline}
			</h2>
			<div
				className={`text-center w-full p-2 ${
					formStatus === 'success' ? 'bg-font' : 'bg-red'
				} text-background z-10 rounded-lg`}
			>
				{formStatusMsg}
			</div>
			<form className='flex flex-col min-w-250 w-1/2' onSubmit={handleSubmit}>
				<input
					className={styles}
					type='text'
					name='name'
					value={name}
					onChange={updateName}
					placeholder='Name...'
				/>
				<input
					className={styles}
					type='email'
					name='email'
					value={email}
					onChange={updateEmail}
					placeholder='Email...'
					required
				/>
				<textarea
					className={`${styles} h-80 resize-none`}
					value={msg}
					name='message'
					onChange={updateMsg}
					placeholder='Messsage...'
					required
				/>
				<button type='submit'>Send</button>
			</form>
		</div>
	)
}

export default Contact
