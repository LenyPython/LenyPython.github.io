import styled from 'styled-components'
import {Dispatch, SetStateAction} from 'react'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {getGlobalStyle, setHue} from '../../slices/GlobalStyleSlice'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
interface Props {
  setIsOpen: Dispatch<SetStateAction<boolean>>
}
const Controls: React.FC<Props> = ({ setIsOpen }) => {
  const { hue } = useAppSelector(getGlobalStyle)
  const dispatch = useAppDispatch()
  const handleClick = () => setIsOpen(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hue = e.target.value
    dispatch(setHue(+hue))
  }
  return(
    <Container>
      <input 
      type="range"
      min={0}
      max={360}
      onChange={handleChange}
      value={hue}
      />

      <button onClick={handleClick}>cancel</button>
      <button onClick={handleClick}>apply</button>
    </Container>
  )
}

export default Controls
