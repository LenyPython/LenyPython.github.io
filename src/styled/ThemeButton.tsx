import styled from 'styled-components'

const Button = styled.button`
	display: inline-block;
	position: relative;
	border: none;
	width: 100px;
	height: 2.2em;
	text-transform: uppercase;
	text-align: center;
	text-decoration: none;
	line-Height: 2.2em;
	font-size: 1.25rem;
	font-weight: bold;
	font-family:  var(--main-font-family);
	letter-spacing: 4px;
`
interface Props {
	children: string
	style?: { color: string,
		backgroundColor: string
	}
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
