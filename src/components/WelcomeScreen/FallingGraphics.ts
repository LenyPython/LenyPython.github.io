class FallingSign{
	x: number
	y: number 
	size: number
	brightness: number
	color: string
	graphics: FallingGraphics

	constructor(graphics: FallingGraphics){
		this.graphics = graphics
		this.x = this.generateRandomX()
		this.y = -Math.floor(Math.random() * window.innerHeight)
		this.size = Math.floor(Math.random()*this.graphics.maxSize)
		this.brightness = 50
		this.color = `hsl(${this.graphics.hue}, 100%, ${this.brightness}%)`
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
		this.brightness = this.size > 12 ?
			this.graphics.maxSize + this.size + 13:
			this.graphics.maxSize + this.size - 10
		this.color = `hsl(${this.graphics.hue}, 100%, ${this.brightness}%)`
	}
}

class FallingGraphics{
		columns: FallingSign[]
		columnsNo: number
		accumulation: number
		maxSize: number
		hue: number
	constructor(hue: number){
		this.hue = hue
		this.columns = []
		this.maxSize = 24
		this.columnsNo = 10
		this.accumulation = 0.5
		this.populateCols()
	}
	setColor(hue: number){
		this.hue = hue
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
