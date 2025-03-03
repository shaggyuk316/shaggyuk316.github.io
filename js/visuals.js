// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth * 0.45 / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas') });
renderer.setSize(window.innerWidth * 0.45, window.innerHeight);
camera.position.z = 5;

// Add a sphere
let sphere;
function initShapes() {
    if (sphere) scene.remove(sphere);
    const sphereSize = parseFloat(document.getElementById('sphereSize').value);
    const sphereColor = new THREE.Color(document.getElementById('sphereColor').value);
    const geometry = new THREE.SphereGeometry(sphereSize, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: sphereColor });
    sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
}

// Animate the sphere
function animate() {
    requestAnimationFrame(animate);
    const sphereSpeed = parseFloat(document.getElementById('sphereSpeed').value);
    sphere.rotation.x += sphereSpeed;
    sphere.rotation.y += sphereSpeed;
    sphere.material.color.set(document.getElementById('sphereColor').value);
    renderer.render(scene, camera);
}

// Event listeners for controls
document.getElementById('sphereSize').addEventListener('input', initShapes);
document.getElementById('sphereColor').addEventListener('input', () => {});
document.getElementById('sphereSpeed').addEventListener('input', () => {});

// Initial setup
initShapes();
animate();
