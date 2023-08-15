import Link from 'next/link'
import RichText from '@/Global/components/RIchText/RichText'
import { ProjectStoryblok } from '@/types/component-types-sb'
import SvgProvider, { SvgType } from '@/utils/SvgProvider'
import { renderRichText } from '@storyblok/react'

type Props = {
  blok: ProjectStoryblok
}

const Project: React.FC<Props> = ({ blok }) => {
  const { project_name, role, tech, description, live_page } = blok
  const { techs } = tech[0]
  const SvgOptions = {
    width: 25,
    height: 25,
    h: 120,
    s: 50,
    l: 50,
    a: 1
  }
  return (
    <div>
      <h2 className='text-4xl font-bold'>{project_name}</h2>
      <h3 className='text-xl font-bold'>{role.join(', ')}</h3>
      <RichText html={renderRichText(description)} />
      <h3 className='text-xl font-bold'>Tech</h3>
      <div className='flex items-center'>
        {techs.map((svg: SvgType) => (
          <SvgProvider
            key={`${project_name}-${tech[0]._uid}-${svg}`}
            type={svg}
            {...SvgOptions}
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
