const periodicTable = [
    { name: "H", atomicNumber: 1, mass: 1.008 }, { name: "He", atomicNumber: 2, mass: 4.002 },
    { name: "Li", atomicNumber: 3, mass: 6.941 }, { name: "Be", atomicNumber: 4, mass: 9.012 },
    { name: "B", atomicNumber: 5, mass: 10.811 }, { name: "C", atomicNumber: 6, mass: 12.011 },
    { name: "N", atomicNumber: 7, mass: 14.007 }, { name: "O", atomicNumber: 8, mass: 15.999 },
    { name: "F", atomicNumber: 9, mass: 18.998 }, { name: "Ne", atomicNumber: 10, mass: 20.180 },
    { name: "Na", atomicNumber: 11, mass: 22.990 }, { name: "Mg", atomicNumber: 12, mass: 24.305 },
    { name: "Al", atomicNumber: 13, mass: 26.982 }, { name: "Si", atomicNumber: 14, mass: 28.085 },
    { name: "P", atomicNumber: 15, mass: 30.974 }, { name: "S", atomicNumber: 16, mass: 32.06 },
    { name: "Cl", atomicNumber: 17, mass: 35.45 }, { name: "Ar", atomicNumber: 18, mass: 39.948 },
    { name: "K", atomicNumber: 19, mass: 39.098 }, { name: "Ca", atomicNumber: 20, mass: 40.078 },
    { name: "Sc", atomicNumber: 21, mass: 44.956 }, { name: "Ti", atomicNumber: 22, mass: 47.867 },
    { name: "V", atomicNumber: 23, mass: 50.942 }, { name: "Cr", atomicNumber: 24, mass: 51.996 },
    { name: "Mn", atomicNumber: 25, mass: 54.938 }, { name: "Fe", atomicNumber: 26, mass: 55.845 },
    { name: "Co", atomicNumber: 27, mass: 58.933 }, { name: "Ni", atomicNumber: 28, mass: 58.693 },
    { name: "Cu", atomicNumber: 29, mass: 63.546 }, { name: "Zn", atomicNumber: 30, mass: 65.38 },
    { name: "Ga", atomicNumber: 31, mass: 69.723 }, { name: "Ge", atomicNumber: 32, mass: 72.630 },
    { name: "As", atomicNumber: 33, mass: 74.922 }, { name: "Se", atomicNumber: 34, mass: 78.971 },
    { name: "Br", atomicNumber: 35, mass: 79.904 }, { name: "Kr", atomicNumber: 36, mass: 83.798 },
    { name: "Rb", atomicNumber: 37, mass: 85.468 }, { name: "Sr", atomicNumber: 38, mass: 87.62 },
    { name: "Y", atomicNumber: 39, mass: 88.906 }, { name: "Zr", atomicNumber: 40, mass: 91.224 },
    { name: "Nb", atomicNumber: 41, mass: 92.906 }, { name: "Mo", atomicNumber: 42, mass: 95.95 },
    { name: "Tc", atomicNumber: 43, mass: 98 }, { name: "Ru", atomicNumber: 44, mass: 101.07 },
    { name: "Rh", atomicNumber: 45, mass: 102.91 }, { name: "Pd", atomicNumber: 46, mass: 106.42 },
    { name: "Ag", atomicNumber: 47, mass: 107.87 }, { name: "Cd", atomicNumber: 48, mass: 112.41 },
    { name: "In", atomicNumber: 49, mass: 114.82 }, { name: "Sn", atomicNumber: 50, mass: 118.71 },
    { name: "Sb", atomicNumber: 51, mass: 121.76 }, { name: "Te", atomicNumber: 52, mass: 127.60 },
    { name: "I", atomicNumber: 53, mass: 126.90 }, { name: "Xe", atomicNumber: 54, mass: 131.29 },
    { name: "Cs", atomicNumber: 55, mass: 132.91 }, { name: "Ba", atomicNumber: 56, mass: 137.33 },
    { name: "La", atomicNumber: 57, mass: 138.91 }, { name: "Ce", atomicNumber: 58, mass: 140.12 },
    { name: "Pr", atomicNumber: 59, mass: 140.91 }, { name: "Nd", atomicNumber: 60, mass: 144.24 },
    { name: "Pm", atomicNumber: 61, mass: 145 }, { name: "Sm", atomicNumber: 62, mass: 150.36 },
    { name: "Eu", atomicNumber: 63, mass: 151.96 }, { name: "Gd", atomicNumber: 64, mass: 157.25 },
    { name: "Tb", atomicNumber: 65, mass: 158.93 }, { name: "Dy", atomicNumber: 66, mass: 162.50 },
    { name: "Ho", atomicNumber: 67, mass: 164.93 }, { name: "Er", atomicNumber: 68, mass: 167.26 },
    { name: "Tm", atomicNumber: 69, mass: 168.93 }, { name: "Yb", atomicNumber: 70, mass: 173.05 },
    { name: "Lu", atomicNumber: 71, mass: 174.97 }, { name: "Hf", atomicNumber: 72, mass: 178.49 },
    { name: "Ta", atomicNumber: 73, mass: 180.95 }, { name: "W", atomicNumber: 74, mass: 183.84 },
    { name: "Re", atomicNumber: 75, mass: 186.21 }, { name: "Os", atomicNumber: 76, mass: 190.23 },
    { name: "Ir", atomicNumber: 77, mass: 192.22 }, { name: "Pt", atomicNumber: 78, mass: 195.08 },
    { name: "Au", atomicNumber: 79, mass: 196.97 }, { name: "Hg", atomicNumber: 80, mass: 200.59 },
    { name: "Tl", atomicNumber: 81, mass: 204.38 }, { name: "Pb", atomicNumber: 82, mass: 207.2 },
    { name: "Bi", atomicNumber: 83, mass: 208.98 }, { name: "Po", atomicNumber: 84, mass: 209 },
    { name: "At", atomicNumber: 85, mass: 210 }, { name: "Rn", atomicNumber: 86, mass: 222 },
    { name: "Fr", atomicNumber: 87, mass: 223 }, { name: "Ra", atomicNumber: 88, mass: 226 },
    { name: "Ac", atomicNumber: 89, mass: 227 }, { name: "Th", atomicNumber: 90, mass: 232.04 },
    { name: "Pa", atomicNumber: 91, mass: 231.04 }, { name: "U", atomicNumber: 92, mass: 238.03 },
    { name: "Np", atomicNumber: 93, mass: 237 }, { name: "Pu", atomicNumber: 94, mass: 244 },
    { name: "Am", atomicNumber: 95, mass: 243 }, { name: "Cm", atomicNumber: 96, mass: 247 },
    { name: "Bk", atomicNumber: 97, mass: 247 }, { name: "Cf", atomicNumber: 98, mass: 251 },
    { name: "Es", atomicNumber: 99, mass: 252 }, { name: "Fm", atomicNumber: 100, mass: 257 },
    { name: "Md", atomicNumber: 101, mass: 258 }, { name: "No", atomicNumber: 102, mass: 259 },
    { name: "Lr", atomicNumber: 103, mass: 262 }, { name: "Rf", atomicNumber: 104, mass: 267 },
    { name: "Db", atomicNumber: 105, mass: 268 }, { name: "Sg", atomicNumber: 106, mass: 269 },
    { name: "Bh", atomicNumber: 107, mass: 270 }, { name: "Hs", atomicNumber: 108, mass: 269 },
    { name: "Mt", atomicNumber: 109, mass: 278 }, { name: "Ds", atomicNumber: 110, mass: 281 },
    { name: "Rg", atomicNumber: 111, mass: 280 }, { name: "Cn", atomicNumber: 112, mass: 285 },
    { name: "Nh", atomicNumber: 113, mass: 286 }, { name: "Fl", atomicNumber: 114, mass: 289 },
    { name: "Mc", atomicNumber: 115, mass: 289 }, { name: "Lv", atomicNumber: 116, mass: 293 },
    { name: "Ts", atomicNumber: 117, mass: 294 }, { name: "Og", atomicNumber: 118, mass: 294 }
];

function buildPeriodicTable() {
    const table = document.getElementById("periodic-table");
    periodicTable.forEach((element, index) => {
        const btn = document.createElement("button");
        btn.className = "element";
        btn.innerHTML = `<span>${element.atomicNumber}</span>${element.name}`;
        btn.dataset.atomicNumber = element.atomicNumber;
        btn.dataset.mass = element.mass;
        btn.style.gridColumn = (index < 2) ? (index + 1) : ((index >= 2 && index < 18) ? (index - 1) : ((index >= 18 && index < 54) ? (index - 17) : (index - 53)));
        btn.style.gridRow = (index < 2) ? 1 : ((index >= 2 && index < 10) ? 2 : ((index >= 10 && index < 18) ? 3 : ((index >= 18 && index < 36) ? 4 : ((index >= 36 && index < 54) ? 5 : ((index >= 54 && index < 86) ? 6 : 7)))));
        btn.addEventListener("click", () => {
            localStorage.setItem("selectedElement", JSON.stringify(element));
            updateScenes();
        });
        table.appendChild(btn);
    });
}

let binaryScene, quantsparkScene, chaosbloomScene;
function initScenes() {
    const element = JSON.parse(localStorage.getItem("selectedElement") || JSON.stringify(periodicTable[0]));

    binaryScene = initScene('binaryCanvas', 0x000033);
    quantsparkScene = initScene('quantsparkCanvas', 0x330000);
    chaosbloomScene = initScene('chaosbloomCanvas', 0x000000);

    if (!binaryScene || !quantsparkScene || !chaosbloomScene) {
        console.error("One or more scenes failed to initialize");
        return;
    }

    const lattice = [];
    const size = Math.min(Math.ceil(element.mass), 10);
    for (let x = -size / 2; x <= size / 2; x += 0.5) {
        for (let y = -size / 2; y <= size / 2; y += 0.5) {
            for (let z = -size / 2; z <= size / 2; z += 0.5) {
                const sphere = new THREE.Mesh(
                    new THREE.SphereGeometry(0.1, 16, 16),
                    new THREE.MeshBasicMaterial({ color: 0x0000ff })
                );
                sphere.position.set(x, y, z);
                lattice.push(sphere);
                binaryScene.scene.add(sphere);
            }
        }
    }

    const flares = [];
    const flareCount = Math.min(element.atomicNumber * 2, 20);
    for (let i = 0; i < flareCount; i++) {
        const solid = new THREE.Mesh(
            new THREE.SphereGeometry(0.2, 16, 16),
            new THREE.MeshBasicMaterial({ color: 0x4b0082 })
        );
        solid.position.set(Math.random() * 4 - 2, Math.random() * 4 - 2, Math.random() * 4 - 2);
        quantsparkScene.scene.add(solid);
        flares.push({ solid, velocity: new THREE.Vector3(Math.random() * 0.1 - 0.05, Math.random() * 0.1 - 0.05, Math.random() * 0.1 - 0.05) });
    }

    const points = Math.min(Math.ceil(element.mass * 100), 1000);
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const colors = [];
    const positions = [];
    for (let i = 0; i < points; i++) {
        const x = (Math.random() - 0.5) * 10;
        const y = (Math.random() - 0.5) * 10;
        const z = (Math.random() - 0.5) * 10;
        vertices.push(x, y, z);
        colors.push(Math.random(), Math.random(), Math.random());
        positions.push(new THREE.Vector3(x, y, z));
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    const material = new THREE.PointsMaterial({ size: 0.1, vertexColors: true });
    const web = new THREE.Points(geometry, material);
    web.positions = positions;
    chaosbloomScene.scene.add(web);

    let flipTime = 0;
    function animate() {
        requestAnimationFrame(animate);
        flipTime += 0.05;
        if (flipTime > 5) {
            lattice.forEach(s => s.material.color.set(0xffff00));
            flipTime = 0;
        }
        flares.forEach(f => {
            f.solid.position.add(f.velocity);
            if (f.solid.position.length() > 4) f.velocity.negate();
        });
        const posArray = web.geometry.attributes.position.array;
        for (let i = 0; i < web.positions.length; i++) {
            web.positions[i].x += Math.sin(Date.now() * 0.001 + i) * 0.01;
            posArray[i * 3] = web.positions[i].x;
        }
        web.geometry.attributes.position.needsUpdate = true;
        web.rotation.x += 0.01;
        web.rotation.y += 0.01;

        binaryScene.controls.update();
        quantsparkScene.controls.update();
        chaosbloomScene.controls.update();
        binaryScene.renderer.render(binaryScene.scene, binaryScene.camera);
        quantsparkScene.renderer.render(quantsparkScene.scene, quantsparkScene.camera);
        chaosbloomScene.renderer.render(chaosbloomScene.scene, chaosbloomScene.camera);
    }
    animate();
}

function initScene(canvasId, sceneColor) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) {
        console.error(`Canvas with ID ${canvasId} not found`);
        return null;
    }
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(sceneColor);
    const camera = new THREE.PerspectiveCamera(75, 600 / 400, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(600, 400);
    camera.position.z = 20;
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    return { scene, camera, renderer, controls };
}

function updateBinary() {
    if (!binaryScene) return;
    const element = JSON.parse(localStorage.getItem("selectedElement") || JSON.stringify(periodicTable[0]));
    const size = parseInt(document.getElementById('binarySize').value) || Math.min(Math.ceil(element.mass), 10);
    const color = document.getElementById('binaryColor').value || '#0000FF';
    const soundToggle = document.getElementById('binarySoundToggle').checked;
    const soundAmplitude = soundToggle ? parseFloat(document.getElementById('binarySound').value) || 0.5 : 0;
    const densityToggle = document.getElementById('binaryDensityToggle').checked;
    const densityVariation = densityToggle ? parseFloat(document.getElementById('binaryDensity').value) || 0.2 : 0;
    const vibrationToggle = document.getElementById('binaryVibrationToggle').checked;
    const vibrationScale = vibrationToggle ? parseFloat(document.getElementById('binaryVibration').value) || 0.5 : 0;
    const positiveChargeToggle = document.getElementById('binaryPositiveChargeToggle').checked;
    const positiveCharge = positiveChargeToggle ? parseFloat(document.getElementById('binaryPositiveCharge').value) || 0.5 : 0;
    const negativeChargeToggle = document.getElementById('binaryNegativeChargeToggle').checked;
    const negativeCharge = negativeChargeToggle ? parseFloat(document.getElementById('binaryNegativeCharge').value) || 0.5 : 0;

    binaryScene.scene.clear();
    binaryLattice = [];
    const geometry = new THREE.SphereGeometry(0.1 * element.atomicNumber, 16, 16);
    const baseDensity = 0.1;
    const k_v = 1e-50, k_q = 1e-50, f_s = 1e95;
    const netCharge = positiveCharge - negativeCharge;
    for (let x = -size / 2; x <= size / 2; x += 0.5) {
        for (let y = -size / 2; y <= size / 2; y += 0.5) {
            for (let z = -size / 2; z <= size / 2; z += 0.5) {
                const r = Math.sqrt(x * x + y * y + z * z);
                const density = baseDensity + densityVariation * Math.exp(-r * r / 4);
                const material = new THREE.MeshBasicMaterial({ color });
                const sphere = new THREE.Mesh(geometry, material);
                sphere.position.set(x, y, z);
                sphere.soundOffset = Math.sin(2 * Math.PI * (x + y + z));
                sphere.density = density;
                sphere.vibration = k_v * soundAmplitude * f_s * Math.sqrt(density) * vibrationScale;
                sphere.charge = k_q * netCharge;
                binaryLattice.push(sphere);
                binaryScene.scene.add(sphere);
            }
        }
    }
    binaryLattice.soundAmplitude = soundAmplitude;
    binaryLattice.vibrationScale = vibrationScale;
    binaryLattice.netCharge = netCharge;

    let flipTime = 0;
    function animate() {
        requestAnimationFrame(animate);
        flipTime += 0.05 * (1 + binaryLattice.soundAmplitude * binaryLattice[0].density * binaryLattice.vibrationScale + binaryLattice.netCharge);
        if (flipTime > 5) {
            binaryLattice.forEach(sphere => {
                sphere.material.color.set(0xffff00);
                const scale = 2 + sphere.soundOffset * sphere.vibration + sphere.charge;
                sphere.scale.set(scale, scale, scale);
            });
            flipTime = 0;
        } else if (!soundToggle && !vibrationToggle && !positiveChargeToggle && !negativeChargeToggle) {
            binaryLattice.forEach(sphere => sphere.scale.set(1, 1, 1));
        }
        binaryScene.controls.update();
        binaryScene.renderer.render(binaryScene.scene, binaryScene.camera);
    }
    animate();
}

const quantsparkScene = initScene('quantsparkCanvas', 0x330000);
let quantsparkFlares = [];
function updateQuantspark() {
    if (!quantsparkScene) return;
    const element = JSON.parse(localStorage.getItem("selectedElement") || JSON.stringify(periodicTable[0]));
    const count = parseInt(document.getElementById('quantsparkCount').value) || Math.min(element.atomicNumber * 2, 20);
    const solidColor = document.getElementById('quantsparkSolidColor').value || '#4B0082';
    const gasColor = document.getElementById('quantsparkGasColor').value || '#FF0000';
    const magneticToggle = document.getElementById('quantsparkMagneticToggle').checked;
    const magneticStrength = magneticToggle ? parseFloat(document.getElementById('quantsparkMagnetic').value) || 0.1 : 0;
    const soundToggle = document.getElementById('quantsparkSoundToggle').checked;
    const soundAmplitude = soundToggle ? parseFloat(document.getElementById('quantsparkSound').value) || 0.5 : 0;
    const densityToggle = document.getElementById('quantsparkDensityToggle').checked;
    const densityVariation = densityToggle ? parseFloat(document.getElementById('quantsparkDensity').value) || 0.2 : 0;
    const vibrationToggle = document.getElementById('quantsparkVibrationToggle').checked;
    const vibrationScale = vibrationToggle ? parseFloat(document.getElementById('quantsparkVibration').value) || 0.5 : 0;
    const positiveChargeToggle = document.getElementById('quantsparkPositiveChargeToggle').checked;
    const positiveCharge = positiveChargeToggle ? parseFloat(document.getElementById('quantsparkPositiveCharge').value) || 0.5 : 0;
    const negativeChargeToggle = document.getElementById('quantsparkNegativeChargeToggle').checked;
    const negativeCharge = negativeChargeToggle ? parseFloat(document.getElementById('quantsparkNegativeCharge').value) || 0.5 : 0;

    quantsparkScene.scene.clear();
    quantsparkFlares = [];
    const geometry = new THREE.SphereGeometry(0.2 * element.mass, 16, 16);
    const baseDensity = 0.1;
    const k_v = 1e-50, k_q = 1e-50, f_s = 1e95;
    const netCharge = positiveCharge - negativeCharge;
    for (let i = 0; i < count; i++) {
        const solidMaterial = new THREE.MeshBasicMaterial({ color: solidColor });
        const gasMaterial = new THREE.MeshBasicMaterial({ color: gasColor });
        const solid = new THREE.Mesh(geometry, solidMaterial);
        const gas = new THREE.Mesh(geometry, gasMaterial);
        solid.position.set(Math.random() * 4 - 2, Math.random() * 4 - 2, Math.random() * 4 - 2);
        gas.position.set(Math.random() * 4 - 2, Math.random() * 4 - 2, Math.random() * 4 - 2);
        solid.velocity = new THREE.Vector3(Math.random() * 0.1 - 0.05, Math.random() * 0.1 - 0.05, Math.random() * 0.1 - 0.05);
        gas.velocity = new THREE.Vector3(Math.random() * 0.1 - 0.05, Math.random() * 0.1 - 0.05, Math.random() * 0.1 - 0.05);
        const r = solid.position.length();
        const density = baseDensity + densityVariation * Math.sin(r);
        solid.density = density;
        gas.density = density;
        solid.vibration = k_v * soundAmplitude * f_s * Math.sqrt(density) * vibrationScale;
        gas.vibration = solid.vibration;
        solid.charge = k_q * netCharge;
        gas.charge = k_q * netCharge;
        quantsparkFlares.push({ solid, gas });
        quantsparkScene.scene.add(solid, gas);
    }
    quantsparkFlares.magneticStrength = magneticStrength;
    quantsparkFlares.soundAmplitude = soundAmplitude;
    quantsparkFlares.vibrationScale = vibrationScale;
    quantsparkFlares.netCharge = netCharge;

    function animate() {
        requestAnimationFrame(animate);
        const magneticField = new THREE.Vector3(0, 0, quantsparkFlares.magneticStrength);
        quantsparkFlares.forEach(flare => {
            const soundEnergy = quantsparkFlares.soundAmplitude * Math.sin(Date.now() * 0.001) * flare.solid.density * flare.solid.vibration;
            const chargeForce = flare.solid.charge * 0.1;
            const solidForce = magneticToggle ? flare.solid.velocity.clone().cross(magneticField).multiplyScalar(0.01 + soundEnergy + chargeForce) : new THREE.Vector3();
            const gasForce = magneticToggle ? flare.gas.velocity.clone().cross(magneticField).multiplyScalar(0.01 + soundEnergy + chargeForce) : new THREE.Vector3();
            flare.solid.velocity.add(solidForce);
            flare.gas.velocity.add(gasForce);
            flare.solid.position.add(flare.solid.velocity);
            flare.gas.position.add(flare.gas.velocity);
            flare.solid.position.clamp(new THREE.Vector3(-4, -4, -4), new THREE.Vector3(4, 4, 4));
            flare.gas.position.clamp(new THREE.Vector3(-4, -4, -4), new THREE.Vector3(4, 4, 4));
            const scale = soundToggle || vibrationToggle || positiveChargeToggle || negativeChargeToggle ? 1 + Math.sin(Date.now() * 0.005 + flare.solid.vibration + flare.solid.charge) : 1;
            flare.solid.scale.set(scale, scale, scale);
            flare.gas.scale.set(scale, scale, scale);
        });
        quantsparkScene.controls.update();
        quantsparkScene.renderer.render(quantsparkScene.scene, quantsparkScene.camera);
    }
    animate();
}

const chaosbloomScene = initScene('chaosbloomCanvas', 0x000000);
let chaosbloomWeb = null;
function updateChaosbloom() {
    if (!chaosbloomScene) return;
    const element = JSON.parse(localStorage.getItem("selectedElement") || JSON.stringify(periodicTable[0]));
    const points = parseInt(document.getElementById('chaosbloomPoints').value) || Math.min(Math.ceil(element.mass * 100), 1000);
    const color1 = document.getElementById('chaosbloomColor1').value || '#0000FF';
    const color2 = document.getElementById('chaosbloomColor2').value || '#FF0000';
    const gravityToggle = document.getElementById('chaosbloomGravityToggle').checked;
    const gravityStrength = gravityToggle ? parseFloat(document.getElementById('chaosbloomGravity').value) || 0.01 : 0;
    const soundToggle = document.getElementById('chaosbloomSoundToggle').checked;
    const soundAmplitude = soundToggle ? parseFloat(document.getElementById('chaosbloomSound').value) || 0.5 : 0;
    const densityToggle = document.getElementById('chaosbloomDensityToggle').checked;
    const densityVariation = densityToggle ? parseFloat(document.getElementById('chaosbloomDensity').value) || 0.2 : 0;
    const vibrationToggle = document.getElementById('chaosbloomVibrationToggle').checked;
    const vibrationScale = vibrationToggle ? parseFloat(document.getElementById('chaosbloomVibration').value) || 0.5 : 0;
    const positiveChargeToggle = document.getElementById('chaosbloomPositiveChargeToggle').checked;
    const positiveCharge = positiveChargeToggle ? parseFloat(document.getElementById('chaosbloomPositiveCharge').value) || 0.5 : 0;
    const negativeChargeToggle = document.getElementById('chaosbloomNegativeChargeToggle').checked;
    const negativeCharge = negativeChargeToggle ? parseFloat(document.getElementById('chaosbloomNegativeCharge').value) || 0.5 : 0;

    chaosbloomScene.scene.clear();
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const colors = [];
    const positions = [];
    const baseDensity = 0.1;
    const k_v = 1e-50, k_q = 1e-50, f_s = 1e95;
    const netCharge = positiveCharge - negativeCharge;
    for (let i = 0; i < points; i++) {
        const x = (Math.random() - 0.5) * 10;
        const y = (Math.random() - 0.5) * 10;
        const z = (Math.random() - 0.5) * 10;
        const r = Math.sqrt(x * x + y * y + z * z);
        const density = baseDensity + densityVariation * r;
        vertices.push(x, y, z);
        const color = Math.random() < 0.5 ? new THREE.Color(color1) : new THREE.Color(color2);
        colors.push(color.r, color.g, color.b);
        const pos = new THREE.Vector3(x, y, z);
        pos.density = density;
        pos.vibration = k_v * soundAmplitude * f_s * Math.sqrt(density) * vibrationScale;
        pos.charge = k_q * netCharge;
        positions.push(pos);
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    chaosbloomWeb = new THREE.Points(geometry, new THREE.PointsMaterial({ size: 0.1 * element.atomicNumber, vertexColors: true }));
    chaosbloomWeb.positions = positions;
    chaosbloomWeb.gravityStrength = gravityStrength;
    chaosbloomWeb.soundAmplitude = soundAmplitude;
    chaosbloomWeb.vibrationScale = vibrationScale;
    chaosbloomWeb.netCharge = netCharge;
    chaosbloomScene.scene.add(chaosbloomWeb);

    function animate() {
        requestAnimationFrame(animate);
        const posArray = chaosbloomWeb.geometry.attributes.position.array;
        for (let i = 0; i < chaosbloomWeb.positions.length; i++) {
            const p = chaosbloomWeb.positions[i];
            if (gravityToggle || soundToggle || vibrationToggle || positiveChargeToggle || negativeChargeToggle) {
                p.x += Math.sin(Date.now() * 0.001 + i) * 0.02 * chaosbloomWeb.vibrationScale;
                p.y += Math.cos(Date.now() * 0.001 + i) * 0.02 * chaosbloomWeb.soundAmplitude;
                p.z += Math.sin(Date.now() * 0.002 + i) * 0.02 * chaosbloomWeb.netCharge;
                p.clamp(new THREE.Vector3(-10, -10, -10), new THREE.Vector3(10, 10, 10));
            }
            posArray[i * 3] = p.x;
            posArray[i * 3 + 1] = p.y;
            posArray[i * 3 + 2] = p.z;
        }
        chaosbloomWeb.geometry.attributes.position.needsUpdate = true;
        chaosbloomWeb.rotation.x += 0.01;
        chaosbloomWeb.rotation.y += 0.01;
        chaosbloomScene.controls.update();
        chaosbloomScene.renderer.render(chaosbloomScene.scene, chaosbloomScene.camera);
    }
    animate();
}

document.addEventListener("DOMContentLoaded", () => {
    buildPeriodicTable();
    if (binaryScene) updateBinary();
    if (quantsparkScene) updateQuantspark();
    if (chaosbloomScene) updateChaosbloom();
});
