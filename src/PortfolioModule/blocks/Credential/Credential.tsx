import RichText from '@/Global/components/RIchText/RichText'
import { CredentialStoryblok } from '@/types/component-types-sb'
import { renderRichText } from '@storyblok/react'
import Link from 'next/link'

type Props = {
	blok: CredentialStoryblok
	center: boolean
	left: boolean
	right: boolean
}
const general =
	'ease-linear duration-1000 absolute flex flex-col justify-between rounded-lg p-5 shadow-main shadow-font bg-background/90'
const secondary = ' h-[65%] top-[105%] w-1/3 opacity-50 -z-10 md:w-1/5'
const prev = ' left-0'
const main =
	' top-[230%] w-5/6 h-[450%] delay-300 left-1/2 -translate-x-1/2 md:w-1/2 md:top-[150%] xl:w-3/5'
const next = ' text-right left-full -translate-x-full'
const Credential: React.FC<Props> = ({ blok, left, center, right }) => {
	const { cred, person, linkedin_profile } = blok
	let styles = 'ease-linear duration-1000 absolute left-1/2 top-0 scale-0'
	if (center) styles = general + main
	else if (left) styles = general + secondary + prev
	else if (right) styles = general + secondary + next

	return (
		<div className={styles}>
			{center && (
				<div className='overflow-y-auto overflow-x-clip'>
					<RichText className='mb-6' html={renderRichText(cred)} />
				</div>
			)}
			<div className='text-sm md:text-base'>
				<p className='mb-1'>{person}</p>
				{linkedin_profile && (
					<Link href={linkedin_profile.url} target='_blank' rel='noreferrer'>
						Linkedin{' '}
					</Link>
				)}
			</div>
		</div>
	)
}

export default Credential
