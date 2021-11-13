import * as THREE from 'three'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'


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

export default Globe
