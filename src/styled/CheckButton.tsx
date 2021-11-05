import {useState} from 'react'
import styled from 'styled-components'

const Button = styled.button`
	--unactive: white;
	--height: 2.2em;
	position: relative;
	background: transparent;
	border: none;
	color: var(--unactive);
	height: var(--height);
	padding: var(--btn-padding);
	font-size: 1.25rem;
	text-transform: uppercase;
	letter-spacing: 3px;
	padding: 0 .9em;
	overflow: hidden;
	& > span {
		position: absolute;
		display: block;
	}
	& > span:nth-child(1){
		top: 0;
		left: -100%;
		width: 100%;
		height: 2px;
		background: linear-gradient(to right, transparent, var(--main-font-color));
	}
	&:hover > span:nth-child(1){
		left: 100%;
		transition: 1s;
	}
	& > span:nth-child(2){
		top: -100%;
		right: 0;
		height: 100%;
		width: 2px;
		background: linear-gradient(to bottom, transparent, var(--main-font-color));
	}
	&:hover > span:nth-child(2){
		top:100%;
		transition: 1s .4s;
	}
	& > span:nth-child(3){
		bottom: 0;
		right: -101%;
		width: 100%;
		height: 2px;
		background: linear-gradient(to left, transparent, var(--main-font-color));
	}
	&:hover > span:nth-child(3){
		right: 100%;
		transition: 1s .8s;
	}
	& > span:nth-child(4){
		bottom: -100%;
		left: 0;
		width: 2px;
		height: 100%;
		background: linear-gradient(to top, transparent, var(--main-font-color));
	}
	&:hover > span:nth-child(4){
		bottom: 100%;
		transition: 1s 1.2s;
	}
	&.active {
		color:var(--main-font-color);
	}


`
interface Props {
	children: string | JSX.Element
}
const CheckButton: React.FC<Props> = ({ children }) => {
	const [isActive, setIsActive] = useState<boolean>(false)

	const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			const btn = e.target as HTMLButtonElement
			navigator.clipboard.writeText('lenartowicz.elekonpro@gmail.com')
			btn.innerText = 'saved!'
			setIsActive(true)
	}


	return <Button 
		className={isActive?'active':''}
		onClick={handleClick}>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		{children}
	</Button>
}

export default CheckButton
