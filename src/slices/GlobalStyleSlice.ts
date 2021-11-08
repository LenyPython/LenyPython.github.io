import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GlobalStyleInterface } from '../types/Interfaces'
import type { RootState } from '../app/store'


const initialState: GlobalStyleInterface = {
	mainBackgroundColor: 'hsl(120, 100%, 1%)',
	mainGraphicsColor: 'hsla(120, 100%, 1%,.2)',
  mainContainersColor: 'hsla(120, 100%, 2%,.9)',
	mainFontColor: 'hsl(120, 100%, 50%)'
}

const GlobalStyle = createSlice({
  name: 'GlobalStyle',
  initialState,
  reducers:{
    setMainColor: ( state, action: PayloadAction<number> ) =>{
      state.mainBackgroundColor = `hsl(${action.payload}, 100%, 1%)`
      state.mainGraphicsColor = `hsla(${action.payload}, 100%, 1%,.2)`
      state.mainFontColor = `hsl(${action.payload}, 100%, 50%)`
      state.mainContainersColor = `hsla(${action.payload}, 100%, 2%,.9)`
    }
  }
})

export const { 
  setMainColor,
} = GlobalStyle.actions

export const getGlobalStyle = (state: RootState) => state.GlobalStyle

export default GlobalStyle.reducer
