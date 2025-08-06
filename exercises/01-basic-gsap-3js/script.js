import * as THREE from "three";
import gsap from "gsap";

// Canvas
const canvas = document.querySelector("canvas.webgl");
const axesHelper = new THREE.AxesHelper(2);

// Scene
const scene = new THREE.Scene();
scene.add(axesHelper);

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0100 });
const mesh = new THREE.Mesh(geometry, material);
// mesh.position.x = 1;
// mesh.position.y = -1;
// mesh.position.set(1, -1, 0); // Set position using set method
// mesh.scale.set(2, 0.5, 1); // Scale the mesh
// mesh.rotation.x = Math.PI * 0.5; // Rotate the mesh 45 degrees around the x-axis
// mesh.rotation.z = Math.PI * 0.25; // Rotate the mesh 45 degrees around the z-axis
// const group = new THREE.Group();
// group.scale.y = 2;
// group.rotation.y = 0.2;
// scene.add(group);

// const cube1 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
// cube1.position.x = -1.5;
// group.add(cube1);

// const cube2 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
// cube2.position.x = 0;
// group.add(cube2);

// const cube3 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
// cube3.position.x = 1.5;
// group.add(cube3);
scene.add(mesh);

/**
 * Sizes
 */
const sizes = {
	width: 800,
	height: 600
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
// camera.lookAt(new THREE.Vector3(0, -1, 0));
scene.add(camera);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
	canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);

// let time = Date.now();
const clock = new THREE.Clock();

gsap.to(mesh.position, { duration: 1, deplay: 1, x: 2, ease: "power1.inOut" });

const tick = () => {
	// const currentTime = Date.now();
	// const deltaTime = currentTime - time;
	// console.log(deltaTime);
	// const elapsedTime = clock.getElapsedTime();
	// console.log(deltaTime);
	// mesh.rotation.y += elapsedTime;
	// mesh.position.x = Math.cos(elapsedTime);
	// mesh.position.y = Math.sin(elapsedTime);
	renderer.render(scene, camera);

	window.requestAnimationFrame(tick);
};

// renderer.render(scene, camera);
tick();
