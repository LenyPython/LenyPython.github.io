
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CWProfileInterface } from '../types/Interfaces'
import type { RootState } from '../app/store'


const initialState: CWProfileInterface = {
  username: '',
  name: '',
  position: null,
  totalCompleted: null,
  overall: null,
  languages: null

}

const CWProfileSlice = createSlice({
  name: 'CW',
  initialState,
  reducers:{
    saveCWData: (state, action: PayloadAction<CWProfileInterface>) => {
      const { username, name, position,
              totalCompleted, overall,
              languages	} = action.payload
      state.username = username
      state.name = name
      state.position = position
      state.overall = overall
      state.languages = languages
      state.totalCompleted = totalCompleted
    },
  }
})

export const { 
  saveCWData,
} = CWProfileSlice.actions

export const getCWProfile = (state: RootState) => state.CodeWarsProfile

export default CWProfileSlice.reducer
