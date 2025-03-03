// Simulate Q-calcs pulses
const pulses = [];
for (let i = 0; i < 10; i++) {
    pulses.push({
        step: i + 1,
        time: (i * 0.1).toFixed(1),
        energy: (Math.random() * 100).toFixed(2),
        position: (Math.random() * 1e-100).toExponential(2)
    });
}

// Fill the table
const tableBody = document.querySelector('#qcalcsTable tbody');
pulses.forEach(pulse => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${pulse.step}</td><td>${pulse.time}</td><td>${pulse.energy}</td><td>${pulse.position}</td>`;
    tableBody.appendChild(row);
});

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth * 0.45 / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas') });
renderer.setSize(window.innerWidth * 0.45, window.innerHeight);
camera.position.z = 5;

// Visualize pulses as spheres
const pulseSpheres = [];
pulses.forEach(pulse => {
    const geometry = new THREE.SphereGeometry(0.2, 16, 16);
    const material = new THREE.MeshBasicMaterial({ color: 0xffaa00 });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.set((pulse.step - 5) * 0.5, 0, 0);
    pulseSpheres.push(sphere);
    scene.add(sphere);
});

// Animate pulses
let elapsedTime = 0;
function animate() {
    requestAnimationFrame(animate);
    elapsedTime += 0.016;

    pulseSpheres.forEach((sphere, index) => {
        const pulse = pulses[index];
        const scale = 1 + Math.sin(elapsedTime * parseFloat(pulse.energy)) * 0.2;
        sphere.scale.set(scale, scale, scale);
        sphere.material.color.set(document.getElementById('pulseColor').value);
    });

    renderer.render(scene, camera);
}
animate();
