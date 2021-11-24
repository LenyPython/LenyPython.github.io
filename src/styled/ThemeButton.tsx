import styled from 'styled-components'
import {CSSProperties} from 'react'

const Button = styled.button`
	display: inline-block;
	position: relative;
	background: transparent;
	border: none;
	min-width: 100px;
	height: 2.2em;
	text-transform: uppercase;
	text-align: center;
	text-decoration: none;
	font-size: 1.25rem;
	font-weight: bold;
	font-family: var(--main-font-family);
	letter-spacing: 4px;
	svg {
		max-height: 1em;
	}
`
interface Props {
	style?: CSSProperties
	onClick?: () => void
}

const ThemeButton: React.FC<Props> = ({ style, onClick, children }) => {
	return (
		<Button 
		onClick={onClick}
		style={style}
		>
		{children}
		</Button>
	)
}

export default ThemeButton
