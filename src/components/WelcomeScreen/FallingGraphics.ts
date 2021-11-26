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
		ctx: CanvasRenderingContext2D | null
		canvas: HTMLCanvasElement | null
		accumulation: number
		maxSize: number
		fill: string
		attributes: GlobalStyleInterface
		fps: number
		then: number
	constructor(attr: GlobalStyleInterface){
		this.attributes = attr
		this.fill = `hsla(${attr.hue},${attr.saturation}%,${attr.graphicsLight}%,${attr.graphicsOpacity})`
		this.canvas = null
		this.ctx = null
		this.columns = []
		this.maxSize = 24
		this.columnsNo = 10
		this.accumulation = 0.5
		this.populateCols()
		this.fps = 1000 / 50
		this.then = Date.now()
	}
	setColor(attr: GlobalStyleInterface){
		this.attributes = attr
		this.fill = `hsla(${attr.hue},${attr.saturation}%,${attr.graphicsLight}%,${attr.graphicsOpacity})`
	}
	setCanvas(canvas: HTMLCanvasElement) {
		this.canvas = canvas
		this.canvas.width = window.innerWidth
		this.canvas.height = window.innerHeight
		this.ctx = this.canvas.getContext('2d')
		window.addEventListener('resize', this.resizeCanvas)
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
	draw() {
			if(!this.ctx || !this.canvas) return
      this.ctx.fillStyle = this.fill
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
      for(let element of this.columns){
        let sign = element.generateChar()
        this.ctx.fillStyle = element.color
        this.ctx.font = element.size + 'px Arial'
        this.ctx.fillText(sign, element.x, element.y)
        element.y += element.size
        if(element.y > window.innerHeight){
          element.y = 0
          element.x = element.generateRandomX()
          element.generateSignValues()
        }
      }

	}
  animate() {
			requestAnimationFrame(()=>this.animate())
			let now = Date.now()
			let diffrence = now - this.then
			if(this.fps < diffrence){
				this.then = now
				this.draw()
			}	
  }
	resizeCanvas() {
			if(!this.canvas) return
      this.canvas.width = window.innerWidth
      this.canvas.height = window.innerHeight
      this.changeOnResize()
  }


}


export default FallingGraphics
