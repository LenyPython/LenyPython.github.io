import styled from 'styled-components'
import {useDispatch} from 'react-redux'
import {setContactForm} from '../../slices/ComponentSlice'
import { ReactComponent as Email } from '../../svg/get_email.svg'
import {ReactComponent as GitHub} from '../../svg/github.svg'
import {ReactComponent as LinkedIn} from '../../svg/linedin.svg'

const Container = styled.div`
    position: relative;
    svg {
      margin: 0 .4em;
      height: var(--nav-height);
      width: var(--nav-height);
    }
`


const RightSide = () => {
  const dispatch = useDispatch()
  const openForm = () => dispatch(setContactForm(true))

  return <Container>
    <Email onClick={openForm}/>
    <a href="https://www.linkedin.com/in/piotr-lenartowicz-123488205/" target="_blank" rel="noreferrer">
    <LinkedIn />
    </a>
    <a href="https://github.com/LenyPython" target="_blank" rel="noreferrer">
    <GitHub />
    </a>
    </Container>
}

export default RightSide
