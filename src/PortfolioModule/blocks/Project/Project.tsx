import RichText from '@/Global/components/RIchText/RichText'
import { SvgType } from '@/utils/SvgProvider'
import { ISbRichtext, renderRichText } from '@storyblok/react'

type roles = 'dev' | 'main' | 'sup'

type Props = {
  blok: {
    project_name: string
    role: roles[]
    tech: { svg_type: SvgType }[]
    description: ISbRichtext
    live_page: {
      cached_url: string
      target: string
    }
  }
}
const Project: React.FC<Props> = ({ blok }) => {
  const { project_name, role, tech, description, live_page } = blok
  return (
    <div>
      <h2>{project_name}</h2>
      <h3>{role.join(', ')}</h3>
      <RichText html={renderRichText(description)} />
    </div>
  )
}

export default Project
