import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ComponentsClassesInterface } from '../types/Interfaces'
import type { RootState } from '../app/store'


const initialState: ComponentsClassesInterface = {
  HomeCardClass: ''
}

const Components = createSlice({
  name: 'Components',
  initialState,
  reducers:{
    setHomeCardClass: (state, action: PayloadAction<string>) => {
      state.HomeCardClass = action.payload
    }
  }
})

export const { 
  setHomeCardClass
} = Components.actions

export const getHomeCardClass = (state: RootState) => state.Components.HomeCardClass

export default Components.reducer
