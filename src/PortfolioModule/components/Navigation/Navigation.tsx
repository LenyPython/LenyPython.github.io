import Link from 'next/link'
import { SectionStoryblok } from '@/types/component-types-sb'
import { useState } from 'react'
import gsap from 'gsap'
import SvgProvider, {
	UtilSvgEnum
} from '@/Global/components/SvgProvider/SvgProvider'

export const scrollToID = (id: string) => {
	gsap.to(window, { duration: 1, scrollTo: id })
}

type Props = {
	config: SectionStoryblok[]
}

const Navigation: React.FC<Props> = ({ config }) => {
	const [isMobileOpen, setIsMobileOpen] = useState(false)
	const links = config.filter((item: SectionStoryblok) => item.in_navigation)
	let navContainer =
		'fixed flex justify-center z-30 p-3 backdrop-blur-lg duration-700 md:top-0'
	if (isMobileOpen) navContainer += ' top-0 bottom-0 left-0 right-0'
	else navContainer += ' top-full left-0 right-0'
	const toggleNavigation = () => {
		setIsMobileOpen(prev => window.innerWidth < 768 && !prev)
	}

	const handleClick = (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
		id: string
	) => {
		e.preventDefault()
		scrollToID(id)
		toggleNavigation()
	}

	const svgConfig = {
		margin: '-.2rem .1rem',
		width: 35,
		height: 35,
		color: isMobileOpen ? 'hsla(120,100%,50%, .8)' : 'black',
		transition: 'all .7s',
		transform: isMobileOpen ? 'rotate(90deg)' : 'rotate(-90deg)'
	}
	return (
		<>
			<div className={navContainer}>
				<div className='h-full rounded-full md:flex md:justify-between lg:w-4/5 lg:max-w-5xl'>
					<Link onClick={e => handleClick(e, '#hero')} href='/'>
						<h2 className='text-3xl text-center'>LOGO</h2>
					</Link>
					<div className='flex flex-col items-center mt-5 md:flex-row md:mt-auto'>
						{links.map((item: SectionStoryblok) => (
							<Link
								key={`link:${item._uid}`}
								href={`/#${item.ID}`}
								className='p-3 uppercase border-b border-font md:border-0'
								onClick={e => handleClick(e, `#${item.ID}`)}
							>
								{item.ID}
							</Link>
						))}
					</div>
				</div>
			</div>
			<button
				className={`fixed bottom-6 right-3 p-1 ${
					isMobileOpen ? 'bg-background border-font border-2' : 'bg-font'
				} z-30 rounded-full md:hidden`}
				onClick={toggleNavigation}
			>
				<SvgProvider type={UtilSvgEnum.leftArrow} options={svgConfig} />
				<SvgProvider type={UtilSvgEnum.leftArrow} options={svgConfig} />
				<SvgProvider type={UtilSvgEnum.leftArrow} options={svgConfig} />
			</button>
		</>
	)
}

export default Navigation
