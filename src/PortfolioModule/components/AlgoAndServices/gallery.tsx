'use client'
import { useState } from 'react'
import Image from 'next/image'
import SvgProvider, {
	UtilSvgEnum
} from '@/Global/components/SvgProvider/SvgProvider'

const badges = [
	<div className='flex flex-col items-center'>
		<Image
			src='https://a.storyblok.com/f/245345/360x360/089d71ba8b/algorithm_i.png'
			width={75}
			height={75}
			loading='lazy'
			alt='Algorithm I'
		/>
		<br />
		<b className='text-center'>Algorithm I</b>
		<br />
		<span>2021-10-24</span>
	</div>,
	<div className='flex flex-col items-center'>
		<Image
			src='https://a.storyblok.com/f/245345/360x360/a04655c500/ds_i.png'
			width={75}
			height={75}
			loading='lazy'
			alt='Algorithm I'
		/>
		<br />
		<b className='text-center'>Data Structure I</b>
		<br />
		<span>2021-12-14</span>
	</div>,
	<div className='flex flex-col items-center'>
		<Image
			src='https://a.storyblok.com/f/245345/360x360/92e9344d2e/ds_skill.gif'
			width={75}
			height={75}
			loading='lazy'
			alt='Programming badge I'
		/>
		<br />
		<b className='text-center'>Programming Skills I</b>
		<br />
		<span>2022-03-11</span>
	</div>,
	<div className='flex flex-col items-center'>
		<Image
			src='https://a.storyblok.com/f/245345/360x360/c34b0ccecb/2022-annual-100.gif'
			width={75}
			height={75}
			loading='lazy'
			alt='100 Days badge 2022'
		/>
		<br />
		<b className='text-center'>100 Days Badge 2022</b>
		<br />
		<span>2023-01-01</span>
	</div>,
	<div className='flex flex-col items-center'>
		<Image
			src='https://a.storyblok.com/f/245345/360x360/93b1d231dd/2023-50.gif'
			width={75}
			height={75}
			loading='lazy'
			alt='50 Days badge 2023'
		/>
		<br />
		<b className='text-center'>50 Days Badge 2023</b>
		<br />
		<span>2023-12-15</span>
	</div>,
	<div className='flex flex-col items-center'>
		<Image
			src='https://a.storyblok.com/f/245345/360x360/2832c22083/2023-100.gif'
			width={75}
			height={75}
			loading='lazy'
			alt='100 Days badge 2023'
		/>
		<br />
		<b className='text-center'>100 Days Badge 2023</b>
		<br />
		<span>2023-12-15</span>
	</div>,
	<div className='flex flex-col items-center'>
		<Image
			src='https://a.storyblok.com/f/245345/360x360/928d945600/2024-50.gif'
			width={75}
			height={75}
			loading='lazy'
			alt='50 Days badge 2024'
		/>
		<br />
		<b className='text-center'>50 Days Badge 2024</b>
		<br />
		<span>2024-03-06</span>
	</div>
]
const Gallery = () => {
	const [badge, setBadge] = useState(badges.length - 1)
	const decrement = () => {
		setBadge(prev => {
			if (prev === 0) return badges.length - 1
			return --prev
		})
	}
	const increment = () => {
		setBadge(prev => {
			if (prev === badges.length - 1) return 0
			return ++prev
		})
	}
	const SVGOptions = {
		width: 55,
		height: 55,
		color: 'hsla(120,100%,50%,1)'
	}
	return (
		<div className='flex justify-between items-center w-52 h-56'>
			<button onClick={decrement} aria-label='Previous LeetCode badge'>
				<SvgProvider type={UtilSvgEnum.rightArrow} options={SVGOptions} />
			</button>
			{badges[badge]}{' '}
			<button onClick={increment} aria-label='Next LeetCode badge'>
				<SvgProvider type={UtilSvgEnum.leftArrow} options={SVGOptions} />
			</button>
		</div>
	)
}

export default Gallery
