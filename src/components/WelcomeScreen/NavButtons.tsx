import styled from 'styled-components'
import NeoButton from '../../styled/NeonButton'
import CheckButton from '../../styled/CheckButton'
import { ReactComponent as GetEmail } from '../../imgs/get_email.svg'
import { PORTFOLIO } from '../../constatns'
import {useAppDispatch} from '../../app/hooks'
import {setHomeCardClass} from '../../slices/ComponentSlice'
import {useNavigate} from 'react-router-dom'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const NavButtons = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const handleAnimationChange = () => {
    dispatch(setHomeCardClass('page-animation'))
    setTimeout(()=>{
      dispatch(setHomeCardClass(''))
      navigate(PORTFOLIO)
    }, 5000)
  }
  return <Container>
      <NeoButton 
      onClick={handleAnimationChange}
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
