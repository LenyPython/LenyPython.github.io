import RichText from '@/Global/components/RIchText/RichText'
import { CredentialStoryblok } from '@/types/component-types-sb'
import { renderRichText } from '@storyblok/react'

type Props = {
	blok: CredentialStoryblok
	center: boolean
	left: boolean
	right: boolean
}
const general =
	'ease-linear duration-1000 absolute top-[150%] flex flex-col rounded-lg p-5 h-[450%] shadow-main shadow-font bg-background/90'
const prev = ' w-1/6 left-0 opacity-50 -z-10'
const main = ' w-1/2 delay-300 left-1/2 -translate-x-1/2'
const next = ' w-1/6 left-full -translate-x-full opacity-50 -z-10'
const Credential: React.FC<Props> = ({ blok, left, center, right }) => {
	const { cred, person, linkedin_profile } = blok
	let styles = 'ease-linear duration-1000 absolute left-1/2 top-0 scale-0'
	if (center) styles = general + main
	else if (left) styles = general + prev
	else if (right) styles = general + next

	return (
		<div className={styles}>
			<div className='overflow-y-auto overflow-x-clip'>
				<RichText className='mb-6' html={renderRichText(cred)} />
			</div>
			<p className='mb-3'>{person}</p>
			{linkedin_profile && (
				<a href={linkedin_profile.url} target='_blank' rel='noreferrer'>
					See Linkedin{' '}
				</a>
			)}
		</div>
	)
}

export default Credential
