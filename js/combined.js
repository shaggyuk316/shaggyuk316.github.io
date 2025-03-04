const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth * 0.6 / 600, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('experimentCanvas') });
renderer.setSize(window.innerWidth * 0.6, 600);
camera.position.z = 25;
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.minDistance = 5;
controls.maxDistance = 50;

const maxSize = 20; // Planck-scale mapped
let binaryCubes = [], quantsparkFlares = [], chaosbloomWeb = null, firedObject = null;
let isFrozen = false;

// Audio setup
let audioContext, analyser, dataArray;
document.getElementById('startAudio').addEventListener('click', () => {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;
    dataArray = new Uint8Array(analyser.frequencyBinCount);
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
        const source = audioContext.createMediaStreamSource(stream);
        source.connect(analyser);
    }).catch(err => console.error('Audio error:', err));
});

function updateAll() {
    scene.children = [];
    binaryCubes = [];
    quantsparkFlares = [];
    chaosbloomWeb = null;

    const binarySize = parseInt(document.getElementById('binarySize').value);
    const binaryColor = document.getElementById('binaryColor').value;
    const binaryDensity = parseFloat(document.getElementById('binaryDensity').value);
    const binarySound = parseFloat(document.getElementById('binarySound').value);
    const binaryVibration = parseFloat(document.getElementById('binaryVibration').value);
    const binaryGeo = new THREE.BoxGeometry(1 + binaryDensity, 1 + binaryDensity, 1 + binaryDensity);
    const binaryMat = new THREE.MeshBasicMaterial({ color: binaryColor });
    for (let i = 0; i < binarySize; i++) {
        const cube = new THREE.Mesh(binaryGeo, binaryMat);
        cube.position.set(i * 2 - (binarySize - 1), -5, 0);
        cube.sound = binarySound;
        cube.vibration = binaryVibration;
        binaryCubes.push(cube);
        scene.add(cube);
    }

    const quantsparkCount = parseInt(document.getElementById('quantsparkCount').value);
    const quantsparkSolidColor = document.getElementById('quantsparkSolidColor').value;
    const quantsparkGasColor = document.getElementById('quantsparkGasColor').value;
    const quantsparkMagnetic = parseFloat(document.getElementById('quantsparkMagnetic').value);
    const flareSpread = parseFloat(document.getElementById('flareSpread').value);
    const quantsparkGeo = new THREE.SphereGeometry(0.5, 16, 16);
    for (let i = 0; i < quantsparkCount; i++) {
        const solid = new THREE.Mesh(quantsparkGeo, new THREE.MeshBasicMaterial({ color: quantsparkSolidColor }));
        const gas = new THREE.Mesh(quantsparkGeo, new THREE.MeshBasicMaterial({ color: quantsparkGasColor }));
        solid.position.set(Math.random() * maxSize - maxSize/2, 0, Math.random() * maxSize - maxSize/2);
        gas.position.set(Math.random() * maxSize - maxSize/2, 0, Math.random() * maxSize - maxSize/2);
        solid.velocity = new THREE.Vector3((Math.random() - 0.5) * flareSpread, (Math.random() - 0.5) * flareSpread, (Math.random() - 0.5) * flareSpread);
        gas.velocity = new THREE.Vector3((Math.random() - 0.5) * flareSpread, (Math.random() - 0.5) * flareSpread, (Math.random() - 0.5) * flareSpread);
        quantsparkFlares.push({ solid, gas });
        scene.add(solid);
        scene.add(gas);
    }

    const chaosbloomPoints = parseInt(document.getElementById('chaosbloomPoints').value);
    const chaosbloomColor1 = document.getElementById('chaosbloomColor1').value;
    const chaosbloomColor2 = document.getElementById('chaosbloomColor2').value;
    const chaosbloomGravity = parseFloat(document.getElementById('chaosbloomGravity').value);
    const pointFallSpeed = parseFloat(document.getElementById('pointFallSpeed').value);
    const chaosbloomGeo = new THREE.BufferGeometry();
    const vertices = [], colors = [], sizes = [];
    for (let i = 0; i < chaosbloomPoints; i++) {
        vertices.push(Math.random() * maxSize - maxSize/2, Math.random() * maxSize - maxSize/2, Math.random() * maxSize - maxSize/2);
        const color = Math.random() < 0.5 ? new THREE.Color(chaosbloomColor1) : new THREE.Color(chaosbloomColor2);
        colors.push(color.r, color.g, color.b);
        sizes.push(0.1);
    }
    chaosbloomGeo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    chaosbloomGeo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    chaosbloomGeo.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));
    const chaosbloomMat = new THREE.PointsMaterial({ vertexColors: true, transparent: true, sizeAttenuation: true });
    chaosbloomWeb = new THREE.Points(chaosbloomGeo, chaosbloomMat);
    chaosbloomWeb.gravity = pointFallSpeed;
    scene.add(chaosbloomWeb);

    logState();
}

function adjust(id, delta) {
    const input = document.getElementById(id);
    input.value = Math.max(parseFloat(input.min), Math.min(parseFloat(input.max), parseFloat(input.value) + delta));
    updateAll();
}

function showVariables() {
    const popup = document.getElementById('variablePopup');
    const table = document.getElementById('variableTable');
    table.innerHTML = '<table border="1"><tr><th>Parameter</th><th>Value</th></tr>' +
        Array.from(document.querySelectorAll('.control-item input')).map(input => `<tr><td>${input.id}</td><td>${input.value}</td></tr>`).join('') +
        '</table>';
    popup.style.display = 'block';
}

function logState() {
    const log = document.getElementById('logSelect');
    const state = Array.from(document.querySelectorAll('.control-item input')).map(input => `${input.id}: ${input.value}`).join(', ');
    const timestamp = new Date().toISOString();
    log.innerHTML += `<option>${timestamp} - ${state}</option>`;
    document.getElementById('variableDisplay').innerText = state;
}

document.getElementById('freezeAnimation').addEventListener('click', () => {
    isFrozen = !isFrozen;
});

document.getElementById('fireObject').addEventListener('click', () => {
    if (firedObject) scene.remove(firedObject);
    const type = document.getElementById('fireType').value;
    const direction = document.getElementById('fireDirection').value.split(',').map(Number);
    const mode = document.getElementById('fireMode').value;
    const geo = type === 'Gold' ? new THREE.SphereGeometry(0.5, 16, 16) : new THREE.BoxGeometry(0.5, 0.5, 0.5);
    firedObject = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: '#FFD700' }));
    firedObject.position.set(0, 0, -10);
    firedObject.velocity = new THREE.Vector3(...direction).normalize().multiplyScalar(0.1);
    firedObject.mode = mode;
    scene.add(firedObject);
    logState();
});

function animate() {
    if (!isFrozen) {
        requestAnimationFrame(animate);
        let soundLevel = 0;
        if (audioContext && analyser) {
            analyser.getByteFrequencyData(dataArray);
            soundLevel = dataArray.reduce((a, b) => a + b, 0) / dataArray.length / 255;
        }

        binaryCubes.forEach(cube => {
            cube.scale.setScalar(1 + cube.sound * soundLevel);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            cube.rotation.z += 0.01;
            cube.position.clamp(new THREE.Vector3(-maxSize/2, -maxSize/2, -maxSize/2), new THREE.Vector3(maxSize/2, maxSize/2, maxSize/2));
        });

        quantsparkFlares.forEach(flare => {
            flare.solid.position.add(flare.solid.velocity);
            flare.gas.position.add(flare.gas.velocity);
            flare.solid.position.clamp(new THREE.Vector3(-maxSize/2, -maxSize/2, -maxSize/2), new THREE.Vector3(maxSize/2, maxSize/2, maxSize/2));
            flare.gas.position.clamp(new THREE.Vector3(-maxSize/2, -maxSize/2, -maxSize/2), new THREE.Vector3(maxSize/2, maxSize/2, maxSize/2));
        });

        if (chaosbloomWeb) {
            const positions = chaosbloomWeb.geometry.attributes.position.array;
            const sizes = chaosbloomWeb.geometry.attributes.size.array;
            for (let i = 0; i < positions.length; i += 3) {
                positions[i + 1] -= chaosbloomWeb.gravity;
                if (positions[i + 1] < -maxSize/2) positions[i + 1] = maxSize/2;
                const distance = camera.position.distanceTo(new THREE.Vector3(positions[i], positions[i + 1], positions[i + 2]));
                sizes[i / 3] = Math.min(0.1, maxSize / distance) * (1 + soundLevel);
                if (sizes[i / 3] < 0.05) sizes[i / 3] = 0;
            }
            chaosbloomWeb.geometry.attributes.position.needsUpdate = true;
            chaosbloomWeb.geometry.attributes.size.needsUpdate = true;
        }

        if (firedObject) {
            if (firedObject.mode === 'Moving') firedObject.position.add(firedObject.velocity);
            firedObject.position.clamp(new THREE.Vector3(-maxSize/2, -maxSize/2, -maxSize/2), new THREE.Vector3(maxSize/2, maxSize/2, maxSize/2));
        }

        controls.update();
        renderer.render(scene, camera);
    } else {
        requestAnimationFrame(animate);
    }
}

updateAll();
animate();
