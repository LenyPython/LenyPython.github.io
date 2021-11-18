import { Globe } from '../ThreeModels'
import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useTexture } from '@react-three/drei'
import {useAppSelector} from '../../app/hooks'
import {getGlobalStyle} from '../../slices/GlobalStyleSlice'
import {Color} from 'three'
import rays from '../../textures/2k_sun.jpg'

const Sun = (props: { color: string } & JSX.IntrinsicElements['mesh']) => {
  const { color } = props
  const ref = useRef<THREE.Mesh>(null!)
  const sunMap = useTexture(rays)
  useFrame(()=>{
    let rot = ref.current.rotation
    rot.y -= 0.01
  })
  return (
      <mesh ref={ref}>
          <sphereGeometry args={[.4, 16, 16]} />
          <meshStandardMaterial 
            emissive={ new Color(color) }
            emissiveMap={sunMap}
            alphaMap={sunMap}
          />
        </mesh>
  )

}

const ThreeBackground = () => {
  const { hue, saturation, light }  = useAppSelector(getGlobalStyle)
  const color = `hsl(${hue},${saturation}%,${light}%)`


  return <Canvas>
    <Suspense fallback={null}>
    <OrbitControls enablePan={false} />
    <pointLight color={color} />
    <Globe />
    <Sun color={color} />
      </Suspense>
  </Canvas>

}

export default ThreeBackground
