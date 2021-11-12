import styled from 'styled-components'
import * as THREE from 'three'
import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'


const CanvasContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

function Globe(props: JSX.IntrinsicElements['mesh']) {
  const ref = useRef<THREE.Mesh>(null!)
  useFrame((state, delta) => {
    ref.current.rotation.x += 0.01
  })
  return (
    <>
      <ambientLight intensity={1}/>
    <mesh
      {...props}
      ref={ref}
    >
      <sphereGeometry args={[1, 32, 16]} />
      <meshMatcapMaterial color={'hotpink'} />
    </mesh>
    </>
  )
}

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
