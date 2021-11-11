import styled from 'styled-components'
import ThemeButton from '../../styled/ThemeButton'
import RangeSlider from '../../styled/RangeSlider'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {getGlobalStyle, setDarkTheme, setHue, setLightTheme} from '../../slices/GlobalStyleSlice'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  & > * {
    margin-bottom: 1em;
  }
`


const Controls = () => {
  const { hue, saturation } = useAppSelector(getGlobalStyle)
  const dispatch = useAppDispatch()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hue = e.target.value
    dispatch(setHue(+hue))
  }
  return(
    <Container >
      <div>
      <ThemeButton 
        onClick={()=>dispatch(setLightTheme())}
        style={{
          color: `hsl(${hue},${saturation}%,40%)`,
          backgroundColor: `hsl(${hue},${saturation}%,85%)`,
        }}
      >
        light
      </ThemeButton>
      <ThemeButton
        onClick={()=>dispatch(setDarkTheme())}
          style={{
          color: `hsl(${hue},${saturation}%,60%)`,
          backgroundColor: `hsl(${hue},${saturation}%,1%)`

        }}
      >
        dark
      </ThemeButton>
      </div>
      <RangeSlider 
      min='0'
      max='360'
      onChange={handleChange}
      value={hue}
      />

    </Container>
  )
}

export default Controls
