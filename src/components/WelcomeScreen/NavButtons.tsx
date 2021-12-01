import styled from 'styled-components'
import NeoButton from '../../styled/NeonButton'
import CheckButton from '../../styled/CheckButton'
import { ReactComponent as GetEmail } from '../../svg/get_email.svg'
import {useAppDispatch} from '../../app/hooks'
import {setHomeCardClass, setPortfolio} from '../../slices/ComponentSlice'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  @media(max-width:600px){
    flex-direction: column-reverse;
    & > button{
      margin: .6em auto;
    }
  }
`

const NavButtons = () => {
  const dispatch = useAppDispatch()
  const handleAnimationChange = () => {
    dispatch(setHomeCardClass('page-animation'))
    setTimeout(()=>{
      dispatch(setPortfolio())
    }, 3000)
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
