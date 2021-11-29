import * as THREE from 'three'
import { useRef } from 'react'
import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import map from '../../textures/plates.jpg'
import displacmentMap from '../../textures/platesalpha.jpg'
import alphaMap from '../../textures/platesalpha.jpg'

const Metal = () => {
  const ref = useRef<THREE.Mesh>(null!)
  const textures = useTexture({
    map,
    displacmentMap,
    alphaMap
  })
  useFrame(() => {
    let rot = ref.current.rotation
    rot.z -= 0.005
    rot.y -= 0.005
  })
  return (
      <mesh ref={ref}>
          <sphereGeometry args={[.8, 16, 16]} />
          <meshStandardMaterial 
            side={THREE.DoubleSide}
            
            transparent
            {...textures}
          />
        </mesh>
  )

}
 export default Metal
