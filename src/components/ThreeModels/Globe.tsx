import * as THREE from 'three'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'


const Globe = (props: JSX.IntrinsicElements['mesh']) => {
  const ref = useRef<THREE.Mesh>(null!)
  useFrame((state, delta) => {
    ref.current.rotation.x += 0.01
  })
  return (
    <>
    <mesh
      {...props}
      ref={ref}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhysicalMaterial  />
    </mesh>
    </>
  )
}

export default Globe
