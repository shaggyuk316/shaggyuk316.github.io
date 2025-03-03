// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth * 0.45 / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas') });
renderer.setSize(window.innerWidth * 0.45, window.innerHeight);
camera.position.z = 5;

// Arrays to persist objects
let cubes = [];
let flares = [];
let points = null;

// Control elements
const soundModeSelect = document.getElementById('soundMode');
const waveFrequencyInput = document.getElementById('waveFrequency');
const startAudioButton = document.getElementById('startAudio');
const cubeSizeInput = document.getElementById('cubeSize');
const cubeColorInput = document.getElementById('cubeColor');
const cubeVibrationInput = document.getElementById('cubeVibration');
const flareCountInput = document.getElementById('flareCount');
const flareColorInput = document.getElementById('flareColor');
const flareSpreadInput = document.getElementById('flareSpread');
const pointCountInput = document.getElementById('pointCount');
const pointColorInput = document.getElementById('pointColor');
const pointFallSpeedInput = document.getElementById('pointFallSpeed');

// Web Audio API setup
let audioContext, analyser, dataArray;
const bufferLength = 256;
let soundLevel = 0;

function initAudio() {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioContext.createAnalyser();
    analyser.fftSize = bufferLength * 2;
    dataArray = new Uint8Array(bufferLength);

    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
        const source = audioContext.createMediaStreamSource(stream);
        source.connect(analyser);
    }).catch(err => console.error('Audio permission denied:', err));
}

startAudioButton.addEventListener('click', initAudio);

// Initialize shapes
function initShapes() {
    // Clear existing shapes
    cubes.forEach(cube => scene.remove(cube));
    flares.forEach(flare => scene.remove(flare));
    if (points) scene.remove(points);
    cubes = [];
    flares = [];

    // Binary Cubes
    const cubeSize = parseFloat(cubeSizeInput.value);
    const cubeColor = new THREE.Color(cubeColorInput.value);
    for (let i = 0; i < 5; i++) {
        const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
        const material = new THREE.MeshBasicMaterial({ color: cubeColor });
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set((Math.random() - 0.5) * 5, (Math.random() - 0.5) * 5, (Math.random() - 0.5) * 5);
        cubes.push(cube);
        scene.add(cube);
    }

    // QuantSpark Flares
    const flareCount = parseInt(flareCountInput.value);
    const flareColor = new THREE.Color(flareColorInput.value);
    for (let i = 0; i < flareCount; i++) {
        const geometry = new THREE.SphereGeometry(0.1, 16, 16);
        const material = new THREE.MeshBasicMaterial({ color: flareColor });
        const flare = new THREE.Mesh(geometry, material);
        flare.position.set((Math.random() - 0.5) * 5, (Math.random() - 0.5) * 5, (Math.random() - 0.5) * 5);
        flares.push(flare);
        scene.add(flare);
    }

    // ChaosBloom Points
    const pointCount = parseInt(pointCountInput.value);
    const pointColor = new THREE.Color(pointColorInput.value);
    const positions = new Float32Array(pointCount * 3);
    for (let i = 0; i < pointCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 5;
        positions[i * 3 + 1] = Math.random() * 5 + 2;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({ color: pointColor, size: 0.05 });
    points = new THREE.Points(geometry, material);
    scene.add(points);
}

// Animate shapes with sound interaction
let elapsedTime = 0;
function animate() {
    requestAnimationFrame(animate);
    elapsedTime += 0.016;

    // Determine sound level
    soundLevel = 0;
    const soundMode = soundModeSelect.value;
    if (soundMode === 'live' && analyser) {
        analyser.getByteFrequencyData(dataArray);
        soundLevel = dataArray.reduce((sum, val) => sum + val, 0) / (bufferLength * 128);
    } else if (soundMode === 'wavelength') {
        const frequency = parseFloat(waveFrequencyInput.value);
        soundLevel = Math.sin(elapsedTime * frequency * 2 * Math.PI) * 0.5 + 0.5;
    }

    // Animate cubes
    const vibration = parseFloat(cubeVibrationInput.value);
    cubes.forEach(cube => {
        cube.rotation.y += 0.01;
        const offset = Math.sin(elapsedTime * 5) * soundLevel * vibration * 0.1;
        cube.position.y += offset;
        cube.material.color.set(cubeColorInput.value);
    });

    // Animate flares
    const spreadSpeed = parseFloat(flareSpreadInput.value);
    flares.forEach(flare => {
        flare.position.x += (Math.random() - 0.5) * spreadSpeed * (1 + soundLevel);
        flare.position.y += (Math.random() - 0.5) * spreadSpeed * (1 + soundLevel);
        flare.position.z += (Math.random() - 0.5) * spreadSpeed * (1 + soundLevel);
        if (Math.abs(flare.position.x) > 5) flare.position.x *= -0.9;
        if (Math.abs(flare.position.y) > 5) flare.position.y *= -0.9;
        if (Math.abs(flare.position.z) > 5) flare.position.z *= -0.9;
        flare.material.color.set(flareColorInput.value);
    });

    // Animate points
    const fallSpeed = parseFloat(pointFallSpeedInput.value);
    const positions = points.geometry.attributes.position.array;
    for (let i = 0; i < positions.length / 3; i++) {
        positions[i * 3 + 1] -= fallSpeed * (1 + soundLevel);
        if (positions[i * 3 + 1] < -5) positions[i * 3 + 1] = 5 + Math.random() * 2;
    }
    points.geometry.attributes.position.needsUpdate = true;
    points.material.color.set(pointColorInput.value);

    renderer.render(scene, camera);
}

// Event listeners for controls
soundModeSelect.addEventListener('input', () => {});
waveFrequencyInput.addEventListener('input', () => {});
cubeSizeInput.addEventListener('input', initShapes);
cubeColorInput.addEventListener('input', () => {});
cubeVibrationInput.addEventListener('input', () => {});
flareCountInput.addEventListener('input', initShapes);
flareColorInput.addEventListener('input', () => {});
flareSpreadInput.addEventListener('input', () => {});
pointCountInput.addEventListener('input', initShapes);
pointColorInput.addEventListener('input', () => {});
pointFallSpeedInput.addEventListener('input', () => {});

// Initial setup
initShapes();
animate();
