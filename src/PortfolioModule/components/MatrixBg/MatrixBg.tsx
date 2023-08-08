import { useEffect, useRef } from 'react'
import FallingGraphics from './MatrixAnimation'

const MatrixBg = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const graphicsRef = useRef<FallingGraphics | null>(null)

  const resize = () => {
    let canvas = canvasRef.current
    let graphics = graphicsRef.current
    if (!canvas || !graphics) return
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    graphics.changeOnResize()
  }

  useEffect(() => {
    if (!canvasRef.current) return
    let graphics = new FallingGraphics()
    graphicsRef.current = graphics
    graphics.setCanvas(canvasRef.current)
    graphics.animate()
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])
  /*   
  used to change color of graphics
    useEffect(() => {
    let graphics = graphicsRef.current
    graphics.setColor(colorStyle)
  }, [colorStyle]) */
  return <canvas className='fixed inset-0 bg-black -z-50' ref={canvasRef} />
}

export default MatrixBg
