import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

// canvas
const canvas = document.querySelector("canvas.webgl");

// scene
const scene = new THREE.Scene();

// font
const fontLoader = new FontLoader();
fontLoader.load(
  "/fonts/helvetiker_regular.typeface.json", (font) => {
    const textGeometry = new TextGeometry("Jonathan", {
      font,
      size: 0.5,
      height: 0.2,
      curveSegments: 30,
      bevelEnabled: true,
      bevelThickness: 0.03,
      bevelSize: 0.02,
      bevelOffset: 0,
      bevelSegments: 4
    })
    textGeometry.center();

    const material = new THREE.MeshNormalMaterial();
    const text = new THREE.Mesh(textGeometry, material);
    scene.add(text);

    const donutGeometry = new THREE.TorusGeometry(0.2, 0.2, 20, 45);
    const sphereGeometry = new THREE.SphereGeometry(0.3, 25, 15);
    const octahedronGeometry = new THREE.OctahedronGeometry(0.3, 0);
    const icosahedronGeometry = new THREE.IcosahedronGeometry(0.3, 0);

    for (let i = 0; i < 30; i++) {
      const donut = new THREE.Mesh(donutGeometry, material);
      const sphere = new THREE.Mesh(sphereGeometry, material);
      const octahedron = new THREE.Mesh(octahedronGeometry, material);
      const icosahedron = new THREE.Mesh(icosahedronGeometry, material);

      donut.position.x = (Math.random() - 0.5) * 10;
      donut.position.y = (Math.random() - 0.5) * 10;
      donut.position.z = (Math.random() - 0.5) * 10;
      donut.rotation.x = Math.random() * Math.PI;
      donut.rotation.y = Math.random() * Math.PI;

      sphere.position.x = (Math.random() - 0.5) * 10;
      sphere.position.y = (Math.random() - 0.5) * 10;
      sphere.position.z = (Math.random() - 0.5) * 10;

      octahedron.position.x = (Math.random() - 0.5) * 10;
      octahedron.position.y = (Math.random() - 0.5) * 10;
      octahedron.position.z = (Math.random() - 0.5) * 10;
      octahedron.rotation.x = Math.random() * Math.PI;
      octahedron.rotation.y = Math.random() * Math.PI;

      icosahedron.position.x = (Math.random() - 0.5) * 10;
      icosahedron.position.y = (Math.random() - 0.5) * 10;
      icosahedron.position.z = (Math.random() - 0.5) * 10;
      icosahedron.rotation.x = Math.random() * Math.PI;
      icosahedron.rotation.y = Math.random() * Math.PI;

      const donutScale = Math.random();
      const sphereScale = Math.random();
      const octahedronScale = Math.random();
      const icosahedronScale = Math.random();

      donut.scale.set(donutScale, donutScale, donutScale);
      sphere.scale.set(sphereScale, sphereScale, sphereScale);
      octahedron.scale.set(octahedronScale, octahedronScale, octahedronScale);
      icosahedron.scale.set(icosahedronScale, icosahedronScale, icosahedronScale);

      scene.add(donut, sphere, octahedron, icosahedron);
    }
  }
)

// sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

window.addEventListener("resize", () => {
  // size
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight

  // camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
})

// camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 4;

// controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// animation
const tick = () => {
  controls.update();

  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
}

tick();