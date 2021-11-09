import styled from 'styled-components'
import FallingGraphics from './FallingGraphics'
import { useEffect, useRef } from 'react'
import ThemeChanger from '../ThemeChanger'
import {useAppSelector} from '../../app/hooks'
import {getGlobalStyle} from '../../slices/GlobalStyleSlice'

const Canvas = styled.canvas`
  position: fixed;
  inset: 0 0;
  background: var(--main-background-color);
  z-index: -999;
`

const BackgroundCanvas = () => {
  const colorStyle = useAppSelector(getGlobalStyle)
  const matrixRef = useRef<FallingGraphics>(new FallingGraphics(colorStyle))
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);

useEffect(() => {
  let graphics = matrixRef.current
  graphics.setColor(colorStyle)
  let canvas = canvasRef.current
  const animate = () => {
      let ctx = canvasCtxRef.current
      let canvas = canvasRef.current
      if(!ctx || !canvas) return
      ctx.fillStyle = graphics.fill
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      for(let element of graphics.columns){
        let sign = element.generateChar()
        ctx.fillStyle = element.color
        ctx.font = element.size + 'px Arial'
        ctx.fillText(sign, element.x, element.y)
        element.y += element.size
        if(element.y > window.innerHeight){
          element.y = 0
          element.x = element.generateRandomX()
          element.generateSignValues()
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
    const interval = setInterval(animate, 70)
    return  () => {
      window.removeEventListener('resize', resizeCanvas)
      clearInterval(interval)
    }
  }, [matrixRef, colorStyle])
  return <>
    <ThemeChanger />
    <Canvas ref={canvasRef} />
  </>
}

export default BackgroundCanvas
