import styled from 'styled-components'
import FallingGraphics from './FallingGraphics'
import { useEffect, useRef } from 'react'

const Canvas = styled.canvas`
  position: fixed;
  inset: 0 0;
  background: var(--main-background-color);
  z-index: -999;
`

const WelcomeScreen = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);
  const matrixRef = useRef<FallingGraphics>(new FallingGraphics())


useEffect(() => {
  let graphics = matrixRef.current
  let canvas = canvasRef.current
  const animate = () => {
      let ctx = canvasCtxRef.current
      let canvas = canvasRef.current
      if(!ctx || !canvas) return
      ctx.fillStyle = graphics.background
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      for(let element of graphics.columns){
        let sign = element.generateSign()
        ctx.fillStyle = graphics.signColor
        ctx.font = element.size + 'px Arial'
        ctx.fillText(sign, element.x, element.y)
        element.y += element.size
        if(element.y > window.innerHeight){
          element.y = 0
          element.x = element.generateRandomX()
          element.generateSize(graphics.maxSize)
        }
      }
  }
  const resizeCanvas = () => {
    let canvas = canvasRef.current
    if(canvas){
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      graphics.changeOnResize()
    }
  }
    if(canvas){
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      window.addEventListener('resize',resizeCanvas)
      canvasCtxRef.current = canvas.getContext('2d')
    }
    const interval = setInterval(animate, 35)
    return  () => {
      window.removeEventListener('resize', resizeCanvas)
      clearInterval(interval)
    }
  }, [])
  const handleClick = () => {
    matrixRef.current.setColor(Math.floor(Math.random()* 360))
  }
  return <>
    <Canvas ref={canvasRef} />
    <div>
    <div>
      <h2>SelfTaught</h2>
      <h4>About</h4>
    </div>
      <img src=""
        width='300px'
      alt="author" />
    <button onClick={handleClick}> Check It Out</button>
    </div>
  </>
}

export default WelcomeScreen
