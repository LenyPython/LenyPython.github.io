'use client'
type Props = {
	html: string
	className?: string
}
const RichText: React.FC<Props> = ({ className, html }) => {
	return (
		<div className={className} dangerouslySetInnerHTML={{ __html: html }}></div>
	)
}

export default RichText
