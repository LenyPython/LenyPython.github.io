import { useRef } from 'react'
import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import rays from '../../textures/2k_sun.jpg'

const Sun = () => {
  const ref = useRef<THREE.Mesh>(null!)
  const sunMap = useTexture(rays)
  useFrame(() => {
    let rot = ref.current.rotation
    rot.y -= 0.01
  })
  return (
      <mesh ref={ref}>
          <sphereGeometry args={[.4, 16, 16]} />
          <meshStandardMaterial 
            map={sunMap}
          />
        </mesh>
  )

}
 export default Sun
