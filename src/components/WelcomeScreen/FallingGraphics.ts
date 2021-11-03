class FallingSign{
	x: number
	y: number 
	size: number
	constructor(){
		this.x = this.generateRandomX()
		this.y = -Math.floor(Math.random() * window.innerHeight)
		this.size = Math.floor(Math.random()*14 + 10)
	}

	generateRandomX() {
		return Math.floor(Math.random() * window.innerWidth)
	}

  generateSign() {
    let rand = Math.floor(33 + Math.random()*119);
    return String.fromCharCode(rand);
  }

	generateSize(num: number){
		this.size = Math.floor(Math.random()*num + 10)
	}
}

class FallingGraphics{
		columns: FallingSign[]
		columnsNo: number
		accumulation: number
		maxSize: number
		signColor: string
		background: string
	constructor(){
		this.background = "rgba(0,0,0,.1)"
		this.signColor = 'hsl(120, 100%, 50%)' 
		this.columns = []
		this.maxSize = 24
		this.columnsNo = 10
		this.accumulation = 0.5
		this.populateCols()
	}
	setColor(color: number){
		this.signColor = `hsl(${color},100%,50%)`
	}
	changeOnResize() {
		this.columnsNo = window.innerWidth / 60
		this.populateCols()
		this.maxSize = Math.min(window.innerWidth / 20, 30) - 10
	}
	populateCols(){
		this.columns = []
		for(let i = 0; i < this.columnsNo; i++){
			this.columns.push( new FallingSign() )
		}
	}
}


export default FallingGraphics
