'use client'
import { useState } from 'react'
import Image from 'next/image'
import SvgProvider, {
	UtilSvgEnum
} from '@/Global/components/SvgProvider/SvgProvider'

const badges = [
	<div className='flex flex-col items-center'>
		<Image
			src='https://assets.leetcode.com/static_assets/others/algorithm_I.png'
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
			src='https://assets.leetcode.com/static_assets/others/DS_I.png'
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
			src='https://assets.leetcode.com/static_assets/others/%E7%BC%96%E7%A8%8B%E8%83%BD%E5%8A%9B_%E5%85%A5%E9%97%A8.gif'
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
			src='https://leetcode.com/static/images/badges/2022/gif/2022-annual-100.gif'
			width={75}
			height={75}
			loading='lazy'
			alt='100 Days badge 2022'
		/>
		<br />
		<b className='text-center'>100 Days Badge 2022</b>
		<br />
		<span>2023-01-01</span>
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
