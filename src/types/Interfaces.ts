
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
  WelcomeScreen: boolean
  ProjectsTab: string
  TechTab: string
  AlgoTab: string
}

export interface ProjectDataInterface {
  title: string
  tech: Set<string>
  images: { path: string
  no: number}
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


