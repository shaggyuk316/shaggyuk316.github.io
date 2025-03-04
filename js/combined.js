const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth * 0.5 / 600, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('combinedCanvas') });
renderer.setSize(window.innerWidth * 0.5, 600);
camera.position.set(0, 0, 25);
camera.lookAt(0, 0, 0);
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.minDistance = 5;
controls.maxDistance = 50;
controls.enablePan = true;

const maxSize = 20; // Planck-scale mapped boundary
let binaryCubes = [], quantsparkFlares = [], chaosbloomWeb = null, firedObjects = [];
let audioContext, analyser, dataArray, soundLevel = 0;
let isFrozen = false;
const logs = [];

function changeValue(id, delta) {
    const input = document.getElementById(id);
    let value = parseFloat(input.value) + delta;
    value = Math.max(parseFloat(input.min), Math.min(parseFloat(input.max), value));
    input.value = value.toFixed(2);
    updateAll();
}

function initAudio() {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;
    dataArray = new Uint8Array(analyser.frequencyBinCount);
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
        const source = audioContext.createMediaStreamSource(stream);
        source.connect(analyser);
    }).catch(err => console.error('Audio error:', err));
}

document.getElementById('startAudio').addEventListener('click', initAudio);

function updateAll() {
    scene.children = [];
    binaryCubes = [];
    quantsparkFlares = [];
    chaosbloomWeb = null;

    const soundMode = document.getElementById('soundMode').value;
    const waveFrequency = parseFloat(document.getElementById('waveFrequency').value);

    // Binary
    const binarySize = parseInt(document.getElementById('binarySize').value);
    const binaryColor = document.getElementById('binaryColor').value;
    const binaryDensity = document.getElementById('binaryDensityToggle').checked ? parseFloat(document.getElementById('binaryDensity').value) : 0.2;
    const binarySound = document.getElementById('binarySoundToggle').checked ? parseFloat(document.getElementById('binarySound').value) : 0;
    const binaryVibration = parseFloat(document.getElementById('cubeVibration').value);
    const binaryNetCharge = (document.getElementById('binaryPositiveChargeToggle').checked ? parseFloat(document.getElementById('binaryPositiveCharge').value) : 0) -
                            (document.getElementById('binaryNegativeChargeToggle').checked ? parseFloat(document.getElementById('binaryNegativeCharge').value) : 0);
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

    // QuantSpark
    const quantsparkCount = parseInt(document.getElementById('quantsparkCount').value);
    const quantsparkSolidColor = document.getElementById('quantsparkSolidColor').value;
    const quantsparkGasColor = document.getElementById('quantsparkGasColor').value;
    const quantsparkMagnetic = document.getElementById('quantsparkMagneticToggle').checked ? parseFloat(document.getElementById('quantsparkMagnetic').value) : 0;
    const quantsparkDensity = document.getElementById('quantsparkDensityToggle').checked ? parseFloat(document.getElementById('quantsparkDensity').value) : 0.2;
    const quantsparkSound = document.getElementById('quantsparkSoundToggle').checked ? parseFloat(document.getElementById('quantsparkSound').value) : 0;
    const flareSpread = parseFloat(document.getElementById('flareSpread').value);
    const quantsparkNetCharge = (document.getElementById('quantsparkPositiveChargeToggle').checked ? parseFloat(document.getElementById('quantsparkPositiveCharge').value) : 0) -
                                (document.getElementById('quantsparkNegativeChargeToggle').checked ? parseFloat(document.getElementById('quantsparkNegativeCharge').value) : 0);
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
        solid.charge = quantsparkNetCharge;
        gas.charge = quantsparkNetCharge;
        quantsparkFlares.push({ solid, gas });
        scene.add(solid);
        scene.add(gas);
    }

    // ChaosBloom
    const chaosbloomPoints = parseInt(document.getElementById('chaosbloomPoints').value);
    const chaosbloomColor1 = document.getElementById('chaosbloomColor1').value;
    const chaosbloomColor2 = document.getElementById('chaosbloomColor2').value;
    const chaosbloomGravity = document.getElementById('chaosbloomGravityToggle').checked ? parseFloat(document.getElementById('chaosbloomGravity').value) : 0;
    const chaosbloomDensity = document.getElementById('chaosbloomDensityToggle').checked ? parseFloat(document.getElementById('chaosbloomDensity').value) : 0.2;
    const chaosbloomSound = document.getElementById('chaosbloomSoundToggle').checked ? parseFloat(document.getElementById('chaosbloomSound').value) : 0;
    const pointFallSpeed = parseFloat(document.getElementById('pointFallSpeed').value);
    const chaosbloomNetCharge = (document.getElementById('chaosbloomPositiveChargeToggle').checked ? parseFloat(document.getElementById('chaosbloomPositiveCharge').value) : 0) -
                                (document.getElementById('chaosbloomNegativeChargeToggle').checked ? parseFloat(document.getElementById('chaosbloomNegativeCharge').value) : 0);
    const chaosbloomGeo = new THREE.BufferGeometry();
    const vertices = [], colors = [], sizes = [], ids = [];
    for (let i = 0; i < chaosbloomPoints; i++) {
        vertices.push(Math.random() * maxSize - maxSize/2, Math.random() * maxSize - maxSize/2, Math.random() * maxSize - maxSize/2);
        const color = Math.random() < 0.5 ? new THREE.Color(chaosbloomColor1) : new THREE.Color(chaosbloomColor2);
        colors.push(color.r, color.g, color.b);
        sizes.push(0.1 + chaosbloomDensity);
        ids.push(i); // Particle tracking
    }
    chaosbloomGeo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    chaosbloomGeo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    chaosbloomGeo.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));
    const chaosbloomMat = new THREE.PointsMaterial({ size: 0.1 + chaosbloomDensity, vertexColors: true, transparent: true, sizeAttenuation: true });
    chaosbloomWeb = new THREE.Points(chaosbloomGeo, chaosbloomMat);
    chaosbloomWeb.sound = chaosbloomSound;
    chaosbloomWeb.gravity = pointFallSpeed;
    chaosbloomWeb.charge = chaosbloomNetCharge;
    scene.add(chaosbloomWeb);

    firedObjects.forEach(obj => scene.add(obj.mesh)); // Re-add fired objects
    updateVariablesDisplay();
}

function fireObject() {
    const type = prompt("Enter object type (e.g., gold, methane, gamma):") || "gold";
    const direction = prompt("Enter direction (x,y,z) e.g., 1,0,0:") || "1,0,0";
    const dir = direction.split(',').map(Number);
    const isStatic = confirm("Static (OK) or Moving (Cancel)?");
    const geo = new THREE.SphereGeometry(0.5, 16, 16);
    const mat = new THREE.MeshBasicMaterial({ color: type === "gold" ? "#FFD700" : type === "methane" ? "#00FF00" : "#FF00FF" });
    const obj = new THREE.Mesh(geo, mat);
    obj.position.set(-maxSize/2, 0, 0); // Start at edge
    obj.velocity = new THREE.Vector3(...dir).normalize().multiplyScalar(isStatic ? 0 : 0.1);
    obj.type = type;
    firedObjects.push(obj);
    scene.add(obj);
    logs.push({ time: new Date().toISOString(), event: `Fired ${type}`, position: obj.position.clone(), velocity: obj.velocity.clone() });
}

function toggleFreeze() {
    isFrozen = !isFrozen;
}

function toggleChart() {
    const popup = document.getElementById('popupChart');
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
    if (popup.style.display === 'block') updateChart();
}

function updateChart() {
    const table = document.getElementById('variablesTable');
    table.innerHTML = `<tr><th>Variable</th><th>Value</th></tr>`;
    document.querySelectorAll('.control-box input, .control-box select').forEach(el => {
        table.innerHTML += `<tr><td>${el.id}</td><td>${el.type === 'checkbox' ? el.checked : el.value}</td></tr>`;
    });
}

function updateVariablesDisplay() {
    const display = document.getElementById('variablesDisplay');
    let text = "Current Settings: ";
    document.querySelectorAll('.control-box input, .control-box select').forEach(el => {
        text += `${el.id}: ${el.type === 'checkbox' ? el.checked : el.value}, `;
    });
    display.textContent = text.slice(0, -2);
}

function animate() {
    if (!isFrozen) {
        requestAnimationFrame(animate);

        soundLevel = 0;
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
            flare.solid.scale.setScalar(1 + (flare.solid.sound + soundLevel) * Math.sin(Date.now() * 0.005));
            flare.gas.scale.setScalar(1 + (flare.gas.sound + soundLevel) * Math.sin(Date.now() * 0.007));
        });

        if (chaosbloomWeb) {
            const positions = chaosbloomWeb.geometry.attributes.position.array;
            const colors = chaosbloomWeb.geometry.attributes.color.array;
            const sizes = chaosbloomWeb.geometry.attributes.size.array;
            for (let i = 0; i < positions.length; i += 3) {
                positions[i + 1] -= chaosbloomWeb.gravity;
                positions[i] += (chaosbloomWeb.sound + soundLevel) * Math.sin(Date.now() * 0.002) * 0.05;
                positions[i + 2] += chaosbloomWeb.charge * Math.cos(Date.now() * 0.003) * 0.05;
                positions[i] = Math.max(-maxSize/2, Math.min(maxSize/2, positions[i]));
                positions[i + 1] = Math.max(-maxSize/2, Math.min(maxSize/2, positions[i + 1]));
                positions[i + 2] = Math.max(-maxSize/2, Math.min(maxSize/2, positions[i + 2]));
                const distance = camera.position.distanceTo(new THREE.Vector3(positions[i], positions[i + 1], positions[i + 2]));
                const scaleFactor = Math.min(1, maxSize / distance);
                sizes[i / 3] = (0.1 + (chaosbloomWeb.sound + soundLevel) * Math.sin(Date.now() * 0.001)) * scaleFactor;
                if (sizes[i / 3] < 0.05) sizes[i / 3] = 0;
                const density = Math.min(1, sizes[i / 3] / (0.1 + parseFloat(document.getElementById('chaosbloomDensity').value)));
                colors[i] *= density;
                colors[i + 1] *= density;
                colors[i + 2] *= density;
            }
            chaosbloomWeb.geometry.attributes.position.needsUpdate = true;
            chaosbloomWeb.geometry.attributes.color.needsUpdate = true;
            chaosbloomWeb.geometry.attributes.size.needsUpdate = true;
            chaosbloomWeb.rotation.x += (chaosbloomWeb.sound + soundLevel) * 0.01;
            chaosbloomWeb.rotation.y += chaosbloomWeb.charge * 0.01;
            chaosbloomWeb.rotation.z += chaosbloomWeb.charge * 0.01;
        }

        firedObjects.forEach(obj => {
            obj.position.add(obj.velocity);
            obj.position.clamp(new THREE.Vector3(-maxSize/2, -maxSize/2, -maxSize/2), new THREE.Vector3(maxSize/2, maxSize/2, maxSize/2));
            if (obj.velocity.length() > 0) obj.rotation.x += 0.05; // Orbit effect
        });

        controls.update();
    }
    renderer.render(scene, camera);
}

updateAll();
animate();
