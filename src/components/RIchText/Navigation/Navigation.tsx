import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  config: any
}

const Navigation: React.FC<Props> = ({ config }) => {
  console.log(config)
  return (
    <div className='flex justify-center items-center w-full h-16 bg-gray-600 '>
      <div className='flex justify-between max-w-5xl w-4/5'>
        <Image src='/next.svg' width={100} height={100} alt='logo' />
        <div>
          {config.map((item: any) => (
            <Link
              key={`link:${item._id}`}
              href={`#${item.ID}`}
              className='px-4 text-green-500'
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
