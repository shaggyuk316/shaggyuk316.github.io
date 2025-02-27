// Periodic Table Data
const periodicTable = [
    {symbol: "H", z: 1, mass: 1.008}, {symbol: "He", z: 2, mass: 4.002}, {symbol: "Li", z: 3, mass: 6.941},
    {symbol: "Be", z: 4, mass: 9.012}, {symbol: "B", z: 5, mass: 10.811}, {symbol: "C", z: 6, mass: 12.011},
    {symbol: "N", z: 7, mass: 14.007}, {symbol: "O", z: 8, mass: 15.999}, {symbol: "F", z: 9, mass: 18.998},
    {symbol: "Ne", z: 10, mass: 20.180}, {symbol: "Na", z: 11, mass: 22.990}, {symbol: "Mg", z: 12, mass: 24.305},
    {symbol: "Al", z: 13, mass: 26.982}, {symbol: "Si", z: 14, mass: 28.085}, {symbol: "P", z: 15, mass: 30.974},
    {symbol: "S", z: 16, mass: 32.06}, {symbol: "Cl", z: 17, mass: 35.45}, {symbol: "Ar", z: 18, mass: 39.948},
    {symbol: "K", z: 19, mass: 39.098}, {symbol: "Ca", z: 20, mass: 40.078}, {symbol: "Sc", z: 21, mass: 44.956},
    {symbol: "Ti", z: 22, mass: 47.867}, {symbol: "V", z: 23, mass: 50.942}, {symbol: "Cr", z: 24, mass: 51.996},
    {symbol: "Mn", z: 25, mass: 54.938}, {symbol: "Fe", z: 26, mass: 55.845}, {symbol: "Co", z: 27, mass: 58.933},
    {symbol: "Ni", z: 28, mass: 58.693}, {symbol: "Cu", z: 29, mass: 63.546}, {symbol: "Zn", z: 30, mass: 65.38},
    {symbol: "Ga", z: 31, mass: 69.723}, {symbol: "Ge", z: 32, mass: 72.630}, {symbol: "As", z: 33, mass: 74.922},
    {symbol: "Se", z: 34, mass: 78.971}, {symbol: "Br", z: 35, mass: 79.904}, {symbol: "Kr", z: 36, mass: 83.798},
    {symbol: "Rb", z: 37, mass: 85.468}, {symbol: "Sr", z: 38, mass: 87.62}, {symbol: "Y", z: 39, mass: 88.906},
    {symbol: "Zr", z: 40, mass: 91.224}, {symbol: "Nb", z: 41, mass: 92.906}, {symbol: "Mo", z: 42, mass: 95.95},
    {symbol: "Tc", z: 43, mass: 98}, {symbol: "Ru", z: 44, mass: 101.07}, {symbol: "Rh", z: 45, mass: 102.91},
    {symbol: "Pd", z: 46, mass: 106.42}, {symbol: "Ag", z: 47, mass: 107.87}, {symbol: "Cd", z: 48, mass: 112.41},
    {symbol: "In", z: 49, mass: 114.82}, {symbol: "Sn", z: 50, mass: 118.71}, {symbol: "Sb", z: 51, mass: 121.76},
    {symbol: "Te", z: 52, mass: 127.60}, {symbol: "I", z: 53, mass: 126.90}, {symbol: "Xe", z: 54, mass: 131.29},
    {symbol: "Cs", z: 55, mass: 132.91}, {symbol: "Ba", z: 56, mass: 137.33}, {symbol: "La", z: 57, mass: 138.91},
    {symbol: "Ce", z: 58, mass: 140.12}, {symbol: "Pr", z: 59, mass: 140.91}, {symbol: "Nd", z: 60, mass: 144.24},
    {symbol: "Pm", z: 61, mass: 145}, {symbol: "Sm", z: 62, mass: 150.36}, {symbol: "Eu", z: 63, mass: 151.96},
    {symbol: "Gd", z: 64, mass: 157.25}, {symbol: "Tb", z: 65, mass: 158.93}, {symbol: "Dy", z: 66, mass: 162.50},
    {symbol: "Ho", z: 67, mass: 164.93}, {symbol: "Er", z: 68, mass: 167.26}, {symbol: "Tm", z: 69, mass: 168.93},
    {symbol: "Yb", z: 70, mass: 173.05}, {symbol: "Lu", z: 71, mass: 174.97}, {symbol: "Hf", z: 72, mass: 178.49},
    {symbol: "Ta", z: 73, mass: 180.95}, {symbol: "W", z: 74, mass: 183.84}, {symbol: "Re", z: 75, mass: 186.21},
    {symbol: "Os", z: 76, mass: 190.23}, {symbol: "Ir", z: 77, mass: 192.22}, {symbol: "Pt", z: 78, mass: 195.08},
    {symbol: "Au", z: 79, mass: 196.97}, {symbol: "Hg", z: 80, mass: 200.59}, {symbol: "Tl", z: 81, mass: 204.38},
    {symbol: "Pb", z: 82, mass: 207.2}, {symbol: "Bi", z: 83, mass: 208.98}, {symbol: "Po", z: 84, mass: 209},
    {symbol: "At", z: 85, mass: 210}, {symbol: "Rn", z: 86, mass: 222}, {symbol: "Fr", z: 87, mass: 223},
    {symbol: "Ra", z: 88, mass: 226}, {symbol: "Ac", z: 89, mass: 227}, {symbol: "Th", z: 90, mass: 232.04},
    {symbol: "Pa", z: 91, mass: 231.04}, {symbol: "U", z: 92, mass: 238.03}, {symbol: "Np", z: 93, mass: 237},
    {symbol: "Pu", z: 94, mass: 244}, {symbol: "Am", z: 95, mass: 243}, {symbol: "Cm", z: 96, mass: 247},
    {symbol: "Bk", z: 97, mass: 247}, {symbol: "Cf", z: 98, mass: 251}, {symbol: "Es", z: 99, mass: 252},
    {symbol: "Fm", z: 100, mass: 257}, {symbol: "Md", z: 101, mass: 258}, {symbol: "No", z: 102, mass: 259},
    {symbol: "Lr", z: 103, mass: 262}, {symbol: "Rf", z: 104, mass: 267}, {symbol: "Db", z: 105, mass: 268},
    {symbol: "Sg", z: 106, mass: 269}, {symbol: "Bh", z: 107, mass: 270}, {symbol: "Hs", z: 108, mass: 269},
    {symbol: "Mt", z: 109, mass: 278}, {symbol: "Ds", z: 110, mass: 281}, {symbol: "Rg", z: 111, mass: 280},
    {symbol: "Cn", z: 112, mass: 285}, {symbol: "Nh", z: 113, mass: 286}, {symbol: "Fl", z: 114, mass: 289},
    {symbol: "Mc", z: 115, mass: 289}, {symbol: "Lv", z: 116, mass: 293}, {symbol: "Ts", z: 117, mass: 294},
    {symbol: "Og", z: 118, mass: 294}
];

// Build Periodic Table
function buildPeriodicTable() {
    const table = document.getElementById("periodic-table");
    periodicTable.forEach((el, i) => {
        const btn = document.createElement("button");
        btn.className = "element";
        btn.innerHTML = `<span>${el.z}</span>${el.symbol}`;
        btn.dataset.z = el.z;
        btn.dataset.mass = el.mass;
        btn.style.gridColumn = i < 2 ? i + 1 : (i < 18 ? i - 1 : (i < 54 ? i - 17 : i - 53));
        btn.style.gridRow = i < 2 ? 1 : (i < 10 ? 2 : (i < 18 ? 3 : (i < 36 ? 4 : (i < 54 ? 5 : (i < 86 ? 6 : 7)))));
        btn.addEventListener("click", () => {
            localStorage.setItem("selectedElement", JSON.stringify(el));
            updateAll();
        });
        table.appendChild(btn);
    });
}

// Scene Setup
function initScene(id, bgColor) {
    const canvas = document.getElementById(id);
    if (!canvas) return null;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(bgColor);
    const camera = new THREE.PerspectiveCamera(75, 600 / 400, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(600, 400);
    camera.position.z = 20;
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    return { scene, camera, renderer, controls };
}

// Binary Phase
let binaryScene = initScene("binaryCanvas", 0x000033);
let binaryLattice = [];
function updateBinary() {
    if (!binaryScene) return;
    const el = JSON.parse(localStorage.getItem("selectedElement") || JSON.stringify(periodicTable[0]));
    const size = parseFloat(document.getElementById("binarySize").value) || 5;
    const color = document.getElementById("binaryColor").value || "#0000FF";
    const soundOn = document.getElementById("binarySoundToggle").checked;
    const sound = soundOn ? parseFloat(document.getElementById("binarySound").value) || 0.5 : 0;
    const densityOn = document.getElementById("binaryDensityToggle").checked;
    const density = densityOn ? parseFloat(document.getElementById("binaryDensity").value) || 0.2 : 0;
    const vibOn = document.getElementById("binaryVibrationToggle").checked;
    const vib = vibOn ? parseFloat(document.getElementById("binaryVibration").value) || 0.5 : 0;
    const posChargeOn = document.getElementById("binaryPositiveChargeToggle").checked;
    const posCharge = posChargeOn ? parseFloat(document.getElementById("binaryPositiveCharge").value) || 0.5 : 0;
    const negChargeOn = document.getElementById("binaryNegativeChargeToggle").checked;
    const negCharge = negChargeOn ? parseFloat(document.getElementById("binaryNegativeCharge").value) || 0.5 : 0;
    const z = parseFloat(document.getElementById("binaryZ").value) || el.z;
    const mass = parseFloat(document.getElementById("binaryMass").value) || el.mass;

    binaryScene.scene.clear();
    binaryLattice = [];
    const geom = new THREE.SphereGeometry(0.1 * z, 16, 16);
    const k_v = 1e-50, k_q = 1e-50, f_s = 1e95;
    const charge = posCharge - negCharge;

    for (let x = -size / 2; x <= size / 2; x += 0.5) {
        for (let y = -size / 2; y <= size / 2; y += 0.5) {
            for (let z = -size / 2; z <= size / 2; z += 0.5) {
                const r = Math.sqrt(x * x + y * y + z * z);
                const d = 0.1 + density * Math.exp(-r * r / 4);
                const mat = new THREE.MeshBasicMaterial({ color });
                const sphere = new THREE.Mesh(geom, mat);
                sphere.position.set(x, y, z);
                sphere.soundOffset = Math.sin(2 * Math.PI * (x + y + z));
                sphere.density = d;
                sphere.vibration = k_v * sound * f_s * Math.sqrt(d) * vib;
                sphere.charge = k_q * charge;
                binaryLattice.push(sphere);
                binaryScene.scene.add(sphere);
            }
        }
    }

    let flipTime = 0;
    function animate() {
        requestAnimationFrame(animate);
        flipTime += 0.05 * (1 + sound * binaryLattice[0].density * vib + charge);
        if (flipTime > 5) {
            binaryLattice.forEach(s => {
                s.material.color.set(0xffff00);
                const scale = 1 + s.soundOffset * s.vibration + s.charge;
                s.scale.set(scale, scale, scale);
            });
            flipTime = 0;
        } else if (!soundOn && !vibOn && !posChargeOn && !negChargeOn) {
            binaryLattice.forEach(s => s.scale.set(1, 1, 1));
        }
        binaryScene.controls.update();
        binaryScene.renderer.render(binaryScene.scene, binaryScene.camera);
    }
    animate();
}

// QuantSpark Phase
let quantsparkScene = initScene("quantsparkCanvas", 0x330000);
let quantsparkFlares = [];
function updateQuantspark() {
    if (!quantsparkScene) return;
    const el = JSON.parse(localStorage.getItem("selectedElement") || JSON.stringify(periodicTable[0]));
    const count = parseFloat(document.getElementById("quantsparkCount").value) || Math.min(el.z * 2, 20);
    const solidColor = document.getElementById("quantsparkSolidColor").value || "#4B0082";
    const gasColor = document.getElementById("quantsparkGasColor").value || "#FF0000";
    const magOn = document.getElementById("quantsparkMagneticToggle").checked;
    const mag = magOn ? parseFloat(document.getElementById("quantsparkMagnetic").value) || 0.1 : 0;
    const soundOn = document.getElementById("quantsparkSoundToggle").checked;
    const sound = soundOn ? parseFloat(document.getElementById("quantsparkSound").value) || 0.5 : 0;
    const densityOn = document.getElementById("quantsparkDensityToggle").checked;
    const density = densityOn ? parseFloat(document.getElementById("quantsparkDensity").value) || 0.2 : 0;
    const vibOn = document.getElementById("quantsparkVibrationToggle").checked;
    const vib = vibOn ? parseFloat(document.getElementById("quantsparkVibration").value) || 0.5 : 0;
    const posChargeOn = document.getElementById("quantsparkPositiveChargeToggle").checked;
    const posCharge = posChargeOn ? parseFloat(document.getElementById("quantsparkPositiveCharge").value) || 0.5 : 0;
    const negChargeOn = document.getElementById("quantsparkNegativeChargeToggle").checked;
    const negCharge = negChargeOn ? parseFloat(document.getElementById("quantsparkNegativeCharge").value) || 0.5 : 0;
    const z = parseFloat(document.getElementById("quantsparkZ").value) || el.z;
    const mass = parseFloat(document.getElementById("quantsparkMass").value) || el.mass;

    quantsparkScene.scene.clear();
    quantsparkFlares = [];
    const geom = new THREE.SphereGeometry(0.2 * mass, 16, 16);
    const k_v = 1e-50, k_q = 1e-50, f_s = 1e95;
    const charge = posCharge - negCharge;

    for (let i = 0; i < count; i++) {
        const solidMat = new THREE.MeshBasicMaterial({ color: solidColor });
        const gasMat = new THREE.MeshBasicMaterial({ color: gasColor });
        const solid = new THREE.Mesh(geom, solidMat);
        const gas = new THREE.Mesh(geom, gasMat);
        solid.position.set(Math.random() * 4 - 2, Math.random() * 4 - 2, Math.random() * 4 - 2);
        gas.position.set(Math.random() * 4 - 2, Math.random() * 4 - 2, Math.random() * 4 - 2);
        solid.velocity = new THREE.Vector3(Math.random() * 0.1 - 0.05, Math.random() * 0.1 - 0.05, Math.random() * 0.1 - 0.05);
        gas.velocity = new THREE.Vector3(Math.random() * 0.1 - 0.05, Math.random() * 0.1 - 0.05, Math.random() * 0.1 - 0.05);
        const r = solid.position.length();
        const d = 0.1 + density * Math.sin(r);
        solid.density = d;
        gas.density = d;
        solid.vibration = k_v * sound * f_s * Math.sqrt(d) * vib;
        gas.vibration = solid.vibration;
        solid.charge = k_q * charge;
        gas.charge = k_q * charge;
        quantsparkFlares.push({ solid, gas });
        quantsparkScene.scene.add(solid, gas);
    }

    function animate() {
        requestAnimationFrame(animate);
        const magField = new THREE.Vector3(0, 0, mag);
        quantsparkFlares.forEach(f => {
            const soundEnergy = sound * Math.sin(Date.now() * 0.001) * f.solid.density * f.solid.vibration;
            const chargeForce = f.solid.charge * 0.1;
            const solidForce = magOn ? f.solid.velocity.clone().cross(magField).multiplyScalar(0.01 + soundEnergy + chargeForce) : new THREE.Vector3();
            const gasForce = magOn ? f.gas.velocity.clone().cross(magField).multiplyScalar(0.01 + soundEnergy + chargeForce) : new THREE.Vector3();
            f.solid.velocity.add(solidForce);
            f.gas.velocity.add(gasForce);
            f.solid.position.add(f.solid.velocity);
            f.gas.position.add(f.gas.velocity);
            f.solid.position.clamp(new THREE.Vector3(-4, -4, -4), new THREE.Vector3(4, 4, 4));
            f.gas.position.clamp(new THREE.Vector3(-4, -4, -4), new THREE.Vector3(4, 4, 4));
            const scale = (soundOn || vibOn || posChargeOn || negChargeOn) ? 1 + Math.sin(Date.now() * 0.005 + f.solid.vibration + f.solid.charge) : 1;
            f.solid.scale.set(scale, scale, scale);
            f.gas.scale.set(scale, scale, scale);
        });
        quantsparkScene.controls.update();
        quantsparkScene.renderer.render(quantsparkScene.scene, quantsparkScene.camera);
    }
    animate();
}

// ChaosBloom Phase
let chaosbloomScene = initScene("chaosbloomCanvas", 0x000000);
let chaosbloomWeb = null;
function updateChaosbloom() {
    if (!chaosbloomScene) return;
    const el = JSON.parse(localStorage.getItem("selectedElement") || JSON.stringify(periodicTable[0]));
    const points = parseFloat(document.getElementById("chaosbloomPoints").value) || Math.min(Math.ceil(el.mass * 100), 1000);
    const color1 = document.getElementById("chaosbloomColor1").value || "#0000FF";
    const color2 = document.getElementById("chaosbloomColor2").value || "#FF0000";
    const gravOn = document.getElementById("chaosbloomGravityToggle").checked;
    const grav = gravOn ? parseFloat(document.getElementById("chaosbloomGravity").value) || 0.01 : 0;
    const soundOn = document.getElementById("chaosbloomSoundToggle").checked;
    const sound = soundOn ? parseFloat(document.getElementById("chaosbloomSound").value) || 0.5 : 0;
    const densityOn = document.getElementById("chaosbloomDensityToggle").checked;
    const density = densityOn ? parseFloat(document.getElementById("chaosbloomDensity").value) || 0.2 : 0;
    const vibOn = document.getElementById("chaosbloomVibrationToggle").checked;
    const vib = vibOn ? parseFloat(document.getElementById("chaosbloomVibration").value) || 0.5 : 0;
    const posChargeOn = document.getElementById("chaosbloomPositiveChargeToggle").checked;
    const posCharge = posChargeOn ? parseFloat(document.getElementById("chaosbloomPositiveCharge").value) || 0.5 : 0;
    const negChargeOn = document.getElementById("chaosbloomNegativeChargeToggle").checked;
    const negCharge = negChargeOn ? parseFloat(document.getElementById("chaosbloomNegativeCharge").value) || 0.5 : 0;
    const z = parseFloat(document.getElementById("chaosbloomZ").value) || el.z;
    const mass = parseFloat(document.getElementById("chaosbloomMass").value) || el.mass;

    chaosbloomScene.scene.clear();
    const geom = new THREE.BufferGeometry();
    const verts = [];
    const colors = [];
    const positions = [];
    const k_v = 1e-50, k_q = 1e-50, f_s = 1e95;
    const charge = posCharge - negCharge;

    for (let i = 0; i < points; i++) {
        const x = (Math.random() - 0.5) * 10;
        const y = (Math.random() - 0.5) * 10;
        const z = (Math.random() - 0.5) * 10;
        const r = Math.sqrt(x * x + y * y + z * z);
        const d = 0.1 + density * r;
        verts.push(x, y, z);
        const color = Math.random() < 0.5 ? new THREE.Color(color1) : new THREE.Color(color2);
        colors.push(color.r, color.g, color.b);
        const pos = new THREE.Vector3(x, y, z);
        pos.density = d;
        pos.vibration = k_v * sound * f_s * Math.sqrt(d) * vib;
        pos.charge = k_q * charge;
        positions.push(pos);
    }
    geom.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
    geom.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    chaosbloomWeb = new THREE.Points(geom, new THREE.PointsMaterial({ size: 0.1 * z, vertexColors: true }));
    chaosbloomWeb.positions = positions;
    chaosbloomScene.scene.add(chaosbloomWeb);

    function animate() {
        requestAnimationFrame(animate);
        const posArray = chaosbloomWeb.geometry.attributes.position.array;
        for (let i = 0; i < chaosbloomWeb.positions.length; i++) {
            const p = chaosbloomWeb.positions[i];
            if (gravOn || soundOn || vibOn || posChargeOn || negChargeOn) {
                p.x += Math.sin(Date.now() * 0.001 + i) * 0.02 * vib;
                p.y += Math.cos(Date.now() * 0.001 + i) * 0.02 * sound;
                p.z += Math.sin(Date.now() * 0.002 + i) * 0.02 * charge;
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

// Update All Phases
function updateAll() {
    updateBinary();
    updateQuantspark();
    updateChaosbloom();
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    buildPeriodicTable();
    if (binaryScene) updateBinary();
    if (quantsparkScene) updateQuantspark();
    if (chaosbloomScene) updateChaosbloom();
});
