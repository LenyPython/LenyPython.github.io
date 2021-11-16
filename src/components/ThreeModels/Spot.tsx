import { SpotFragmentShader,
    SpotVertexShader
} from "./shaders"
import alphaMap from '../../textures/transparent.png'
import {useTexture} from "@react-three/drei";

const Spot = () => {
const Shaders = {
    uniforms: {
      red: { value: 0.3 },
      green: { value: 0.8 },
      blue: { value: 1.0 },
      map: { type: "t" , value: useTexture(alphaMap) }
    },
  vertexShader: SpotVertexShader,
  fragmentShader: SpotFragmentShader
};

  return(
      <mesh position={[-2, 0, 0]}>
          <sphereGeometry args={[.4, 16, 16]} />
          <shaderMaterial 
            attach="material"
            args={[Shaders]}
          />
        </mesh>
  )
}

export default Spot
