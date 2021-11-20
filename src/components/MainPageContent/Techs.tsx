import { ReactComponent as Js } from '../../svg/js.svg'
import { ReactComponent as Ts } from '../../svg/ts.svg'
import { ReactComponent as D3 } from '../../svg/d3.svg'
import { ReactComponent as ReactIco } from '../../svg/react.svg'
import { ReactComponent as Redux } from '../../svg/redux.svg'
import { ReactComponent as ReduxSaga } from '../../svg/redux-saga.svg'
import { ReactComponent as Firebase } from '../../svg/firebase.svg'
import { ReactComponent as Python } from '../../svg/python.svg'
import { ReactComponent as Pandas } from '../../svg/pandas.svg'
import { ReactComponent as Kivy } from '../../svg/kivy.svg'

const Techs = () => {
  return <>
        <h2>Currently focusing:</h2>
        <Ts />
        <ReactIco />
        <Redux />
        <ReduxSaga />
        <Js />
        <D3 />

        <h2>Used in past:</h2>
        <Python />
        <Pandas />
        <Kivy />
        <br />
        <Firebase />

  </>
}

export default Techs