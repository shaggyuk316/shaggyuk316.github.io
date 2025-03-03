// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth * 0.45 / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas') });
renderer.setSize(window.innerWidth * 0.45, window.innerHeight);
camera.position.z = 5;

// Binary Phase (Cube)
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.set(-2, 0, 0);
scene.add(cube);

// QuantSpark Phase (Sphere)
const sphereGeometry = new THREE.SphereGeometry(0.5, 16, 16);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(0, 0, 0);
scene.add(sphere);

// ChaosBloom Phase (Points)
const pointCount = 100;
const positions = new Float32Array(pointCount * 3);
for (let i = 0; i < pointCount; i++) {
    positions[i * 3] = 2 + (Math.random() - 0.5) * 1;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 1;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 1;
}
const pointGeometry = new THREE.BufferGeometry();
pointGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
const pointMaterial = new THREE.PointsMaterial({ color: 0x0000ff, size: 0.05 });
const points = new THREE.Points(pointGeometry, pointMaterial);
scene.add(points);

// Animate phases
function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    sphere.position.y = Math.sin(Date.now() * 0.001) * 0.5;

    const pointPositions = points.geometry.attributes.position.array;
    for (let i = 0; i < pointCount; i++) {
        pointPositions[i * 3] += (Math.random() - 0.5) * 0.02;
        pointPositions[i * 3 + 1] += (Math.random() - 0.5) * 0.02;
    }
    points.geometry.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
}
animate();
