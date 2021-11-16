import Spot from '../ThreeModels/Spot'
import { Globe } from '../ThreeModels'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import {useAppSelector} from '../../app/hooks'
import {getGlobalStyle} from '../../slices/GlobalStyleSlice'
import {Color} from 'three'


const ThreeBackground = () => {
  const { hue, saturation, light }  = useAppSelector(getGlobalStyle)
  const color = `hsl(${hue},${saturation}%,${light}%)`


  return <Canvas>
    <Suspense fallback={null}>
    <OrbitControls enablePan={false} />
    <pointLight color={color} />
    <Globe />
    <Spot />
      <mesh >
          <sphereGeometry args={[.4, 16, 16]} />
          <meshStandardMaterial 
            emissive={new Color(color)}
            metalness={0.1}
          />
        </mesh>
      </Suspense>
  </Canvas>

}

export default ThreeBackground
