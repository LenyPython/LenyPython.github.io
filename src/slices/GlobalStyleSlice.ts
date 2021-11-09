import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GlobalStyleInterface } from '../types/Interfaces'
import type { RootState } from '../app/store'


const initialState: GlobalStyleInterface = {
  hue: 120,
  saturation: 100,
  light: 50,
  backgroundLight: 1,
  graphicsOpacity: 0.2,
  graphicsLight: 1,
  containerOpacity: 0.9,
  containerLight: 2,
}

const GlobalStyle = createSlice({
  name: 'GlobalStyle',
  initialState,
  reducers:{
    setHue: ( state, action: PayloadAction<number> ) =>{
      state.hue = action.payload
    }
  }
})

export const { 
  setHue,
} = GlobalStyle.actions

export const getGlobalStyle = (state: RootState) => state.GlobalStyle

export default GlobalStyle.reducer
