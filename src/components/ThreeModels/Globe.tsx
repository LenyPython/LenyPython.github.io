import {useTexture} from "@react-three/drei"
import * as THREE from 'three'
import map from '../../textures/transparent.png'
import alphaMap from '../../textures/inv.jpg'

const Globe = (props: JSX.IntrinsicElements['mesh']) => {
  const textures = useTexture({
    map,
    alphaMap
  })
  return (
    <mesh
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
