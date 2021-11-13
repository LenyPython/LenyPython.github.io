import styled from 'styled-components'
import { Globe } from '../ThreeModels'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'


const CanvasContainer = styled.div`
  width: 100vw;
  height: 100vh;
`


const Portfolio = () => {

  return <CanvasContainer>
  <Canvas>
    <Suspense fallback={null} />
    <OrbitControls />
    <Globe />
  </Canvas>

  </CanvasContainer>
}

export default Portfolio
