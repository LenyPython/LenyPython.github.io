import Link from 'next/link'
import React from 'react'

type Props = {
  config: any
}

const Navigation: React.FC<Props> = ({ config }) => {
  console.log(config)
  return (
    <div className='flex justify-center items-center w-full h-16 bg-black shadow-2xl shadow-green-300'>
      <div className='flex justify-between max-w-5xl w-4/5'>
        <h2 className='text-green-500 text-3xl'>LOGO</h2>
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
