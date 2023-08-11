import { SectionStoryblok } from '@/types/component-types-sb'
import SvgProvider, { SvgType } from '@/utils/SvgProvider'
import Link from 'next/link'
import React from 'react'

type Props = {
  config: SectionStoryblok[]
}

const Navigation: React.FC<Props> = ({ config }) => {
  return (
    <>
      <TopPanel />
      <BottomPanel config={config} />
    </>
  )
}
const TopPanel = () => {
  const svgConfig = {
    width: 35,
    height: 35,
    h: 120,
    s: 100,
    l: 50,
    a: 1
  }
  return (
    <div className='fixed top-0 left-0 right-0 z-10 flex justify-center items-center p-3 bg-background'>
      <div className='flex justify-between max-w-5xl w-4/5'>
        <h2 className='text-3xl'>LOGO</h2>
        <div className='flex'>
          <SvgProvider type={SvgType.github} {...svgConfig} />
          <SvgProvider type={SvgType.linkedin} {...svgConfig} />
        </div>
      </div>
    </div>
  )
}
const BottomPanel: React.FC<Props> = ({ config }) => {
  return (
    <div className='fixed bottom-0 left-0 right-0 z-10 flex justify-center items-center h-40 bg-background'>
      <div className='flex justify-between max-w-5xl w-4/5'>
        <div>
          {config.map((item: any) => (
            <Link
              key={`link:${item._uid}`}
              href={`/#${item.ID}`}
              className='px-4'
            >
              {item.ID}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navigation
