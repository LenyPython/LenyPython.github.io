import { StoryblokComponent } from '@storyblok/react'
import {
	CredentialStoryblok,
	CredentialsStoryblok
} from '@/types/component-types-sb'
import { useState } from 'react'

type Props = {
	blok: CredentialsStoryblok
}

const Credentials: React.FC<Props> = ({ blok }) => {
	const { creds } = blok
	const [idx, setIdx] = useState(0)

	const prevIdx = () => {
		setIdx(prev => {
			if (prev === 0) return creds.length - 1
			return prev - 1
		})
	}
	const nextIdx = () => {
		setIdx(prev => {
			if (prev === creds.length - 1) return 0
			return prev + 1
		})
	}
	return (
		<div className='relative w-3/4 max-w-4xl h-full p-10 rounded-xl bg-black backdrop-blur-lg '>
			<h2 className='absolute top-0 left-8 -translate-y-1/2 text-3xl'>
				{blok.headline}
			</h2>
			<button onClick={prevIdx}>prev</button>
			<button onClick={nextIdx}>next</button>
			<div className='w-full relative'>
				{creds.map((component: CredentialStoryblok, i: number) => {
					let styles = {
						main: false,
						next: false
					}
					if (i === idx) styles.main = true
					else if (i === idx + 1 || (idx === creds.length - 1 && i === 0))
						styles.next = true
					console.log(i, idx, styles)
					return (
						<StoryblokComponent
							blok={component}
							key={component._uid}
							{...styles}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default Credentials
