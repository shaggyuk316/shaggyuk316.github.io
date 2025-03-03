// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth * 0.45 / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas') });
renderer.setSize(window.innerWidth * 0.45, window.innerHeight);
camera.position.z = 5;

// Add a cube and a sphere
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.set(-1, 0, 0);
scene.add(cube);

const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(1, 0, 0);
scene.add(sphere);

// Web Audio API setup
let audioContext, analyser, dataArray;
const bufferLength = 256;

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

document.getElementById('startAudio').addEventListener('click', initAudio);

// Animate based on audio
function animate() {
    requestAnimationFrame(animate);

    let soundLevel = 0;
    if (analyser) {
        analyser.getByteFrequencyData(dataArray);
        soundLevel = dataArray.reduce((sum, val) => sum + val, 0) / (bufferLength * 128);
    }

    // Scale cube and sphere based on sound
    const scale = 1 + soundLevel * 0.5;
    cube.scale.set(scale, scale, scale);
    sphere.scale.set(scale, scale, scale);

    // Update colors
    cube.material.color.set(document.getElementById('cubeColor').value);
    sphere.material.color.set(document.getElementById('sphereColor').value);

    renderer.render(scene, camera);
}
animate();
