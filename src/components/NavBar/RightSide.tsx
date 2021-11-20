import styled from 'styled-components'
import {ReactComponent as GitHub} from '../../svg/github.svg'
import {ReactComponent as LinkedIn} from '../../svg/linedin.svg'

const Container = styled.div`
    
    svg {
      margin: 0 .4em;
      height: var(--nav-height);
      width: var(--nav-height);
    }

`


const RightSide = () => {
  return <Container>
    <a href="https://www.linkedin.com/in/piotr-lenartowicz-123488205/" target="_blank" rel="noreferrer">
    <LinkedIn />
    </a>
    <a href="https://github.com/LenyPython" target="_blank" rel="noreferrer">
    <GitHub />
    </a>
    </Container>
}

export default RightSide
