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
    <Suspense fallback={null}>
    <OrbitControls enablePan={false} autoRotate={true} />
    <ambientLight color={color} intensity={.4}/>
    <pointLight position={[10,7,0]} color={'red'}
    intensity={.4}/>
    <pointLight position={[-10,7,0]} color={'blue'}
    intensity={.2}/>
    <pointLight position={[0,-7,0]} color={'yellow'}
    intensity={.2}/>
    <Globe />
      </Suspense>
  </Canvas>

}

export default ThreeBackground
