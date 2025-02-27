// Periodic Table Data (unchanged)
const periodicTable = [
    {s: "H", z: 1, m: 1.008}, {s: "He", z: 2, m: 4.002}, {s: "Li", z: 3, m: 6.941},
    {s: "Be", z: 4, m: 9.012}, {s: "B", z: 5, m: 10.811}, {s: "C", z: 6, m: 12.011},
    {s: "N", z: 7, m: 14.007}, {s: "O", z: 8, m: 15.999}, {s: "F", z: 9, m: 18.998},
    {s: "Ne", z: 10, m: 20.180}, {s: "Na", z: 11, m: 22.990}, {s: "Mg", z: 12, m: 24.305},
    {s: "Al", z: 13, m: 26.982}, {s: "Si", z: 14, m: 28.085}, {s: "P", z: 15, m: 30.974},
    {s: "S", z: 16, m: 32.06}, {s: "Cl", z: 17, m: 35.45}, {s: "Ar", z: 18, m: 39.948},
    {s: "K", z: 19, m: 39.098}, {s: "Ca", z: 20, m: 40.078}, {s: "Sc", z: 21, m: 44.956},
    {s: "Ti", z: 22, m: 47.867}, {s: "V", z: 23, m: 50.942}, {s: "Cr", z: 24, m: 51.996},
    {s: "Mn", z: 25, m: 54.938}, {s: "Fe", z: 26, m: 55.845}, {s: "Co", z: 27, m: 58.933},
    {s: "Ni", z: 28, m: 58.693}, {s: "Cu", z: 29, m: 63.546}, {s: "Zn", z: 30, m: 65.38},
    {s: "Ga", z: 31, m: 69.723}, {s: "Ge", z: 32, m: 72.630}, {s: "As", z: 33, m: 74.922},
    {s: "Se", z: 34, m: 78.971}, {s: "Br", z: 35, m: 79.904}, {s: "Kr", z: 36, m: 83.798},
    {s: "Rb", z: 37, m: 85.468}, {s: "Sr", z: 38, m: 87.62}, {s: "Y", z: 39, m: 88.906},
    {s: "Zr", z: 40, m: 91.224}, {s: "Nb", z: 41, m: 92.906}, {s: "Mo", z: 42, m: 95.95},
    {s: "Tc", z: 43, m: 98}, {s: "Ru", z: 44, m: 101.07}, {s: "Rh", z: 45, m: 102.91},
    {s: "Pd", z: 46, m: 106.42}, {s: "Ag", z: 47, m: 107.87}, {s: "Cd", z: 48, m: 112.41},
    {s: "In", z: 49, m: 114.82}, {s: "Sn", z: 50, m: 118.71}, {s: "Sb", z: 51, m: 121.76},
    {s: "Te", z: 52, m: 127.60}, {s: "I", z: 53, m: 126.90}, {s: "Xe", z: 54, m: 131.29},
    {s: "Cs", z: 55, m: 132.91}, {s: "Ba", z: 56, m: 137.33}, {s: "La", z: 57, m: 138.91},
    {s: "Ce", z: 58, m: 140.12}, {s: "Pr", z: 59, m: 140.91}, {s: "Nd", z: 60, m: 144.24},
    {s: "Pm", z: 61, m: 145}, {s: "Sm", z: 62, m: 150.36}, {s: "Eu", z: 63, m: 151.96},
    {s: "Gd", z: 64, m: 157.25}, {s: "Tb", z: 65, m: 158.93}, {s: "Dy", z: 66, m: 162.50},
    {s: "Ho", z: 67, m: 164.93}, {s: "Er", z: 68, m: 167.26}, {s: "Tm", z: 69, m: 168.93},
    {s: "Yb", z: 70, m: 173.05}, {s: "Lu", z: 71, m: 174.97}, {s: "Hf", z: 72, m: 178.49},
    {s: "Ta", z: 73, m: 180.95}, {s: "W", z: 74, m: 183.84}, {s: "Re", z: 75, m: 186.21},
    {s: "Os", z: 76, m: 190.23}, {s: "Ir", z: 77, m: 192.22}, {s: "Pt", z: 78, m: 195.08},
    {s: "Au", z: 79, m: 196.97}, {s: "Hg", z: 80, m: 200.59}, {s: "Tl", z: 81, m: 204.38},
    {s: "Pb", z: 82, m: 207.2}, {s: "Bi", z: 83, m: 208.98}, {s: "Po", z: 84, m: 209},
    {s: "At", z: 85, m: 210}, {s: "Rn", z: 86, m: 222}, {s: "Fr", z: 87, m: 223},
    {s: "Ra", z: 88, m: 226}, {s: "Ac", z: 89, m: 227}, {s: "Th", z: 90, m: 232.04},
    {s: "Pa", z: 91, m: 231.04}, {s: "U", z: 92, m: 238.03}, {s: "Np", z: 93, m: 237},
    {s: "Pu", z: 94, m: 244}, {s: "Am", z: 95, m: 243}, {s: "Cm", z: 96, m: 247},
    {s: "Bk", z: 97, m: 247}, {s: "Cf", z: 98, m: 251}, {s: "Es", z: 99, m: 252},
    {s: "Fm", z: 100, m: 257}, {s: "Md", z: 101, m: 258}, {s: "No", z: 102, m: 259},
    {s: "Lr", z: 103, m: 262}, {s: "Rf", z: 104, m: 267}, {s: "Db", z: 105, m: 268},
    {s: "Sg", z: 106, m: 269}, {s: "Bh", z: 107, m: 270}, {s: "Hs", z: 108, m: 269},
    {s: "Mt", z: 109, m: 278}, {s: "Ds", z: 110, m: 281}, {s: "Rg", z: 111, m: 280},
    {s: "Cn", z: 112, m: 285}, {s: "Nh", z: 113, m: 286}, {s: "Fl", z: 114, m: 289},
    {s: "Mc", z: 115, m: 289}, {s: "Lv", z: 116, m: 293}, {s: "Ts", z: 117, m: 294},
    {s: "Og", z: 118, m: 294}
];

// Build Periodic Table (unchanged)
function buildPeriodicTable() {
    const table = document.getElementById("periodic-table");
    periodicTable.forEach((el, i) => {
        const btn = document.createElement("button");
        btn.className = "element";
        btn.innerHTML = `<span>${el.z}</span>${el.s}`;
        btn.dataset.z = el.z;
        btn.dataset.m = el.m;
        btn.style.gridColumn = i < 2 ? i + 1 : (i < 18 ? i - 1 : (i < 54 ? i - 17 : i - 53));
        btn.style.gridRow = i < 2 ? 1 : (i < 10 ? 2 : (i < 18 ? 3 : (i < 36 ? 4 : (i < 54 ? 5 : (i < 86 ? 6 : 7))));
        btn.addEventListener("click", () => {
            localStorage.setItem("selectedElement", JSON.stringify(el));
            updateAll();
        });
        table.appendChild(btn);
    });
}

// Scene Setup
function initScene(canvasId, bgColor) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return null;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(bgColor);
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    camera.position.z = 10;
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
    const vibOn = document.getElementById("binaryVibToggle").checked;
    const vib = vibOn ? parseFloat(document.getElementById("binaryVibration").value) || 0.5 : 0;
    const posChargeOn = document.getElementById("binaryPosChargeToggle").checked;
    const posCharge = posChargeOn ? parseFloat(document.getElementById("binaryPosCharge").value) || 0.5 : 0;
    const negChargeOn = document.getElementById("binaryNegChargeToggle").checked;
    const negCharge = negChargeOn ? parseFloat(document.getElementById("binaryNegCharge").value) || 0.5 : 0;
    const z = parseFloat(document.getElementById("binaryZ").value) || el.z;
    const mass = parseFloat(document.getElementById("binaryMass").value) || el.mass;

    binaryScene.scene.clear();
    binaryLattice = [];
    const geom = new THREE.SphereGeometry(0.1 * z, 16, 16);
    const charge = posCharge - negCharge;

    for (let x = -size / 2; x <= size / 2; x += 0.5) {
        for (let y = -size / 2; y <= size / 2; y += 0.5) {
            for (let zPos = -size / 2; zPos <= size / 2; zPos += 0.5) {
                const r = Math.sqrt(x * x + y * y + zPos * zPos);
                const d = 0.1 + density * Math.exp(-r * r / 4);
                const mat = new THREE.MeshBasicMaterial({ color });
                const sphere = new THREE.Mesh(geom, mat);
                sphere.position.set(x, y, zPos);
                sphere.soundOffset = Math.sin(2 * Math.PI * (x + y + zPos));
                sphere.density = d;
                sphere.vibration = sound * d * vib;
                sphere.charge = charge;
                binaryLattice.push(sphere);
                binaryScene.scene.add(sphere);
            }
        }
    }

    let flipTime = 0;
    function animate() {
        requestAnimationFrame(animate);
        flipTime += 0.05 * (1 + sound + vib + Math.abs(charge));
        if (flipTime > 5) {
            binaryLattice.forEach(s => {
                s.material.color.set(0xffff00);
                const scale = 1 + s.soundOffset * s.vibration + s.charge * 0.1;
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
    const count = parseFloat(document.getElementById("quantsparkCount").value) || 10;
    const solidColor = document.getElementById("quantsparkSolidColor").value || "#4B0082";
    const gasColor = document.getElementById("quantsparkGasColor").value || "#FF0000";
    const magOn = document.getElementById("quantsparkMagToggle").checked;
    const mag = magOn ? parseFloat(document.getElementById("quantsparkMagnetic").value) || 0.1 : 0;
    const soundOn = document.getElementById("quantsparkSoundToggle").checked;
    const sound = soundOn ? parseFloat(document.getElementById("quantsparkSound").value) || 0.5 : 0;
    const densityOn = document.getElementById("quantsparkDensityToggle").checked;
    const density = densityOn ? parseFloat(document.getElementById("quantsparkDensity").value) || 0.2 : 0;
    const vibOn = document.getElementById("quantsparkVibToggle").checked;
    const vib = vibOn ? parseFloat(document.getElementById("quantsparkVibration").value) || 0.5 : 0;
    const posChargeOn = document.getElementById("quantsparkPosChargeToggle").checked;
    const posCharge = posChargeOn ? parseFloat(document.getElementById("quantsparkPosCharge").value) || 0.5 : 0;
    const negChargeOn = document.getElementById("quantsparkNegChargeToggle").checked;
    const negCharge = negChargeOn ? parseFloat(document.getElementById("quantsparkNegCharge").value) || 0.5 : 0;
    const z = parseFloat(document.getElementById("quantsparkZ").value) || el.z;
    const mass = parseFloat(document.getElementById("quantsparkMass").value) || el.mass;

    quantsparkScene.scene.clear();
    quantsparkFlares = [];
    const geom = new THREE.SphereGeometry(0.2 * mass, 16, 16);
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
        solid.vibration = sound * d * vib;
        gas.vibration = solid.vibration;
        solid.charge = charge;
        gas.charge = charge;
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
    const points = parseFloat(document.getElementById("chaosbloomPoints").value) || 300;
    const color1 = document.getElementById("chaosbloomColor1").value || "#0000FF";
    const color2 = document.getElementById("chaosbloomColor2").value || "#FF0000";
    const gravOn = document.getElementById("chaosbloomGravToggle").checked;
    const grav = gravOn ? parseFloat(document.getElementById("chaosbloomGravity").value) || 0.01 : 0;
    const soundOn = document.getElementById("chaosbloomSoundToggle").checked;
    const sound = soundOn ? parseFloat(document.getElementById("chaosbloomSound").value) || 0.5 : 0;
    const densityOn = document.getElementById("chaosbloomDensityToggle").checked;
    const density = densityOn ? parseFloat(document.getElementById("chaosbloomDensity").value) || 0.2 : 0;
    const vibOn = document.getElementById("chaosbloomVibToggle").checked;
    const vib = vibOn ? parseFloat(document.getElementById("chaosbloomVibration").value) || 0.5 : 0;
    const posChargeOn = document.getElementById("chaosbloomPosChargeToggle").checked;
    const posCharge = posChargeOn ? parseFloat(document.getElementById("chaosbloomPosCharge").value) || 0.5 : 0;
    const negChargeOn = document.getElementById("chaosbloomNegChargeToggle").checked;
    const negCharge = negChargeOn ? parseFloat(document.getElementById("chaosbloomNegCharge").value) || 0.5 : 0;
    const z = parseFloat(document.getElementById("chaosbloomZ").value) || el.z;
    const mass = parseFloat(document.getElementById("chaosbloomMass").value) || el.mass;

    chaosbloomScene.scene.clear();
    const geom = new THREE.BufferGeometry();
    const verts = [];
    const colors = [];
    const positions = [];
    const charge = posCharge - negCharge;

    for (let i = 0; i < points; i++) {
        const x = (Math.random() - 0.5) * 10;
        const y = (Math.random() - 0.5) * 10;
        const zPos = (Math.random() - 0.5) * 10;
        const r = Math.sqrt(x * x + y * y + zPos * zPos);
        const d = 0.1 + density * r;
        verts.push(x, y, zPos);
        const color = Math.random() < 0.5 ? new THREE.Color(color1) : new THREE.Color(color2);
        colors.push(color.r, color.g, color.b);
        const pos = new THREE.Vector3(x, y, zPos);
        pos.density = d;
        pos.vibration = sound * d * vib;
        pos.charge = charge;
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
                p.x += Math.sin(Date.now() * 0.001 + i) * 0.02 * vib + grav;
                p.y += Math.cos(Date.now() * 0.001 + i) * 0.02 * sound + grav;
                p.z += Math.sin(Date.now() * 0.002 + i) * 0.02 * charge + grav;
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
