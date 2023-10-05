import useGsapFrom from '@/Global/hooks/useGsapFrom'
import { useRef } from 'react'

type Props = {
	html: string
	delay?: number
	className?: string
}
const RichText: React.FC<Props> = ({ delay, className, html }) => {
	const textRef = useRef(null)
	useGsapFrom(textRef, {
		y: 50,
		opacity: 0,
		delay
	})
	return (
		<div
			ref={textRef}
			className={className}
			dangerouslySetInnerHTML={{ __html: html }}
		></div>
	)
}

export default RichText
