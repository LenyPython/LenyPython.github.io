import { createGlobalStyle } from 'styled-components'
import { GlobalStyleInterface } from '../types/Interfaces'

const GlobalStyle = createGlobalStyle<GlobalStyleInterface>`
:root {
	--main-background-color: ${ ({hue, saturation, graphicsLight}) => {
		return `hsl(${hue},${saturation}%,${graphicsLight}%)`
	} };
	--main-containers-color: ${ ({hue, saturation, containerOpacity, containerLight}) => {
		return `hsla(${hue},${saturation}%,${containerLight}%,${containerOpacity})`
	} };
	--main-font-color: ${ ({hue, saturation, light}) => {
		return `hsl(${hue},${saturation}%,${light - 24}%)`
	} };
	--main-font-family: 'Cinzel';
	--secondary-font-family: "Special Elite",cursive;
}
body {
	font-family: var(--main-fontfamily), cursive;
	background: var(--main-background-color);
	color: var(--main-font-color);
}
* {
  box-sizing: border-box;
	padding:0;
	margin: 0;
	transition: color .1s;
}
#root {
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	min-width: 100vw;
	min-height: 100vh;
}
`
export default GlobalStyle
