import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GlobalStyleInterface } from '../types/Interfaces'
import type { RootState } from '../app/store'


const initialState: GlobalStyleInterface = {
	mainBackgroundColor: 'hsl(120, 70%, 1%)',
  mainContainersColor: 'hsl(0, 0%, 0%)',
	mainFontColor: 'hsl(120, 100%, 50%)'
}

const GlobalStyle = createSlice({
  name: 'GlobalStyle',
  initialState,
  reducers:{
    setMainBackgroundColor: ( state, action: PayloadAction<string> ) =>{
      state.mainBackgroundColor = action.payload
    },
    setMainFontColor: ( state, action: PayloadAction<number> ) =>{
      state.mainFontColor = `hsl(${action.payload},100%,50%)`
    }
  }
})

export const { 
  setMainFontColor,
  setMainBackgroundColor
} = GlobalStyle.actions

export const getGlobalStyle = (state: RootState) => state.GlobalStyle

export default GlobalStyle.reducer
