
export interface GlobalStyleInterface extends BrightnessInterface {
	hue: number
	saturation: number
  graphicsOpacity: number
  containerOpacity: number
}

export interface BrightnessInterface {
	light: number
	backgroundLight: number
  containerLight: number
  graphicsLight: number

}

export interface ComponentsClassesInterface {
	HomeCardClass: string
}
