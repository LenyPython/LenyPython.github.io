import * as THREE from 'three'
import { useRef } from 'react'
import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import venus from '../../textures/2k_venus_surface.jpg'

const Sun = () => {
  const sun = useRef<THREE.Mesh>(null!)
  const venusMap = useTexture(venus)

  useFrame(() => {
    let rot = sun.current.rotation
    rot.y -= 0.01
  })
  return (
      <mesh ref={sun}>
          <sphereGeometry args={[.4, 16, 16]} />
          <meshStandardMaterial 
            emissiveMap={venusMap}
            emissive={ new THREE.Color('white')}
          />
        </mesh>

  )

}
 export default Sun
