import {GlobalStyleInterface} from "../../types/Interfaces"

class FallingSign{
	x: number
	y: number 
	size: number
	color: string
	graphics: FallingGraphics

	constructor(graphics: FallingGraphics){
		this.graphics = graphics
		this.x = this.generateRandomX()
		this.y = -Math.floor(Math.random() * window.innerHeight)
		this.size = Math.floor(Math.random()*this.graphics.maxSize)
		this.color = `hsl(${this.graphics.attributes.hue}, ${this.graphics.attributes.saturation}%, ${this.graphics.attributes.light}%)`
	}

	generateRandomX() {
		return Math.floor(Math.random() * window.innerWidth)
	}

  generateChar() {
    let rand = Math.floor(33 + Math.random()*119);
    return String.fromCharCode(rand);
  }

	generateSignValues(){
		this.size = Math.floor(Math.random()*this.graphics.maxSize + 10)
		let light = this.size > 12 ?
			this.graphics.attributes.light - this.size:
			this.graphics.attributes.light - this.size*2
		this.color = `hsl(${this.graphics.attributes.hue}, ${this.graphics.attributes.saturation}%, ${light}%)`
	}
}

class FallingGraphics{
		columns: FallingSign[]
		columnsNo: number
		accumulation: number
		maxSize: number
		fill: string
		attributes: GlobalStyleInterface
	constructor(attr: GlobalStyleInterface){
		this.attributes = attr
		this.fill = `hsla(${attr.hue},${attr.saturation}%,${attr.graphicsLight}%,${attr.graphicsOpacity})`
		this.columns = []
		this.maxSize = 24
		this.columnsNo = 10
		this.accumulation = 0.5
		this.populateCols()
	}
	setColor(attr: GlobalStyleInterface){
		this.attributes = attr
		this.fill = `hsla(${attr.hue},${attr.saturation}%,${attr.graphicsLight}%,${attr.graphicsOpacity})`
	}
	changeOnResize() {
		this.columnsNo = window.innerWidth / 60
		this.populateCols()
		this.maxSize = Math.min(window.innerWidth / 20, 26)
	}
	populateCols(){
		this.columns = []
		for(let i = 0; i < this.columnsNo; i++){
			this.columns.push( new FallingSign(this) )
		}
	}
}


export default FallingGraphics
