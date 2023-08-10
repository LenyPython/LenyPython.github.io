import JSlogo from '@assets/images/svg/js.svg'
import TSlogo from '@assets/images/svg/ts.svg'
import HTMLlogo from '@assets/images/svg/html.svg'
import CSSlogo from '@assets/images/svg/css.svg'
import Reactlogo from '@assets/images/svg/react.svg'
import Reduxlogo from '@assets/images/svg/redux.svg'
import ReduxSagalogo from '@assets/images/svg/redux-saga.svg'
import Pythonlogo from '@assets/images/svg/python.svg'
import Kivylogo from '@assets/images/svg/kivy.svg'
import D3logo from '@assets/images/svg/d3.svg'
import Firebaselogo from '@assets/images/svg/firebase.svg'
import FrontendMentorlogo from '@assets/images/svg/frontend-mentor.svg'
import Githublogo from '@assets/images/svg/github.svg'
import Linkedinlogo from '@assets/images/svg/linkedin.svg'
import Leetcodelogo from '@assets/images/svg/leetcode.svg'
import Replitlogo from '@assets/images/svg/replit.svg'
import Codepenlogo from '@assets/images/svg/codepen.svg'
import Codewarslogo from '@assets/images/svg/codewars.svg'
import { isReturnStatement } from 'typescript'

type Props = {
  type: SvgType
  h: number
  s: number
  l: number
  a: number
}

enum SvgType {
  codepen = 'codepen',
  codewars = 'codewars',
  css = 'css',
  d3 = 'd3',
  firebase = 'firebase',
  frontendMentor = 'frontend mentor',
  github = 'github',
  html = 'html',
  js = 'js',
  linkedin = 'linkedin',
  kivy = 'kivy',
  leetcode = 'leetcode',
  python = 'python',
  react = 'react',
  redux = 'redux',
  reduxSaga = 'redux saga',
  replit = 'replit',
  ts = 'ts'
}
const SvgProvider: React.FC<Props> = ({ type, h, s, l, a }) => {
  const color = `hsl(${h},${s}%,${l}%,${a})`
  switch (type) {
    case SvgType.codepen:
      return <Codepenlogo fill={color} />
    case SvgType.codewars:
      return <Codewarslogo fill={color} />
    case SvgType.js:
      return <JSlogo fill={color} />
    case SvgType.ts:
      return <TSlogo fill={color} />
    case SvgType.html:
      return <HTMLlogo fill={color} />
    case SvgType.css:
      return <CSSlogo fill={color} />
    case SvgType.react:
      return <Reactlogo fill={color} />
    case SvgType.redux:
      return <Reduxlogo fill={color} />
    case SvgType.reduxSaga:
      return <ReduxSagalogo fill={color} />
    case SvgType.python:
      return <Pythonlogo fill={color} />
    case SvgType.kivy:
      return <Kivylogo fill={color} />
    case SvgType.d3:
      return <D3logo fill={color} />
    case SvgType.firebase:
      return <Firebaselogo fill={color} />
    case SvgType.frontendMentor:
      return <FrontendMentorlogo fill={color} />
    case SvgType.github:
      return <Githublogo fill={color} />
    case SvgType.linkedin:
      return <Linkedinlogo fill={color} />
    case SvgType.leetcode:
      return <Leetcodelogo fill={color} />
    case SvgType.replit:
      return <Replitlogo fill={color} />
  }
  return <></>
}

export default SvgProvider
