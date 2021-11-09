import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BrightnessInterface, GlobalStyleInterface } from '../types/Interfaces'
import type { RootState } from '../app/store'


const initialState: GlobalStyleInterface = {
  hue: 120,
  saturation: 100,
  light: 65,
  containerOpacity: 0.9,
  graphicsOpacity: 0.2,
  backgroundLight: 1,
  graphicsLight: 1,
  containerLight: 2,
}

const GlobalStyle = createSlice({
  name: 'GlobalStyle',
  initialState,
  reducers:{
    setHue: (state, action: PayloadAction<number> ) =>{
      state.hue = action.payload
    },
    setBrightness: (state, action: PayloadAction<BrightnessInterface>) => {
      const { light, backgroundLight, graphicsLight, containerLight } = action.payload
      state.light = light
      state.backgroundLight = backgroundLight
      state.graphicsLight = graphicsLight
      state.containerLight = containerLight
    }
  }
})

export const { 
  setHue,
  setBrightness
} = GlobalStyle.actions

export const getGlobalStyle = (state: RootState) => state.GlobalStyle

export default GlobalStyle.reducer
