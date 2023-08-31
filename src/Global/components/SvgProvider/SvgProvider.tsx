// Development
import Githublogo from '@/assets/images/svg/development/github.svg'

// Languages
import HTMLlogo from '@/assets/images/svg/language/html.svg'
import CSSlogo from '@/assets/images/svg/language/css.svg'
import JSlogo from '@/assets/images/svg/language/js.svg'
import TSlogo from '@/assets/images/svg/language/ts.svg'
import Pythonlogo from '@/assets/images/svg/language/python.svg'

// Frameworkst
import Reactlogo from '@/assets/images/svg/tech/react.svg'
import Reduxlogo from '@/assets/images/svg/tech/redux.svg'
import ReduxSagalogo from '@/assets/images/svg/tech/redux-saga.svg'
import Kivylogo from '@/assets/images/svg/tech/kivy.svg'
import D3logo from '@/assets/images/svg/tech/d3.svg'
import Firebaselogo from '@/assets/images/svg/tech/firebase.svg'

// Social
import FrontendMentorlogo from '@/assets/images/svg/social/frontendMentor.svg'
import Linkedinlogo from '@/assets/images/svg/social/linkedin.svg'
import Leetcodelogo from '@/assets/images/svg/social/leetcode.svg'
import Replitlogo from '@/assets/images/svg/social/replit.svg'
import Codepenlogo from '@/assets/images/svg/social/codepen.svg'
import Codewarslogo from '@/assets/images/svg/social/codewars.svg'

// Util svgs
import LeftArrow from '@/assets/images/svg/utils/leftArrow.svg'
import RightArrow from '@/assets/images/svg/utils/rightArrow.svg'

export type SvgType = LangEnum | TechEnum | DevEnum | SocialEnum | UtilSvgEnum

export enum SocialEnum {
	codepen = 'codepen',
	codewars = 'codewars',
	frontendMentor = 'frontend-mentor',
	linkedin = 'linkedin',
	leetcode = 'leetcode',
	replit = 'replit'
}

export enum TechEnum {
	react = 'react',
	redux = 'redux',
	reduxSaga = 'redux-saga',
	d3 = 'd3',
	firebase = 'firebase',
	kivy = 'kivy'
}

export enum DevEnum {
	github = 'github'
}

export enum LangEnum {
	html = 'html',
	css = 'css',
	js = 'java-script',
	python = 'python',
	ts = 'typescript'
}

export enum UtilSvgEnum {
	leftArrow = 'left-arrow',
	rightArrow = 'right-arrow'
}

type Props = {
	type: SvgType
	options: {
		width: number
		height: number
		color: string
	}
}

const SvgProvider: React.FC<Props> = ({ type, options }) => {
	const style = { ...options, margin: '5px' }
	switch (type) {
		case LangEnum.html:
			return <HTMLlogo style={style} />
		case LangEnum.css:
			return <CSSlogo style={style} />
		case LangEnum.js:
			return <JSlogo style={style} />
		case LangEnum.ts:
			return <TSlogo style={style} />
		case LangEnum.python:
			return <Pythonlogo style={style} />
		case TechEnum.react:
			return <Reactlogo style={style} />
		case TechEnum.redux:
			return <Reduxlogo style={style} />
		case TechEnum.reduxSaga:
			return <ReduxSagalogo style={style} />
		case TechEnum.kivy:
			return <Kivylogo style={style} />
		case TechEnum.d3:
			return <D3logo style={style} />
		case TechEnum.firebase:
			return <Firebaselogo style={style} />
		case DevEnum.github:
			return <Githublogo style={style} />
		case SocialEnum.linkedin:
			return <Linkedinlogo style={style} />
		case SocialEnum.leetcode:
			return <Leetcodelogo style={style} />
		case SocialEnum.replit:
			return <Replitlogo style={style} />
		case SocialEnum.codepen:
			return <Codepenlogo style={style} />
		case SocialEnum.codewars:
			return <Codewarslogo style={style} />
		case SocialEnum.frontendMentor:
			return <FrontendMentorlogo style={style} />
		case UtilSvgEnum.leftArrow:
			return <LeftArrow style={style} />
		case UtilSvgEnum.rightArrow:
			return <RightArrow style={style} />
	}
	return <p className='m-1'>{type}</p>
}

export default SvgProvider
