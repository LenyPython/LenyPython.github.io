import styled from 'styled-components'
import NeoButton from '../../styled/NeonButton'
import CheckButton from '../../styled/CheckButton'
import { PORTFOLIO } from '../../constatns'

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const NavButtons = () => {
  return <Container>
      <NeoButton 
      to={PORTFOLIO}
      >Portfolio
      </NeoButton>
    <CheckButton>
      get email
    </CheckButton>

    </Container>
}

export default NavButtons
