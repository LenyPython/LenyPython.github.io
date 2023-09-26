import RichText from '@/Global/components/RIchText/RichText'
import SvgProvider, {
	SocialEnum
} from '@/Global/components/SvgProvider/SvgProvider'
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
const secondary = ' top-[105%] w-1/3 opacity-50 -z-10 md:w-1/5'
const prev = ' left-0'
const main =
	' top-[230%] w-5/6 min-h-[400%] delay-300 left-1/2 -translate-x-1/2 md:w-1/2 md:top-[150%] xl:w-3/5'
const next = ' text-right left-full -translate-x-full'

const Credential: React.FC<Props> = ({ blok, left, center, right }) => {
	const { cred, person, linkedin_profile, position } = blok
	let styles = 'ease-linear duration-1000 absolute left-1/2 top-0 scale-0'
	if (center) styles = general + main
	else if (left) styles = general + secondary + prev
	else if (right) styles = general + secondary + next
	const svgConfig = {
		width: 55,
		height: 55,
		margin: 0,
		color: 'hsla(120,100%,50%, 1)'
	}
	return (
		<div className={styles}>
			{center && (
				<div className='overflow-y-auto overflow-x-clip'>
					<RichText className='mb-6' html={renderRichText(cred)} />
				</div>
			)}
			<div className='flex justify-between items-center w-full'>
				<div className='mt-1'>
					<h4 className='font-bold'>{person}, </h4>
					<p className='text-sm md:text-base mb-2'>{position}</p>
				</div>
				{center && linkedin_profile?.url && (
					<Link
						href={linkedin_profile.url}
						className='font-bold text-xl'
						target='_blank'
						rel='noreferrer'
					>
						<SvgProvider type={SocialEnum.linkedin} options={svgConfig} />
					</Link>
				)}
			</div>
		</div>
	)
}

export default Credential
