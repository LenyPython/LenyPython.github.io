
const SpotFragmentShader = `
    varying vec2 vUv;
    uniform float red;
    uniform float green;
    uniform float blue;
    uniform sampler2D map;
    void main() {
      gl_FragColor = vec4(red, green, blue, 0.6);
    }
  `
const SpotVertexShader = `
    void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position + vec3(0.5,0.4,0.2), 1.0 );
    }
  `
export { SpotFragmentShader, SpotVertexShader }
