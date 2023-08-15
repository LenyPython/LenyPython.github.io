import RichText from '@/Global/components/RIchText/RichText'
import { CredentialStoryblok } from '@/types/component-types-sb'
import { renderRichText } from '@storyblok/react'

type Props = {
  blok: CredentialStoryblok
}
const Credential: React.FC<Props> = ({ blok }) => {
  const { cred, person, linkedin_profile } = blok
  return (
    <div className='flex flex-col '>
      <RichText html={renderRichText(cred)} />
      <p>{person}</p>
      {linkedin_profile && <a href={linkedin_profile.url}>See Linkedin </a>}
    </div>
  )
}

export default Credential
