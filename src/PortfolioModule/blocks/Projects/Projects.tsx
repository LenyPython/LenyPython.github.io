import { ProjectStoryblok, ProjectsStoryblok } from '@/types/component-types-sb'
import { SvgType } from '@/utils/SvgProvider'
import { StoryblokComponent } from '@storyblok/react'
import { useState } from 'react'

type Props = {
  blok: ProjectsStoryblok
}
enum role {
  any = 'any',
  dev = 'developer',
  main = 'maintenance',
  sup = 'support'
}

const Projects: React.FC<Props> = ({ blok }) => {
  let { projects } = blok
  const technologies: SvgType[] = Object.values(SvgType)
  const [roleFilter, setRoleFilter] = useState(role.any)
  const onRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRoleFilter(e.target.value as role)
  }
  const [techFilter, setTechFilter] = useState([] as SvgType[])
  const onTechChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTechFilter(e.target.value)
    console.log(e.target.value)
    console.log(techFilter)
  }
  if (roleFilter !== role.any)
    projects = projects.filter((proj: ProjectStoryblok) =>
      proj.role.includes(roleFilter)
    )
  return (
    <div className='relative w-3/4 max-w-4xl p-10 rounded-xl bg-black backdrop-blur-lg '>
      <h2 className='absolute top-0 left-8 -translate-y-1/2 text-3xl'>
        {blok.headline}
      </h2>
      <div className='w-full flex mb-5'>
        <label htmlFor='role' className='border-2 pl-1 mr-1 bg-background'>
          Role:
          <select
            className='border-0 outline-0 mx-1 px-2 bg-background'
            onChange={onRoleChange}
            value={roleFilter}
            name='role'
            id='role'
          >
            <option selected value={role.any}>
              {role.any}
            </option>
            <option value={role.dev}>{role.dev}</option>
            <option value={role.main}>{role.main}</option>
            <option value={role.sup}>{role.sup}</option>
          </select>
        </label>
        <label htmlFor='technology' className='border-2 pl-1 bg-background'>
          technology:
          <select
            className='border-0 outline-0 mx-1 px-2 bg-background'
            name='technology'
            onChange={onTechChange}
            id='technology'
          >
            <option selected value={role.any}>
              {role.any}
            </option>
            {technologies.map((tech: SvgType) => (
              <option key={tech} value={tech}>
                {tech}
              </option>
            ))}
          </select>
        </label>
      </div>
      {projects.map((project: any) => (
        <StoryblokComponent blok={project} key={project._uid} />
      ))}
    </div>
  )
}

export default Projects
