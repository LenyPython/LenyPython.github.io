import RichText from '@/Global/components/RIchText/RichText'
import { ProjectStoryblok, TechStoryblok } from '@/types/component-types-sb'
import SvgProvider, { SvgType } from '@/utils/SvgProvider'
import { renderRichText } from '@storyblok/react'
import Link from 'next/link'

type Props = {
  blok: ProjectStoryblok
}

const Project: React.FC<Props> = ({ blok }) => {
  const { project_name, role, tech, description, live_page } = blok
  return (
    <div>
      <h2 className='text-4xl font-bold'>{project_name}</h2>
      <h3 className='text-xl font-bold'>{role.join(', ')}</h3>
      <RichText html={renderRichText(description)} />
      <h3 className='text-xl font-bold'>Tech</h3>
      <div className='flex'>
        {tech?.map((tech: TechStoryblok) => (
          <SvgProvider
            key={tech._uid}
            type={tech.svg_type as SvgType}
            width={25}
            height={25}
            h={120}
            s={50}
            l={50}
            a={1}
          />
        ))}
      </div>
      {live_page && (
        <p>
          <Link href={live_page.url} target={live_page.target}>
            Live page
          </Link>
        </p>
      )}
    </div>
  )
}

export default Project
