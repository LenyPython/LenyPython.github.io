function main() {
	//get canvas in the DOM
	const canvas = document.querySelector('#c')
	const renderer = new THREE.WebGLRenderer({canvas})

	//field of view in deg
	const fov = 75
	//width to heigh view port ratio
	const aspect = window.innerWidth / window.innerHeight
	//distance to see
	const near = 0.1
	const far = 5
	const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
	camera.position.z = 2

	const scene = new THREE.Scene();

	const color = 0x00FF00
	const intensity = 1
	const light = new THREE.DirectionalLight(color, intensity)
	light.position.set(-1, 2, 4)
	scene.add(light)

	const boxWidth = 1
	const boxHeight = 1
	const boxDepth = 1
	const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth)

	function makeInstance(geometry, color, x) {
		const material = new THREE.MeshPhongMaterial({color})

		const cube = new THREE.Mesh(geometry, material)
		scene.add(cube)

		cube.position.x = x

		return cube
	}

	let cube = makeInstance(geometry, 0x44aa88, 0)

	function resizeRendererToDisplaySize(renderer) {
		const canvas = renderer.domElement
		const width = window.innerWidth
		const height = window.innerHeight
		const needResize = canvas.width !== width || canvas.height !== height
		if (needResize) {
			renderer.setSize(width, height, false);
		}
		return needResize
	}

	function render(time) {
		time *= 0.001;

		if (resizeRendererToDisplaySize(renderer)) {
			const canvas = renderer.domElement
			camera.aspect = canvas.clientWidth / canvas.clientHeight
			camera.updateProjectionMatrix()
		}

		cube.rotation.x = time
		cube.rotation.y = time

		renderer.render(scene, camera)

		requestAnimationFrame(render)
	}

	requestAnimationFrame(render)
}

main();
