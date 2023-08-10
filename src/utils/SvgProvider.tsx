import JSlogo from '@/assets/images/svg/tech/js.svg'
import TSlogo from '@/assets/images/svg/tech/ts.svg'
import HTMLlogo from '@/assets/images/svg/tech/html.svg'
import CSSlogo from '@/assets/images/svg/tech/css.svg'
import Reactlogo from '@/assets/images/svg/tech/react.svg'
import Reduxlogo from '@/assets/images/svg/tech/redux.svg'
import ReduxSagalogo from '@/assets/images/svg/tech/redux-saga.svg'
import Pythonlogo from '@/assets/images/svg/tech/python.svg'
import Kivylogo from '@/assets/images/svg/tech/kivy.svg'
import D3logo from '@/assets/images/svg/tech/d3.svg'
import Firebaselogo from '@/assets/images/svg/tech/firebase.svg'
import FrontendMentorlogo from '@/assets/images/svg/tech/frontendMentor.svg'
import Githublogo from '@/assets/images/svg/tech/github.svg'
import Linkedinlogo from '@/assets/images/svg/tech/linkedin.svg'
import Leetcodelogo from '@/assets/images/svg/tech/leetcode.svg'
import Replitlogo from '@/assets/images/svg/tech/replit.svg'
import Codepenlogo from '@/assets/images/svg/tech/codepen.svg'
import Codewarslogo from '@/assets/images/svg/tech/codewars.svg'

export enum SvgType {
  codepen = 'codepen',
  codewars = 'codewars',
  css = 'css',
  d3 = 'd3',
  firebase = 'firebase',
  frontendMentor = 'frontend mentor',
  github = 'github',
  html = 'html',
  js = 'java script',
  linkedin = 'linkedin',
  kivy = 'kivy',
  leetcode = 'leetcode',
  python = 'python',
  react = 'react',
  redux = 'redux',
  reduxSaga = 'redux saga',
  replit = 'replit',
  ts = 'type script'
}

type Props = {
  type: SvgType
  width: number
  height: number
  h: number
  s: number
  l: number
  a: number
}
const SvgProvider: React.FC<Props> = ({ type, width, height, h, s, l, a }) => {
  const fill = `hsla(${h},${s}%,${l}%,${a})`
  const style = { width, height }
  switch (type) {
    case SvgType.codepen:
      return <Codepenlogo className={`fill-[${fill}]`} style={style} />
    case SvgType.codewars:
      return <Codewarslogo className={`fill-[${fill}]`} style={style} />
    case SvgType.js:
      return <JSlogo class={`fill-[${fill}]`} style={style} />
    case SvgType.ts:
      return <TSlogo className={`fill-[${fill}]`} style={style} />
    case SvgType.html:
      return <HTMLlogo className={`fill-[${fill}]`} style={style} />
    case SvgType.css:
      return <CSSlogo className={`fill-[${fill}]`} style={style} />
    case SvgType.react:
      return <Reactlogo className={`fill-[${fill}]`} style={style} />
    case SvgType.redux:
      return <Reduxlogo className={`fill-[${fill}]`} style={style} />
    case SvgType.reduxSaga:
      return <ReduxSagalogo className={`fill-[${fill}]`} style={style} />
    case SvgType.python:
      return <Pythonlogo className={`fill-[${fill}]`} style={style} />
    case SvgType.kivy:
      return <Kivylogo className={`fill-[${fill}]`} style={style} />
    case SvgType.d3:
      return <D3logo className={`fill-[${fill}]`} style={style} />
    case SvgType.firebase:
      return <Firebaselogo className={`fill-[${fill}]`} style={style} />
    case SvgType.frontendMentor:
      return <FrontendMentorlogo className={`fill-[${fill}]`} style={style} />
    case SvgType.github:
      return <Githublogo className={`fill-[${fill}]`} style={style} />
    case SvgType.linkedin:
      return <Linkedinlogo className={`fill-[${fill}]`} style={style} />
    case SvgType.leetcode:
      return <Leetcodelogo className={`fill-[${fill}]`} style={style} />
    case SvgType.replit:
      return <Replitlogo className={`fill-[${fill}]`} style={style} />
  }
  return <></>
}

export default SvgProvider
