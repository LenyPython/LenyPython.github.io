// Development
import GITHUBlogo from '@/assets/images/svg/development/github.svg'
import GITlogo from '@/assets/images/svg/development/git.svg'
import DOCKERlogo from '@/assets/images/svg/development/docker.svg'
import JENKINSlogo from '@/assets/images/svg/development/jenkins.svg'
import JIRAlogo from '@/assets/images/svg/development/jira.svg'
import AWSlogo from '@/assets/images/svg/development/aws.svg'
import WEBPACKlogo from '@/assets/images/svg/development/webpack.svg'
import NETLIFYlogo from '@/assets/images/svg/development/netlify.svg'

// Languages
import HTMLlogo from '@/assets/images/svg/language/html.svg'
import CSSlogo from '@/assets/images/svg/language/css.svg'
import SASSlogo from '@/assets/images/svg/language/sass.svg'
import JAVAlogo from '@/assets/images/svg/language/java.svg'
import GROOVYlogo from '@/assets/images/svg/language/groovy.svg'
import JSlogo from '@/assets/images/svg/language/js.svg'
import TSlogo from '@/assets/images/svg/language/ts.svg'
import PYTHONlogo from '@/assets/images/svg/language/python.svg'
import GOlogo from '@/assets/images/svg/language/go.svg'

// Frameworkst
import Reactlogo from '@/assets/images/svg/tech/react.svg'
import Reduxlogo from '@/assets/images/svg/tech/redux.svg'
import ReduxSagalogo from '@/assets/images/svg/tech/redux-saga.svg'
import NEXTlogo from '@/assets/images/svg/tech/nextjs.svg'
import VUElogo from '@/assets/images/svg/tech/vue.svg'
import NUXTlogo from '@/assets/images/svg/tech/nuxt.svg'
import Kivylogo from '@/assets/images/svg/tech/kivy.svg'
import D3logo from '@/assets/images/svg/tech/d3.svg'
import Firebaselogo from '@/assets/images/svg/tech/firebase.svg'
import AEMlogo from '@/assets/images/svg/tech/aem.svg'
import MONGODBlogo from '@/assets/images/svg/tech/mongodb.svg'
import NESTJSlogo from '@/assets/images/svg/tech/nestjs.svg'
import CYPRESSlogo from '@/assets/images/svg/tech/cypress.svg'
import STORYBLOKlogo from '@/assets/images/svg/tech/storyblok.svg'

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
import PageLogo from '@/assets/images/svg/logo.svg'

export type SvgType = LangEnum | TechEnum | DevEnum | SocialEnum | UtilSvgEnum

export enum SocialEnum {
	codepen = 'codepen',
	codewars = 'codewars',
	frontendMentor = 'frontend-mentor',
	linkedin = 'linkedin',
	leetcode = 'leetcode',
	replit = 'replit'
}

export enum LangEnum {
	html = 'html',
	css = 'css',
	sass = 'sass',
	javaScript = 'java-script',
	typescript = 'typescript',
	java = 'java',
	groovy = 'groovy',
	python = 'python',
	go = 'golang'
}

export enum DevEnum {
	git = 'git',
	github = 'github',
	jira = 'jira',
	aws = 'aws',
	docker = 'docker',
	jenkins = 'jenkins',
	webpack = 'webpack',
	netlify = 'netlify'
}

export enum TechEnum {
	react = 'react',
	redux = 'redux',
	reduxSaga = 'redux-saga',
	nextjs = 'nextjs',
	vue = 'vue',
	nuxt = 'nuxt',
	d3 = 'd3',
	firebase = 'firebase',
	kivy = 'kivy',
	aem = 'aem',
	cypress = 'cypress',
	storyblok = 'storyblok',
	mongodb = 'mongodb',
	nestjs = 'nestjs'
}

export enum UtilSvgEnum {
	leftArrow = 'left-arrow',
	rightArrow = 'right-arrow',
	pageLogo = 'page-logo'
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
	const style = { margin: '.2rem', ...options }
	switch (type) {
		// languages
		case LangEnum.html:
			return <HTMLlogo style={style} />
		case LangEnum.css:
			return <CSSlogo style={style} />
		case LangEnum.sass:
			return <SASSlogo style={style} />
		case LangEnum.java:
			return <JAVAlogo style={style} />
		case LangEnum.groovy:
			return <GROOVYlogo style={style} />
		case LangEnum.javaScript:
			return <JSlogo style={style} />
		case LangEnum.typescript:
			return <TSlogo style={style} />
		case LangEnum.python:
			return <PYTHONlogo style={style} />
		case LangEnum.go:
			return <GOlogo style={style} />
		// frameworks
		case TechEnum.aem:
			return <AEMlogo style={style} />
		case TechEnum.cypress:
			return <CYPRESSlogo style={style} />
		case TechEnum.react:
			return <Reactlogo style={style} />
		case TechEnum.react:
			return <Reactlogo style={style} />
		case TechEnum.redux:
			return <Reduxlogo style={style} />
		case TechEnum.reduxSaga:
			return <ReduxSagalogo style={style} />
		case TechEnum.nextjs:
			return <NEXTlogo style={style} />
		case TechEnum.vue:
			return <VUElogo style={style} />
		case TechEnum.nuxt:
			return <NUXTlogo style={style} />
		case TechEnum.kivy:
			return <Kivylogo style={style} />
		case TechEnum.d3:
			return <D3logo style={style} />
		case TechEnum.firebase:
			return <Firebaselogo style={style} />
		case TechEnum.storyblok:
			return <STORYBLOKlogo style={style} />
		case TechEnum.mongodb:
			return <MONGODBlogo style={style} />
		case TechEnum.nestjs:
			return <NESTJSlogo style={style} />
		// development
		case DevEnum.git:
			return <GITlogo style={style} />
		case DevEnum.github:
			return <GITHUBlogo style={style} />
		case DevEnum.jira:
			return <JIRAlogo style={style} />
		case DevEnum.aws:
			return <AWSlogo style={style} />
		case DevEnum.docker:
			return <DOCKERlogo style={style} />
		case DevEnum.jenkins:
			return <JENKINSlogo style={style} />
		case DevEnum.webpack:
			return <WEBPACKlogo style={style} />
		case DevEnum.netlify:
			return <NETLIFYlogo style={style} />
		// social
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
		case UtilSvgEnum.pageLogo:
			return <PageLogo style={style} />
	}
	return <p className='m-1'>{type}</p>
}

export default SvgProvider
