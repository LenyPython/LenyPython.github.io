import { useState } from 'react'
import SvgProvider, {
	UtilSvgEnum
} from '@/Global/components/SvgProvider/SvgProvider'

const badges = [
	<div className='flex flex-col items-center'>
		<img
			src='https://assets.leetcode.com/static_assets/others/algorithm_I.png'
			width='75px'
			height='75px'
			alt='Algorithm I'
		/>
		<br />
		<b>Algorithm I</b>
		<br />
		<span>2021-10-24</span>
	</div>,
	<div className='flex flex-col items-center'>
		<img
			src='https://assets.leetcode.com/static_assets/others/DS_I.png'
			width='75px'
			height='75px'
			alt='Algorithm I'
		/>
		<br />
		<b>Data Structure I</b>
		<br />
		<span>2021-12-14</span>
	</div>,
	<div className='flex flex-col items-center'>
		<img
			src='https://assets.leetcode.com/static_assets/others/%E7%BC%96%E7%A8%8B%E8%83%BD%E5%8A%9B_%E5%85%A5%E9%97%A8.png'
			width='75px'
			height='75px'
			alt='Programming badge I'
		/>
		<br />
		<b>Programming Skills I</b>
		<br />
		<span>2022-03-11</span>
	</div>,
	<div className='flex flex-col items-center'>
		<img
			src='https://leetcode.com/static/images/badges/2022/lg/2022-annual-100.png'
			width='75px'
			height='75px'
			alt='100 Days badge 2022'
		/>
		<br />
		<b>100 Days Badge 2022</b>
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
		<div className='flex justify-between items-center w-2/5'>
			<button onClick={decrement}>
				<SvgProvider type={UtilSvgEnum.rightArrow} options={SVGOptions} />
			</button>
			{badges[badge]}
			<button onClick={increment}>
				<SvgProvider type={UtilSvgEnum.leftArrow} options={SVGOptions} />
			</button>
		</div>
	)
}

export default Gallery
