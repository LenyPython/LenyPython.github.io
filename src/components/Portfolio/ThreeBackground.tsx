import { Globe } from '../ThreeModels'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import {useAppSelector} from '../../app/hooks'
import {getGlobalStyle} from '../../slices/GlobalStyleSlice'


const ThreeBackground = () => {

  const { hue, saturation, light }  = useAppSelector(getGlobalStyle)
  const color = `hsl(${hue},${saturation}%,${light}%)`
  return <Canvas>
    <Suspense fallback={null} />
    <OrbitControls enablePan={false} />
    <pointLight position={[10,10,1]} color={color}
    intensity={.6}/>
    <pointLight position={[10,10,1]} color={color}
    intensity={.6}/>
    <pointLight position={[-10,-10,-1]} color={color}
    intensity={.6}/>
    <Globe />
  </Canvas>

}

export default ThreeBackground
