import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GlobalStyleInterface } from '../types/Interfaces'
import type { RootState } from '../app/store'


const initialState: GlobalStyleInterface = {
  hue: 120,
  saturation: 100,
  light: 60,
  containerOpacity: 0.9,
  graphicsOpacity: 0.2,
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
    setDarkTheme: state => {
      state.light = 65
      state.graphicsLight = 1
      state.containerLight = 2
    },
    setLightTheme: state => {
      state.light = 40
      state.graphicsLight = 85
      state.containerLight = 70
    },
  }
})

export const { 
  setHue,
  setLightTheme,
  setDarkTheme
} = GlobalStyle.actions

export const getGlobalStyle = (state: RootState) => state.GlobalStyle

export default GlobalStyle.reducer
