import { Globe, Sun } from '../ThreeModels'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import {useAppSelector} from '../../app/hooks'
import {getGlobalStyle} from '../../slices/GlobalStyleSlice'

const ThreeBackground = () => {
  const { hue, saturation, light }  = useAppSelector(getGlobalStyle)
  const color = `hsl(${hue},${saturation}%,${light}%)`


  return <Canvas>
    <Suspense fallback={null}>
    <OrbitControls enablePan={false} />
    <ambientLight color={color} />
    <Globe />
    <Sun color={color} />
      </Suspense>
  </Canvas>

}

export default ThreeBackground
