import RichText from '@/Global/components/RIchText/RichText'
import { ProjectStoryblok } from '@/types/component-types-sb'
import { renderRichText } from '@storyblok/react'

type Props = {
  blok: ProjectStoryblok
}

const Project: React.FC<Props> = ({ blok }) => {
  const { project_name, role, tech, description, live_page } = blok
  return (
    <div>
      <h2>{project_name}</h2>
      <h3>{role.join(', ')}</h3>
      <RichText html={renderRichText(description)} />
      {live_page && (
        <p>
          <a href={live_page.url}>Live page</a>
        </p>
      )}
    </div>
  )
}

export default Project
