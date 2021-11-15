import { SopotFragmentShader,
    SpotVertexShader
} from "./shaders"
import alphaMap from '../../textures/transparent.png'

const Spot = () => {
  return(
      <mesh position={[-2, 0, 0]}>
          <sphereGeometry args={[.4, 16, 16]} />
          <shaderMaterial 
            attach="material"
            uniforms-alphaMap={alphaMap}
            //fragmentShader={SopotFragmentShader}
            //vertexShader={SpotVertexShader}
          />
        </mesh>
  )
}

export default Spot
