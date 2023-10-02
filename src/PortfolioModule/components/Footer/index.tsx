const Footer = () => {
	const now = new Date()
	return (
		<div className='w-full bg-background text-center'>
			&copy; Copyright {now.getFullYear()} Piotr Lenartowicz
		</div>
	)
}

export default Footer
