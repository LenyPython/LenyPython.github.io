
export interface GlobalStyleInterface {
	hue: number
	saturation: number
  graphicsOpacity: number
  containerOpacity: number
	light: number
  containerLight: number
  graphicsLight: number
}

export interface ComponentsClassesInterface {
	HomeCardClass: string
  ProjectsTab: string
  TechTab: string
  AlgoTab: string
}

export interface ProjectDataInterface {
  title: string
  tech: string[]
  images: string[]
  description: string
  code: string
  live: string
}

interface RanksInterface{
  name: string
  score: number
  lang?: string
}

export interface CWProfileInterface {
  username: string | null
  name: string | null
  position: number | null
  totalCompleted: number | null
  overall: RanksInterface | null
  languages: Record<string,RanksInterface> | null
}


