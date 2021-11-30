import {useState} from 'react'
import styled from 'styled-components'

const Button = styled.button`
	--height: 2.2em;
	position: relative;
	background: transparent;
	border: 2px solid var(--main-font-color);
	border-radius: 50%;
	color: var(--unactive);
	height: var(--height);
	width: var(--height);
	font-size: 1.25rem;
	text-transform: uppercase;
	letter-spacing: 3px;
	transition: color box-shadow .4s;
	&.active {
		--unactive: var(--main-font-color);
		color:var(--main-font-color);
		box-shadow:
			0 0 5px var(--main-font-color),
			0 0 10px var(--main-font-color),
			0 0 20px var(--main-font-color);
	}
	& > div {
		position: absolute;
		top: 0;
		right: 0;
		transform: translateX(150%);
		background: var(--main-background-color);
		padding: .6em;
		font-size: .6rem;
	}


`
interface Props {
	children: string | JSX.Element
	confirm?: string
}
const CheckButton: React.FC<Props> = ({ children, confirm }) => {
	const [isActive, setIsActive] = useState<boolean>(false)

	const handleClick = () => {
			navigator.clipboard.writeText('lenartowicz.elekonpro@gmail.com')
			setIsActive(true)
			setTimeout(()=>setIsActive(false), 5000)
	}


	return <>
		<Button 
		className={isActive?'active':''}
		onClick={handleClick}>
		{children}
		{
			isActive&&<div>{confirm}</div>
		}
	</Button>
	</>
}

export default CheckButton
