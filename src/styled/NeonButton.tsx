import styled from 'styled-components'
import { Link  }from 'react-router-dom'


const StyledLink = styled(Link)`
	--width: 10em;
	--height: 2.2em;
	--border-stroke: -.2em;
	display: block;
	position: relative;
	width: var(--width);
	height: var(--height);
	background: var(--main-background-color);
	color: var(--main-font-color);
	text-transform: uppercase;
	text-align: center;
	text-decoration: none;
	line-Height: 2.2em;
	font-size: 1.25rem;
	font-weight: bold;
	font-family:  var(--main-font-family);
	letter-spacing: 4px;
	&:hover{
		box-shadow: 0 0 10px var(--main-font-color),
		0 0 40px var(--main-font-color),
		0 0 80px var(--main-font-color);
		transition: .6s .5s;
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
	to: string
	children: string
}
const Button: React.FC<Props> = ({to, children }) => {
	return(
		<StyledLink to={to}>
			<span>
		{children}
			</span>
		</StyledLink>
	)
}



export default Button
