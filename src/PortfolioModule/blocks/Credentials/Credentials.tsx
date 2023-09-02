import { StoryblokComponent } from '@storyblok/react'
import {
	CredentialStoryblok,
	CredentialsStoryblok
} from '@/types/component-types-sb'
import { useState } from 'react'
import SvgProvider, {
	UtilSvgEnum
} from '@/Global/components/SvgProvider/SvgProvider'

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
	const svgOptions = {
		width: 50,
		height: 50,
		color: 'hsl(120, 100%, 50%)'
	}
	return (
		<div className='relative flex justify-evenly items-center h-8 w-3/4 max-w-4xl p-5 shadow-main shadow-font rounded-xl backdrop-blur-lg'>
			<h2 className='absolute top-0 left-8 -translate-y-3/4 text-3xl'>
				{blok.headline}
			</h2>
			<button onClick={prevIdx}>
				<SvgProvider type={UtilSvgEnum.rightArrow} options={svgOptions} />
			</button>
			{`${idx + 1} / ${creds.length}`}
			<button onClick={nextIdx}>
				<SvgProvider type={UtilSvgEnum.leftArrow} options={svgOptions} />
			</button>
			{creds.map((component: CredentialStoryblok, i: number) => {
				let styles = {
					center: false,
					right: false,
					left: false
				}
				if (i === idx) styles.center = true
				else if (i === idx + 1 || (idx === creds.length - 1 && i === 0))
					styles.right = true
				else if (i === idx - 1 || (idx === 0 && i === creds.length - 1))
					styles.left = true
				return (
					<StoryblokComponent
						blok={component}
						key={component._uid}
						{...styles}
					/>
				)
			})}
		</div>
	)
}

export default Credentials
