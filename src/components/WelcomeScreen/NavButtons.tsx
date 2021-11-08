import styled from 'styled-components'
import NeoButton from '../../styled/NeonButton'
import CheckButton from '../../styled/CheckButton'
import { ReactComponent as GetEmail } from '../../imgs/get_email.svg'
import { PORTFOLIO } from '../../constatns'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const NavButtons = () => {
  return <Container>
      <NeoButton 
      to={PORTFOLIO}
      >Portfolio
      </NeoButton>
    <CheckButton
    confirm='email copied!'
    >
      <GetEmail />
    </CheckButton>

    </Container>
}

export default NavButtons
