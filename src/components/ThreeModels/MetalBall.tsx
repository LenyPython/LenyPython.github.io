import * as THREE from 'three'
import { useRef } from 'react'
import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import main from '../../textures/plates.jpg'
import displ from '../../textures/platesDis.jpg'

const Metal = () => {
  const ref = useRef<THREE.Mesh>(null!)
  const [map, displacement] = useTexture([
    main,
    displ
  ])
  useFrame(() => {
    let rot = ref.current.rotation
    rot.z -= 0.005
    rot.y -= 0.005
  })
  return (
      <mesh ref={ref}>
          <sphereGeometry args={[.8, 32, 32]} />
          <meshStandardMaterial 
            side={THREE.DoubleSide}
            map={map}
            displacementMap={map}
            alphaMap={displacement}
            displacementScale={0.2}
            transparent
          />
        </mesh>
  )

}
 export default Metal
