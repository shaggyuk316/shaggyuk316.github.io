const periodicTable = [
    {symbol: "H", atomicNumber: 1, mass: 1.008}, {symbol: "He", atomicNumber: 2, mass: 4.002},
    {symbol: "Li", atomicNumber: 3, mass: 6.941}, {symbol: "Be", atomicNumber: 4, mass: 9.012},
    {symbol: "B", atomicNumber: 5, mass: 10.811}, {symbol: "C", atomicNumber: 6, mass: 12.011},
    {symbol: "N", atomicNumber: 7, mass: 14.007}, {symbol: "O", atomicNumber: 8, mass: 15.999},
    {symbol: "F", atomicNumber: 9, mass: 18.998}, {symbol: "Ne", atomicNumber: 10, mass: 20.180},
    {symbol: "Na", atomicNumber: 11, mass: 22.990}, {symbol: "Mg", atomicNumber: 12, mass: 24.305},
    {symbol: "Al", atomicNumber: 13, mass: 26.982}, {symbol: "Si", atomicNumber: 14, mass: 28.085},
    {symbol: "P", atomicNumber: 15, mass: 30.974}, {symbol: "S", atomicNumber: 16, mass: 32.06},
    {symbol: "Cl", atomicNumber: 17, mass: 35.45}, {symbol: "Ar", atomicNumber: 18, mass: 39.948},
    {symbol: "K", atomicNumber: 19, mass: 39.098}, {symbol: "Ca", atomicNumber: 20, mass: 40.078},
    {symbol: "Sc", atomicNumber: 21, mass: 44.956}, {symbol: "Ti", atomicNumber: 22, mass: 47.867},
    {symbol: "V", atomicNumber: 23, mass: 50.942}, {symbol: "Cr", atomicNumber: 24, mass: 51.996},
    {symbol: "Mn", atomicNumber: 25, mass: 54.938}, {symbol: "Fe", atomicNumber: 26, mass: 55.845},
    {symbol: "Co", atomicNumber: 27, mass: 58.933}, {symbol: "Ni", atomicNumber: 28, mass: 58.693},
    {symbol: "Cu", atomicNumber: 29, mass: 63.546}, {symbol: "Zn", atomicNumber: 30, mass: 65.38},
    {symbol: "Ga", atomicNumber: 31, mass: 69.723}, {symbol: "Ge", atomicNumber: 32, mass: 72.630},
    {symbol: "As", atomicNumber: 33, mass: 74.922}, {symbol: "Se", atomicNumber: 34, mass: 78.971},
    {symbol: "Br", atomicNumber: 35, mass: 79.904}, {symbol: "Kr", atomicNumber: 36, mass: 83.798},
    {symbol: "Rb", atomicNumber: 37, mass: 85.468}, {symbol: "Sr", atomicNumber: 38, mass: 87.62},
    {symbol: "Y", atomicNumber: 39, mass: 88.906}, {symbol: "Zr", atomicNumber: 40, mass: 91.224},
    {symbol: "Nb", atomicNumber: 41, mass: 92.906}, {symbol: "Mo", atomicNumber: 42, mass: 95.95},
    {symbol: "Tc", atomicNumber: 43, mass: 98}, {symbol: "Ru", atomicNumber: 44, mass: 101.07},
    {symbol: "Rh", atomicNumber: 45, mass: 102.91}, {symbol: "Pd", atomicNumber: 46, mass: 106.42},
    {symbol: "Ag", atomicNumber: 47, mass: 107.87}, {symbol: "Cd", atomicNumber: 48, mass: 112.41},
    {symbol: "In", atomicNumber: 49, mass: 114.82}, {symbol: "Sn", atomicNumber: 50, mass: 118.71},
    {symbol: "Sb", atomicNumber: 51, mass: 121.76}, {symbol: "Te", atomicNumber: 52, mass: 127.60},
    {symbol: "I", atomicNumber: 53, mass: 126.90}, {symbol: "Xe", atomicNumber: 54, mass: 131.29},
    {symbol: "Cs", atomicNumber: 55, mass: 132.91}, {symbol: "Ba", atomicNumber: 56, mass: 137.33},
    {symbol: "La", atomicNumber: 57, mass: 138.91}, {symbol: "Ce", atomicNumber: 58, mass: 140.12},
    {symbol: "Pr", atomicNumber: 59, mass: 140.91}, {symbol: "Nd", atomicNumber: 60, mass: 144.24},
    {symbol: "Pm", atomicNumber: 61, mass: 145}, {symbol: "Sm", atomicNumber: 62, mass: 150.36},
    {symbol: "Eu", atomicNumber: 63, mass: 151.96}, {symbol: "Gd", atomicNumber: 64, mass: 157.25},
    {symbol: "Tb", atomicNumber: 65, mass: 158.93}, {symbol: "Dy", atomicNumber: 66, mass: 162.50},
    {symbol: "Ho", atomicNumber: 67, mass: 164.93}, {symbol: "Er", atomicNumber: 68, mass: 167.26},
    {symbol: "Tm", atomicNumber: 69, mass: 168.93}, {symbol: "Yb", atomicNumber: 70, mass: 173.05},
    {symbol: "Lu", atomicNumber: 71, mass: 174.97}, {symbol: "Hf", atomicNumber: 72, mass: 178.49},
    {symbol: "Ta", atomicNumber: 73, mass: 180.95}, {symbol: "W", atomicNumber: 74, mass: 183.84},
    {symbol: "Re", atomicNumber: 75, mass: 186.21}, {symbol: "Os", atomicNumber: 76, mass: 190.23},
    {symbol: "Ir", atomicNumber: 77, mass: 192.22}, {symbol: "Pt", atomicNumber: 78, mass: 195.08},
    {symbol: "Au", atomicNumber: 79, mass: 196.97}, {symbol: "Hg", atomicNumber: 80, mass: 200.59},
    {symbol: "Tl", atomicNumber: 81, mass: 204.38}, {symbol: "Pb", atomicNumber: 82, mass: 207.2},
    {symbol: "Bi", atomicNumber: 83, mass: 208.98}, {symbol: "Po", atomicNumber: 84, mass: 209},
    {symbol: "At", atomicNumber: 85, mass: 210}, {symbol: "Rn", atomicNumber: 86, mass: 222},
    {symbol: "Fr", atomicNumber: 87, mass: 223}, {symbol: "Ra", atomicNumber: 88, mass: 226},
    {symbol: "Ac", atomicNumber: 89, mass: 227}, {symbol: "Th", atomicNumber: 90, mass: 232.04},
    {symbol: "Pa", atomicNumber: 91, mass: 231.04}, {symbol: "U", atomicNumber: 92, mass: 238.03},
    {symbol: "Np", atomicNumber: 93, mass: 237}, {symbol: "Pu", atomicNumber: 94, mass: 244},
    {symbol: "Am", atomicNumber: 95, mass: 243}, {symbol: "Cm", atomicNumber: 96, mass: 247},
    {symbol: "Bk", atomicNumber: 97, mass: 247}, {symbol: "Cf", atomicNumber: 98, mass: 251},
    {symbol: "Es", atomicNumber: 99, mass: 252}, {symbol: "Fm", atomicNumber: 100, mass: 257},
    {symbol: "Md", atomicNumber: 101, mass: 258}, {symbol: "No", atomicNumber: 102, mass: 259},
    {symbol: "Lr", atomicNumber: 103, mass: 262}, {symbol: "Rf", atomicNumber: 104, mass: 267},
    {symbol: "Db", atomicNumber: 105, mass: 268}, {symbol: "Sg", atomicNumber: 106, mass: 269},
    {symbol: "Bh", atomicNumber: 107, mass: 270}, {symbol: "Hs", atomicNumber: 108, mass: 269},
    {symbol: "Mt", atomicNumber: 109, mass: 278}, {symbol: "Ds", atomicNumber: 110, mass: 281},
    {symbol: "Rg", atomicNumber: 111, mass: 280}, {symbol: "Cn", atomicNumber: 112, mass: 285},
    {symbol: "Nh", atomicNumber: 113, mass: 286}, {symbol: "Fl", atomicNumber: 114, mass: 289},
    {symbol: "Mc", atomicNumber: 115, mass: 289}, {symbol: "Lv", atomicNumber: 116, mass: 293},
    {symbol: "Ts", atomicNumber: 117, mass: 294}, {symbol: "Og", atomicNumber: 118, mass: 294}
];

function buildPeriodicTable() {
    const table = document.getElementById("periodic-table");
    periodicTable.forEach((element, index) => {
        const btn = document.createElement("button");
        btn.className = "element";
        btn.innerHTML = `<span>${element.atomicNumber}</span>${element.symbol}`;
        btn.dataset.atomicNumber = element.atomicNumber;
        btn.dataset.mass = element.mass;
        btn.style.gridColumn = (index < 2) ? (index + 1) : ((index >= 2 && index < 18) ? (index - 1) : ((index >= 18 && index < 54) ? (index - 17) : (index - 53)));
        btn.style.gridRow = (index < 2) ? 1 : ((index >= 2 && index < 10) ? 2 : ((index >= 10 && index < 18) ? 3 : ((index >= 18 && index < 36) ? 4 : ((index >= 36 && index < 54) ? 5 : ((index >= 54 && index < 86) ? 6 : 7)))));
        btn.addEventListener("click", () => {
            localStorage.setItem("selectedElement", JSON.stringify(element));
            updateBinary();
            updateQuantspark();
            updateChaosbloom();
        });
        table.appendChild(btn);
    });
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

const binaryScene = initScene('binaryCanvas', 0x000033);
let binaryLattice = [];
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
    const z = parseFloat(document.getElementById('binaryZ').value) || element.atomicNumber;
    const mass = parseFloat(document.getElementById('binaryMass').value) || element.mass;

    binaryScene.scene.clear();
    binaryLattice = [];
    const geometry = new THREE.SphereGeometry(0.1 * z, 16, 16);
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
                const scale = 1 + sphere.soundOffset * sphere.vibration + sphere.charge;
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
    const z = parseFloat(document.getElementById('quantsparkZ').value) || element.atomicNumber;
    const mass = parseFloat(document.getElementById('quantsparkMass').value) || element.mass;

    quantsparkScene.scene.clear();
    quantsparkFlares = [];
    const geometry = new THREE.SphereGeometry(0.2 * mass, 16, 16);
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
            const scale = (soundToggle || vibrationToggle || positiveChargeToggle || negativeChargeToggle) ? 1 + Math.sin(Date.now() * 0.005 + flare.solid.vibration + flare.solid.charge) : 1;
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
    const z = parseFloat(document.getElementById('chaosbloomZ').value) || element.atomicNumber;
    const mass = parseFloat(document.getElementById('chaosbloomMass').value) || element.mass;

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
    chaosbloomWeb = new THREE.Points(geometry, new THREE.PointsMaterial({ size: 0.1 * z, vertexColors: true }));
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
