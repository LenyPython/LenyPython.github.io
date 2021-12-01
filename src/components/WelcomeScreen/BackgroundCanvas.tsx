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
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const graphicsRef = useRef<FallingGraphics>(new FallingGraphics(colorStyle))

  const resize = () => {
      let canvas = canvasRef.current
      if(!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      graphicsRef.current.changeOnResize()
  }

useEffect(() => {
  let graphics = graphicsRef.current
  if(!canvasRef.current) return
  graphics.setCanvas(canvasRef.current)
  graphics.setColor(colorStyle)
  graphics.animate()
  window.addEventListener('resize', resize)
    return  () => {
      window.removeEventListener('resize', resize)
    }
  }, [])
  useEffect(()=>{
  let graphics = graphicsRef.current
  graphics.setColor(colorStyle)
  },[colorStyle])
  return <>
    <ThemeChanger />
    <Canvas ref={canvasRef} />
  </>
}

export default BackgroundCanvas
