import RichText from '@/Global/components/RIchText/RichText'
import { CredentialStoryblok } from '@/types/component-types-sb'
import { renderRichText } from '@storyblok/react'

type Props = {
	blok: CredentialStoryblok
	main: boolean
	next: boolean
}
const Credential: React.FC<Props> = ({ blok, next, main }) => {
	const { cred, person, linkedin_profile } = blok
	let styles =
		'transition duration-1000 absolute bottom-0 translate-y-full flex flex-col border rounded-lg p-4 w-1/2 h-56 bg-secondarybg'
	if (next) styles += ' scale-50 translate-x-3/4 opacity-50'
	if (!main && !next) styles = 'hidden'

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
