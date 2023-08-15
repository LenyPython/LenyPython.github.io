import RichText from '@/Global/components/RIchText/RichText'
import { CredentialStoryblok } from '@/types/component-types-sb'
import { renderRichText } from '@storyblok/react'

type Props = {
  blok: CredentialStoryblok
  main?: boolean
}
const Credential: React.FC<Props> = ({ blok, main }) => {
  const { cred, person, linkedin_profile } = blok
  return (
    <div
      className={`${
        main ? 'scale-125 ' : 'opacity-25 '
      }flex flex-col border rounded-lg p-4 w-44 h-56 bg-secondarybg`}
    >
      <RichText className='mb-6' html={renderRichText(cred)} />
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
