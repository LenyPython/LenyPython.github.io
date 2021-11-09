import styled from 'styled-components'
import { useNavigate  }from 'react-router-dom'


const StyledLink = styled.button`
	--width: 10em;
	--height: 2.2em;
	--border-stroke: -.2em;
	display: block;
	position: relative;
	border: none;
	width: var(--width);
	height: var(--height);
	background: var(--main-font-color);
	color: var(--main-background-color);
	text-transform: uppercase;
	text-align: center;
	text-decoration: none;
	line-Height: 2.2em;
	font-size: 1.25rem;
	font-weight: bold;
	font-family:  var(--main-font-family);
	letter-spacing: 4px;
	box-shadow: 0 0 10px var(--main-font-color),
	0 0 40px var(--main-font-color),
	0 0 80px var(--main-font-color);
	&:hover{
		box-shadow: 0 0 10px var(--main-background-color),
		0 0 40px var(--main-background-color),
		0 0 80px var(--main-background-color);
		transition: .6s;
	}
	&:before,
	&:after,
	span:before,
	span:after {
		content: '';
		position: absolute;
		width: 0;
		height: 0;
		background: var(--main-font-color);
		transition: .6s;
		mix-blend-mode: difference;
	}
	&:before{
		top: 0;
		left: 0;
	}
	&:after {
		top: 0;
		right: 0;
	}
	span:before {
		bottom: 0;
		left: 0;
	}
	span:after {
		bottom: 0;
		right: 0;
	}
	
	&:hover:before,
	&:hover:after,
	&:hover span:before,
	&:hover span:after {
		width: calc( var(--width) / 2 );
		height: calc( var(--height) / 2 );
	}

`
interface Props {
	children: string
	to?: string
}
const Button: React.FC<Props> = ({to, children }) => {
	const navigate = useNavigate()
	const handleClick = () => {
			if(to) {
					navigate(to)
			}
	}
		
	return(
		<StyledLink 
			onClick={handleClick}
		>
			<span>
			</span>
		{children}
		</StyledLink>
	)
}



export default Button
