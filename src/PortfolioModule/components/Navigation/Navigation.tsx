'use client'
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
		'fixed flex justify-center z-30 backdrop-blur-lg duration-700 md:top-0'
	if (isMobileOpen) navContainer += ' top-0 bottom-0 left-0 right-0'
	else navContainer += ' top-full py-3 left-0 right-0'
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
		margin: '-.3rem .1rem',
		width: 35,
		height: 35,
		color: isMobileOpen ? 'hsla(120,100%,50%, .8)' : 'black',
		transition: 'all .7s',
		transform: isMobileOpen ? 'rotate(90deg)' : 'rotate(-90deg)'
	}
	const logoConfig = {
		width: 45,
		height: 45,
		color: 'hsla(120,100%,50%, 1)'
	}
	return (
		<>
			<div className={navContainer}>
				<div className='h-full flex flex-col-reverse justify-evenly mx-5 md:flex-row md:justify-between md:w-full lg:w-4/5 md:max-w-5xl'>
					<div
						className={`${isMobileOpen ? 'scale-125 ' : ''}flex items-center`}
					>
						<Link
							onClick={e => handleClick(e, '#hero')}
							href='/'
							aria-label='Logo, scroll to top'
						>
							<SvgProvider options={logoConfig} type={UtilSvgEnum.pageLogo} />
						</Link>
						<Link
							className={`${isMobileOpen ? '' : 'hidden '}lg:block`}
							onClick={e => handleClick(e, '#hero')}
							href='/'
						>
							<div className='flex flex-col items-start'>
								<h2 className='text-sm text-center font-medium'>
									Piotr Lenartowicz
								</h2>
								<h2 className='text-xs text-center'>Frontend engineer</h2>
							</div>
						</Link>
					</div>
					<div className='flex flex-col items-center md:flex-row'>
						{links.map((item: SectionStoryblok) => (
							<Link
								key={`link:${item._uid}`}
								href={`/#${item.ID}`}
								className='p-3 uppercase font-bold border-b-2 border-font md:border-0'
								onClick={e => handleClick(e, `#${item.ID}`)}
							>
								{item.ID}
							</Link>
						))}
					</div>
				</div>
			</div>
			<button
				className={`fixed right-3 border-font border-2 p-0.5 duration-700 ${
					isMobileOpen
						? 'bg-background bottom-1/3'
						: 'bottom-6 bg-font scale-90'
				} z-30 rounded-full md:hidden`}
				onClick={toggleNavigation}
				aria-label='toggle navigation menu'
			>
				<SvgProvider type={UtilSvgEnum.leftArrow} options={svgConfig} />
				<SvgProvider type={UtilSvgEnum.leftArrow} options={svgConfig} />
				<SvgProvider type={UtilSvgEnum.leftArrow} options={svgConfig} />
			</button>
		</>
	)
}

export default Navigation
