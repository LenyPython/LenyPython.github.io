import { StoryblokComponent } from '@storyblok/react'
import {
  CredentialStoryblok,
  CredentialsStoryblok
} from '@/types/component-types-sb'
import { useState } from 'react'

type Props = {
  blok: CredentialsStoryblok
}

const Credentials: React.FC<Props> = ({ blok }) => {
  const { creds } = blok
  const [idx, setIdx] = useState(0)

  const currentCred = (() => {
    if (idx === 0) return [creds[creds.length - 1], creds[0], creds[1]]
    if (idx === creds.length - 1)
      return [creds[creds.length - 2], creds[creds.length - 1], creds[0]]
    return [creds[idx - 1], creds[idx], creds[idx + 1]]
  })()
  const prevIdx = () => {
    setIdx(prev => {
      if (prev === 0) return creds.length - 1
      return prev - 1
    })
  }
  const nextIdx = () => {
    setIdx(prev => {
      if (prev === creds.length - 1) return 0
      return prev + 1
    })
  }
  return (
    <div className='relative w-3/4 max-w-4xl p-10 rounded-xl bg-black backdrop-blur-lg '>
      <h2 className='absolute top-0 left-8 -translate-y-1/2 text-3xl'>
        {blok.headline}
      </h2>
      <div className='w-full h-3/5 flex items-center'>
        <button onClick={prevIdx}>prev</button>
        {currentCred.map((component: CredentialStoryblok, i: number) => (
          <StoryblokComponent
            blok={component}
            key={component._uid}
            main={i === 1}
          />
        ))}
        <button onClick={nextIdx}>next</button>
      </div>
    </div>
  )
}

export default Credentials
