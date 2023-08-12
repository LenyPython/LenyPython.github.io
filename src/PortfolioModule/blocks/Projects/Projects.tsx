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
  const [isTechInputOpen, setTechInputOpen] = useState(false)
  const technologies: SvgType[] = Object.values(SvgType)
  const [roleFilter, setRoleFilter] = useState(role.any)
  const [techFilter, setTechFilter] = useState(new Set<SvgType>())
  const toggleTechInput = () => setTechInputOpen(prev => !prev)
  const onRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRoleFilter(e.target.value as role)
  }
  const onTechChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTechFilter(set => {
      if (e.target.checked) set.add(e.target.value as SvgType)
      else set.delete(e.target.value as SvgType)
      return new Set(set)
    })
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
        <label
          htmlFor='role'
          className='border-2 pl-1 mr-1 w-1/3 bg-background text-center'
        >
          Role:
          <select
            className='border-0 outline-0 mx-1 px-2 bg-background'
            onChange={onRoleChange}
            value={roleFilter}
            name='role'
            id='role'
          >
            <option value={role.any}>{role.any}</option>
            <option value={role.dev}>{role.dev}</option>
            <option value={role.main}>{role.main}</option>
            <option value={role.sup}>{role.sup}</option>
          </select>
        </label>
        <div className='relative border-2 px-1 bg-background w-1/3 text-center'>
          <button onClick={toggleTechInput}>
            {isTechInputOpen ? (
              'Search'
            ) : (
              <p>
                technology:{' '}
                {techFilter.size > 0
                  ? techFilter.size === 1
                    ? techFilter.values().next().value
                    : techFilter.size
                  : 'all'}
              </p>
            )}
          </button>
          {isTechInputOpen && (
            <fieldset className='absolute top-full left-0 max-h-64 p-2 flex flex-col items-start flex-wrap'>
              {technologies.map((tech: SvgType) => {
                return (
                  <label key={`tech-${tech}`} htmlFor={tech} className='m-1'>
                    <input
                      className='mr-2'
                      type='checkbox'
                      name='technology'
                      value={tech}
                      id={tech}
                      checked={techFilter.has(tech)}
                      onChange={onTechChange}
                    />
                    {tech}
                  </label>
                )
              })}
            </fieldset>
          )}
        </div>
      </div>
      {projects.map((project: any) => (
        <StoryblokComponent blok={project} key={project._uid} />
      ))}
    </div>
  )
}

export default Projects
