'use client'
import Link from 'next/link'
import { useState } from 'react'
import SvgProvider, {
	DevEnum,
	SocialEnum
} from '@/Global/components/SvgProvider/SvgProvider'
import { ContactStoryblok } from '@/types/component-types-sb'

type Props = {
	blok: ContactStoryblok
}

const Contact: React.FC<Props> = ({ blok }) => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [msg, setMsg] = useState('')
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [formStatus, setFormStatus] = useState('')
	const [formStatusMsg, setFormStatusMsg] = useState('')

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
		setIsSubmitting(true)
		try {
			const responsePromise = await fetch(
				'https://formsubmit.co/ajax/b5310cdf113b0f1a870bde0bc5c5553d',
				{
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
				}
			)
			const response = await responsePromise.json()
			if (response?.success === 'true') {
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
				setIsSubmitting(false)
			} else {
				setFormStatusMsg(
					'Something went wrong, please try again later or write a direct email to piotr.lenartowicz@yahoo.com'
				)
				setFormStatus('error')
				setTimeout(() => {
					setFormStatusMsg('')
					setFormStatus('')
				}, 7000)
				setIsSubmitting(false)
			}
		} catch (error) {
			setFormStatusMsg(
				'Something went wrong, please try again later or write a direct email to piotr.lenartowicz@yahoo.com'
			)
			setFormStatus('error')
			setTimeout(() => {
				setFormStatusMsg('')
				setFormStatus('')
			}, 7000)
			console.error(error)
			setIsSubmitting(false)
		}
	}
	const svgConfig = {
		width: 55,
		height: 55,
		color: 'hsla(120,100%,50%, .8)'
	}
	const styles =
		'w-4/5 m-5 p-2 bg-background text-font placeholder:text-font border-b border-font outline-0 focus:border-b-4'
	let statusMsgClasses = ''
	if (formStatus === 'success') statusMsgClasses = 'bg-font p-2'
	else if (formStatus === 'error')
		statusMsgClasses = 'p-2 bg-red-600 text-white'
	return (
		<div className='relative flex flex-col items-center w-3/4 max-w-4xl p-5 shadow-main shadow-font rounded-xl backdrop-blur-lg'>
			<h2 className='absolute top-0 left-8 -translate-y-3/4 text-3xl md:text-5xl'>
				{blok.headline}
			</h2>
			<div className='flex items-center justify-between w-full max-w-md'>
				<Link
					className='w-full flex justify-between items-center'
					href='https://github.com/LenyPython'
					target='_blank'
					rel='noreferrer'
				>
					See my github:
					<SvgProvider type={DevEnum.github} options={svgConfig} />
				</Link>
			</div>
			<div className='flex items-center justify-between w-full max-w-md'>
				<Link
					className='w-full flex justify-between items-center'
					href='https://github.com/LenyPython'
					target='_blank'
					rel='noreferrer'
				>
					Connect with me on Linkedin:{' '}
					<SvgProvider type={SocialEnum.linkedin} options={svgConfig} />
				</Link>
			</div>
			<h3 className='text-2xl my-3'>Write a message:</h3>
			<form
				className='flex flex-col w-full items-center'
				onSubmit={handleSubmit}
			>
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
					className={`${styles} h-40 resize-none`}
					value={msg}
					name='message'
					onChange={updateMsg}
					placeholder='Messsage...'
					required
				/>
				<button
					className='text-xl py-1 px-8 mb-3 shadow-main shadow-font duration-700 hover:bg-font hover:text-background disabled:opacity-50 disabled:animate-spin'
					type='submit'
					disabled={isSubmitting}
				>
					{isSubmitting ? 'Post' : 'Send'}
				</button>
				<div
					className={`text-center text-sm w-full ${statusMsgClasses} text-background z-10 rounded-lg md:text-base`}
				>
					{formStatusMsg}
				</div>
			</form>
		</div>
	)
}

export default Contact
