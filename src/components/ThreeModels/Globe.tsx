import * as THREE from 'three'
import map from '../../textures/transparent.png'
import alphaMap from '../../textures/inv.jpg'
import { useTexture, Html } from "@react-three/drei"
import { extend, useFrame } from "@react-three/fiber"
import { useRef } from "react"

extend(Html)

const Globe = (props: JSX.IntrinsicElements['mesh']) => {
  const textures = useTexture({
    map,
    alphaMap
  })
  const ref = useRef<THREE.Mesh>(null!)
  useFrame(()=> {
    let rot = ref.current.rotation
    rot.y += 0.005

  })

  return (
    <mesh ref={ref}
      {...props}
    >
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial 
        side={THREE.DoubleSide}
        transparent
        {...textures}
      />
    </mesh>
  )
}

export default Globe
