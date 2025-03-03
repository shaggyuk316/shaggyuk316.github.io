// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth * 0.45 / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas') });
renderer.setSize(window.innerWidth * 0.45, window.innerHeight);
camera.position.z = 5;

// Add a cube
let cube;
function initShapes() {
    if (cube) scene.remove(cube);
    const cubeSize = parseFloat(document.getElementById('cubeSize').value);
    const cubeColor = new THREE.Color(document.getElementById('cubeColor').value);
    const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
    const material = new THREE.MeshBasicMaterial({ color: cubeColor });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
}

// Animate the cube
function animate() {
    requestAnimationFrame(animate);
    const cubeSpeed = parseFloat(document.getElementById('cubeSpeed').value);
    cube.rotation.x += cubeSpeed;
    cube.rotation.y += cubeSpeed;
    cube.material.color.set(document.getElementById('cubeColor').value);
    renderer.render(scene, camera);
}

// Event listeners for controls
document.getElementById('cubeSize').addEventListener('input', initShapes);
document.getElementById('cubeColor').addEventListener('input', () => {});
document.getElementById('cubeSpeed').addEventListener('input', () => {});

// Initial setup
initShapes();
animate();
