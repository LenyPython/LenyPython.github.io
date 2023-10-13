'use client'
import * as THREE from 'three'
import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

import trans from './transparent.webp'

const Globe = (props: JSX.IntrinsicElements['mesh']) => {
	const textures = useTexture({
		map: trans.src,
		alphaMap: trans.src
	})
	const ref = useRef<THREE.Mesh>(null!)

	useFrame(() => {
		let rot = ref.current.rotation
		rot.y += 0.005
	})

	return (
		<mesh ref={ref} {...props}>
			<sphereGeometry args={[2, 64, 64]} />
			<meshStandardMaterial side={THREE.DoubleSide} wireframe {...textures} />
		</mesh>
	)
}

export default Globe
