import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ComponentsClassesInterface } from '../types/Interfaces'
import type { RootState } from '../app/store'


const initialState: ComponentsClassesInterface = {
  HomeCardClass: '',
  ProjectsTab: '',
  TechTab: '',
  AlgoTab: '',
}

const Components = createSlice({
  name: 'Components',
  initialState,
  reducers:{
    setProjectsTab: (state, action: PayloadAction<string>) => {
      state.ProjectsTab = action.payload
    },
    setTechTab: (state, action: PayloadAction<string>) => {
      state.TechTab = action.payload
    },
    setAlgoTab: (state, action: PayloadAction<string>) => {
      state.AlgoTab = action.payload
    },
    setHomeCardClass: (state, action: PayloadAction<string>) => {
      state.HomeCardClass = action.payload
    },
  }
})

export const { 
  setHomeCardClass,
  setProjectsTab,
  setTechTab,
  setAlgoTab
} = Components.actions

export const getHomeCardClass = (state: RootState) => state.Components.HomeCardClass
export const getPageContent = (state: RootState) => {
  return {
    ProjectsTab: state.Components.ProjectsTab,
    TechTab: state.Components.TechTab,
    AlgoTab: state.Components.AlgoTab
  }
}

export default Components.reducer
