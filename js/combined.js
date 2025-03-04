const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 800 / 600, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('experimentCanvas') });
renderer.setSize(800, 600);
camera.position.set(0, 0, 25);
camera.lookAt(0, 0, 0);
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.minDistance = 5;
controls.maxDistance = 50;
controls.enablePan = true;

const maxSize = 20; // Planck-scale mapped to visible units (10^-100 m)
let binaryCubes = [], quantsparkFlares = [], chaosbloomWeb = null, firedObjects = [];
let audioContext, analyser, dataArray, isFrozen = false;
const logs = [];

function changeValue(id, delta) {
    const input = document.getElementById(id);
    let value = parseFloat(input.value) + delta;
    value = Math.max(parseFloat(input.min), Math.min(parseFloat(input.max), value));
    input.value = value.toFixed(2);
    updateAll();
}

function updateAll() {
    scene.children = [];
    binaryCubes = [];
    quantsparkFlares = [];
    chaosbloomWeb = null;
    firedObjects.forEach(obj => scene.add(obj.mesh));

    const binarySize = parseInt(document.getElementById('binarySize').value) || 5;
    const binaryColor = document.getElementById('binaryColor').value;
    const binaryDensity = document.getElementById('binaryDensityToggle').checked ? parseFloat(document.getElementById('binaryDensity').value) || 0.2 : 0.2;
    const binarySound = document.getElementById('binarySoundToggle').checked ? parseFloat(document.getElementById('binarySound').value) || 0.5 : 0;
    const binaryVibration = document.getElementById('binaryVibrationToggle').checked ? parseFloat(document.getElementById('binaryVibration').value) || 0.5 : 0;
    const binaryNetCharge = (document.getElementById('binaryPositiveChargeToggle').checked ? parseFloat(document.getElementById('binaryPositiveCharge').value) || 0.5 : 0) - 
                            (document.getElementById('binaryNegativeChargeToggle').checked ? parseFloat(document.getElementById('binaryNegativeCharge').value) || 0.5 : 0);
    const binaryGeo = new THREE.BoxGeometry(1 + binaryDensity, 1 + binaryDensity, 1 + binaryDensity);
    const binaryMat = new THREE.MeshBasicMaterial({ color: binaryColor });
    for (let i = 0; i < binarySize; i++) {
        const cube = new THREE.Mesh(binaryGeo, binaryMat);
        cube.position.set(i * 2 - (binarySize - 1), -5, 0);
        cube.sound = binarySound;
        cube.vibration = binaryVibration;
        cube.charge = binaryNetCharge;
        binaryCubes.push(cube);
        scene.add(cube);
    }

    const quantsparkCount = parseInt(document.getElementById('quantsparkCount').value) || 10;
    const quantsparkSolidColor = document.getElementById('quantsparkSolidColor').value;
    const quantsparkGasColor = document.getElementById('quantsparkGasColor').value;
    const quantsparkMagnetic = document.getElementById('quantsparkMagneticToggle').checked ? parseFloat(document.getElementById('quantsparkMagnetic').value) || 0.1 : 0;
    const quantsparkDensity = document.getElementById('quantsparkDensityToggle').checked ? parseFloat(document.getElementById('quantsparkDensity').value) || 0.2 : 0.2;
    const quantsparkSound = document.getElementById('quantsparkSoundToggle').checked ? parseFloat(document.getElementById('quantsparkSound').value) || 0.5 : 0;
    const flareSpread = parseFloat(document.getElementById('flareSpread').value) || 0.05;
    const quantsparkGeo = new THREE.SphereGeometry(0.5 + quantsparkDensity, 16, 16);
    for (let i = 0; i < quantsparkCount; i++) {
        const solid = new THREE.Mesh(quantsparkGeo, new THREE.MeshBasicMaterial({ color: quantsparkSolidColor }));
        const gas = new THREE.Mesh(quantsparkGeo, new THREE.MeshBasicMaterial({ color: quantsparkGasColor }));
        solid.position.set(Math.random() * maxSize - maxSize/2, 0, Math.random() * maxSize - maxSize/2);
        gas.position.set(Math.random() * maxSize - maxSize/2, 0, Math.random() * maxSize - maxSize/2);
        solid.velocity = new THREE.Vector3((Math.random() - 0.5) * flareSpread, (Math.random() - 0.5) * flareSpread, (Math.random() - 0.5) * flareSpread);
        gas.velocity = new THREE.Vector3((Math.random() - 0.5) * flareSpread, (Math.random() - 0.5) * flareSpread, (Math.random() - 0.5) * flareSpread);
        solid.sound = quantsparkSound;
        gas.sound = quantsparkSound;
        quantsparkFlares.push({ solid, gas });
        scene.add(solid);
        scene.add(gas);
    }

    const chaosbloomPoints = parseInt(document.getElementById('chaosbloomPoints').value) || 300;
    const chaosbloomColor1 = document.getElementById('chaosbloomColor1').value;
    const chaosbloomColor2 = document.getElementById('chaosbloomColor2').value;
    const chaosbloomGravity = document.getElementById('chaosbloomGravityToggle').checked ? parseFloat(document.getElementById('chaosbloomGravity').value) || 0.01 : 0;
    const chaosbloomDensity = document.getElementById('chaosbloomDensityToggle').checked ? parseFloat(document.getElementById('chaosbloomDensity').value) || 0.2 : 0.2;
    const chaosbloomSound = document.getElementById('chaosbloomSoundToggle').checked ? parseFloat(document.getElementById('chaosbloomSound').value) || 0.5 : 0;
    const pointFallSpeed = parseFloat(document.getElementById('pointFallSpeed').value) || 0.05;
    const chaosbloomGeo = new THREE.BufferGeometry();
    const vertices = [], colors = [], sizes = [];
    for (let i = 0; i < chaosbloomPoints; i++) {
        vertices.push(Math.random() * maxSize - maxSize/2, Math.random() * maxSize - maxSize/2, Math.random() * maxSize - maxSize/2);
        const color = Math.random() < 0.5 ? new THREE.Color(chaosbloomColor1) : new THREE.Color(chaosbloomColor2);
        colors.push(color.r, color.g, color.b);
        sizes.push(0.1 + chaosbloomDensity);
    }
    chaosbloomGeo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    chaosbloomGeo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    chaosbloomGeo.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));
    const chaosbloomMat = new THREE.PointsMaterial({ size: 0.1 + chaosbloomDensity, vertexColors: true, transparent: true, sizeAttenuation: true });
    chaosbloomWeb = new THREE.Points(chaosbloomGeo, chaosbloomMat);
    chaosbloomWeb.sound = chaosbloomSound;
    chaosbloomWeb.gravity = pointFallSpeed;
    scene.add(chaosbloomWeb);

    updateDisplayText();
}

document.getElementById('startAudio').addEventListener('click', () => {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 256;
        dataArray = new Uint8Array(analyser.frequencyBinCount);
        navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
            const source = audioContext.createMediaStreamSource(stream);
            source.connect(analyser);
        }).catch(err => console.error('Audio error:', err));
    }
});

function fireObject() {
    const type = document.getElementById('fireType').value;
    const direction = new THREE.Vector3(
        parseFloat(document.getElementById('fireX').value),
        parseFloat(document.getElementById('fireY').value),
        parseFloat(document.getElementById('fireZ').value)
    ).normalize();
    const mode = document.getElementById('fireMode').value;
    const geo = type === 'gold' ? new THREE.SphereGeometry(0.2, 16, 16) : type === 'methane' ? new THREE.TetrahedronGeometry(0.2) : new THREE.ConeGeometry(0.1, 0.5);
    const mat = new THREE.MeshBasicMaterial({ color: type === 'gold' ? '#FFD700' : type === 'methane' ? '#00FF00' : '#FF00FF' });
    const obj = new THREE.Mesh(geo, mat);
    obj.position.set(-maxSize/2, 0, 0);
    obj.velocity = direction.multiplyScalar(0.1);
    obj.mode = mode;
    obj.id = firedObjects.length + 1;
    firedObjects.push(obj);
    scene.add(obj);
}

function freezeAnimation() {
    isFrozen = !isFrozen;
    if (!isFrozen) animate();
}

function showPopup() {
    const popup = document.getElementById('popup');
    const content = document.getElementById('popupContent');
    let html = '<h3>Variables</h3><table border="1"><tr><th>Parameter</th><th>Value</th></tr>';
    document.querySelectorAll('input, select').forEach(el => {
        html += `<tr><td>${el.id}</td><td>${el.type === 'checkbox' ? el.checked : el.value}</td></tr>`;
    });
    html += '</table><h3>Objects</h3><table border="1"><tr><th>ID</th><th>Type</th><th>Position</th></tr>';
    firedObjects.forEach(obj => {
        html += `<tr><td>${obj.id}</td><td>${obj.geometry.type}</td><td>${obj.position.x.toFixed(2)}, ${obj.position.y.toFixed(2)}, ${obj.position.z.toFixed(2)}</td></tr>`;
    });
    html += '</table>';
    content.innerHTML = html;
    popup.style.display = 'block';
}

function logSettings() {
    const settings = {};
    document.querySelectorAll('input, select').forEach(el => {
        settings[el.id] = el.type === 'checkbox' ? el.checked : el.value;
    });
    logs.push({ timestamp: new Date().toISOString(), settings, objects: firedObjects.map(o => ({ id: o.id, type: o.geometry.type, position: o.position.clone() })) });
    console.log('Logged:', logs[logs.length - 1]);
}

function updateDisplayText() {
    const settings = {};
    document.querySelectorAll('input, select').forEach(el => {
        settings[el.id] = el.type === 'checkbox' ? el.checked : el.value;
    });
    document.getElementById('displayText').innerText = JSON.stringify(settings, null, 2);
}

function animate() {
    if (isFrozen) return;
    requestAnimationFrame(animate);

    let soundLevel = 0;
    if (audioContext && analyser && document.getElementById('soundMode').value === 'live') {
        analyser.getByteFrequencyData(dataArray);
        soundLevel = dataArray.reduce((a, b) => a + b, 0) / dataArray.length / 255;
    } else if (document.getElementById('soundMode').value === 'wavelength') {
        soundLevel = Math.sin(Date.now() * parseFloat(document.getElementById('waveFrequency').value) * 0.001);
    }

    binaryCubes.forEach(cube => {
        cube.scale.setScalar(1 + (cube.sound + soundLevel) * Math.sin(Date.now() * 0.001));
        cube.position.y += cube.vibration * Math.sin(Date.now() * 0.002) * 0.1;
        cube.rotation.x += cube.charge * 0.01;
        cube.rotation.y += cube.charge * 0.01;
        cube.rotation.z += cube.charge * 0.01;
        cube.position.clamp(new THREE.Vector3(-maxSize/2, -maxSize/2, -maxSize/2), new THREE.Vector3(maxSize/2, maxSize/2, maxSize/2));
    });

    quantsparkFlares.forEach(flare => {
        flare.solid.rotation.x += (flare.solid.sound + soundLevel) * 0.05;
        flare.solid.rotation.y += (flare.solid.sound + soundLevel) * 0.05;
        flare.gas.rotation.x += (flare.gas.sound + soundLevel) * 0.05;
        flare.gas.rotation.y += (flare.gas.sound + soundLevel) * 0.05;
        flare.solid.position.add(flare.solid.velocity);
        flare.gas.position.add(flare.gas.velocity);
        flare.solid.position.clamp(new THREE.Vector3(-maxSize/2, -maxSize/2, -maxSize/2), new THREE.Vector3(maxSize/2, maxSize/2, maxSize/2));
        flare.gas.position.clamp(new THREE.Vector3(-maxSize/2, -maxSize/2, -maxSize/2), new THREE.Vector3(maxSize/2, maxSize/2, maxSize/2));
    });

    if (chaosbloomWeb) {
        const positions = chaosbloomWeb.geometry.attributes.position.array;
        const colors = chaosbloomWeb.geometry.attributes.color.array;
        const sizes = chaosbloomWeb.geometry.attributes.size.array;
        for (let i = 0; i < positions.length; i += 3) {
            positions[i + 1] -= chaosbloomWeb.gravity;
            positions[i] += (chaosbloomWeb.sound + soundLevel) * Math.sin(Date.now() * 0.002) * 0.05;
            positions[i + 2] += Math.cos(Date.now() * 0.003) * 0.05;
            positions[i] = Math.max(-maxSize/2, Math.min(maxSize/2, positions[i]));
            positions[i + 1] = Math.max(-maxSize/2, Math.min(maxSize/2, positions[i + 1]));
            positions[i + 2] = Math.max(-maxSize/2, Math.min(maxSize/2, positions[i + 2]));
            const distance = camera.position.distanceTo(new THREE.Vector3(positions[i], positions[i + 1], positions[i + 2]));
            const scaleFactor = Math.min(1, maxSize / distance);
            sizes[i / 3] = (0.1 + (chaosbloomWeb.sound + soundLevel) * Math.sin(Date.now() * 0.001)) * scaleFactor;
            if (sizes[i / 3] < 0.05) sizes[i / 3] = 0;
            const density = Math.min(1, sizes[i / 3] / (0.1 + parseFloat(document.getElementById('chaosbloomDensity').value) || 0.2));
            colors[i] *= density;
            colors[i + 1] *= density;
            colors[i + 2] *= density;
        }
        chaosbloomWeb.geometry.attributes.position.needsUpdate = true;
        chaosbloomWeb.geometry.attributes.color.needsUpdate = true;
        chaosbloomWeb.geometry.attributes.size.needsUpdate = true;
        chaosbloomWeb.rotation.x += (chaosbloomWeb.sound + soundLevel) * 0.01;
        chaosbloomWeb.rotation.y += 0.01;
        chaosbloomWeb.rotation.z += 0.01;
    }

    firedObjects.forEach(obj => {
        if (obj.mode === 'moving') obj.position.add(obj.velocity);
        obj.position.clamp(new THREE.Vector3(-maxSize/2, -maxSize/2, -maxSize/2), new THREE.Vector3(maxSize/2, maxSize/2, maxSize/2));
    });

    controls.enabled = document.getElementById('controlledOrbit').checked;
    controls.update();
    renderer.render(scene, camera);
}

updateAll();
animate();
