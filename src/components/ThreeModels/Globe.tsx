import * as THREE from 'three'
import map from '../../textures/transparent.png'
import alphaMap from '../../textures/inv.jpg'
import Projects from '../Projects'
import { useTexture, Html } from "@react-three/drei"
import { extend, useFrame } from "@react-three/fiber"
import { useRef } from "react"

extend(Html)

const Globe = (props: JSX.IntrinsicElements['mesh']) => {
  const textures = useTexture({
    map,
    alphaMap
  })
  const globeRef = useRef<THREE.Mesh>(null!)
  const ref = useRef<THREE.Mesh>(null!)
  useFrame(()=> {
    let rot = ref.current.rotation
    rot.y += 0.005

  })

  return (
    <group ref={ref} position={[-1, 0, -2]}>
    <mesh ref={globeRef}
      {...props}
    >
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial 
        side={THREE.DoubleSide}
        transparent
        {...textures}
      />
    </mesh>
    <mesh position={[0, 0, 2.4]} rotation={[0, 0, 0]}>
      <Html
        transform 
        zIndexRange={[1, 0]}
        occlude={[globeRef]} 
        ><Projects /></Html>
    </mesh>
    <mesh position={[1.5, 0, 1.6]} rotation={[0, Math.PI/5, 0]}>
      <Html
        transform 
        zIndexRange={[1, 0]}
        occlude={[globeRef]} 
        > <h1>helo</h1></Html>
    </mesh>
    <mesh position={[-2, -1, 1.1]} rotation={[Math.PI / 10, -Math.PI / 3, Math.PI/15]}>
      <Html
        transform 
        zIndexRange={[1, 0]}    
        occlude={[globeRef]} 
        > <h1>helo</h1></Html>
    </mesh>
    <mesh position={[0, 1, 2.1]} rotation={[-Math.PI/10 , 0, 0]}>
      <Html
        transform 
        zIndexRange={[1, 0]}    
        occlude={[globeRef]} 
        > <h1>helo</h1></Html>
    </mesh>
    </group>
  )
}

export default Globe
