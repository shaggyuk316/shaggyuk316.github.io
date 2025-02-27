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
            updateQCalcs();
        });
        table.appendChild(btn);
    });
}

function simulateQCalcs(n, t_start = 1e-108, e_base = 1e-93, atomicNumber, mass, vibration, charge) {
    const q_calcs = [];
    const k_v = 1e-50, k_e = 1e-93, k_q = 1e-50;
    const V_s = vibration ? k_v * vibration * Math.sqrt(mass) : 0;
    const q = charge;
    for (let i = 1; i <= n; i++) {
        const t = t_start * Math.pow(10, (i - 1) / 9);
        const r = Math.random();
        const e = atomicNumber * Math.sqrt(mass * k_e * r) * Math.PI * (V_s + k_q * q);
        const x = (Math.random() - 0.5) * 2;
        const y = (Math.random() - 0.5) * 2;
        const z = (Math.random() - 0.5) * 2;
        q_calcs.push({ step: i, time: t.toExponential(2), energy: e.toExponential(2), x, y, z });
    }
    return q_calcs;
}

let scene, camera, renderer, controls, spheres = [];
function initScene() {
    const canvas = document.getElementById("qcalcsCanvas");
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x111111);
    camera = new THREE.PerspectiveCamera(75, 600 / 400, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(600, 400);
    camera.position.z = 5;
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
}

function updateQCalcs() {
    const element = JSON.parse(localStorage.getItem("selectedElement") || JSON.stringify(periodicTable[0]));
    const vibrationToggle = document.getElementById("vibrationToggle").checked;
    const vibration = vibrationToggle ? parseFloat(document.getElementById("vibration").value) : 0;
    const positiveChargeToggle = document.getElementById("positiveChargeToggle").checked;
    const positiveCharge = positiveChargeToggle ? parseFloat(document.getElementById("positiveCharge").value) : 0;
    const negativeChargeToggle = document.getElementById("negativeChargeToggle").checked;
    const negativeCharge = negativeChargeToggle ? parseFloat(document.getElementById("negativeCharge").value) : 0;
    const charge = positiveCharge - negativeCharge;

    document.getElementById("element-info").textContent = `Element: ${element.name} (Z: ${element.atomicNumber}, m: ${element.mass})`;
    const table = document.getElementById("qcalcsTable");
    while (table.rows.length > 1) table.deleteRow(1);
    const q_results = simulateQCalcs(10, 1e-108, 1e-93, element.atomicNumber, element.mass, vibration, charge);
    q_results.forEach((result, index) => {
        const row = table.insertRow();
        row.style.opacity = "0";
        row.insertCell().textContent = result.step;
        row.insertCell().textContent = result.time;
        row.insertCell().textContent = result.energy;
        row.insertCell().textContent = `(${result.x.toFixed(2)}, ${result.y.toFixed(2)}, ${result.z.toFixed(2)})`;
        setTimeout(() => row.style.opacity = "1", index * 100);
    });

    scene.clear();
    spheres.forEach(s => scene.remove(s));
    spheres = [];
    q_results.forEach(result => {
        const sphere = new THREE.Mesh(
            new THREE.SphereGeometry(0.2, 16, 16),
            new THREE.MeshBasicMaterial({ color: 0xffff00 })
        );
        sphere.position.set(result.x, result.y, result.z);
        scene.add(sphere);
        spheres.push({ mesh: sphere, baseEnergy: parseFloat(result.energy) });
    });

    function animate() {
        requestAnimationFrame(animate);
        const k_v = 1e-50, k_q = 1e-50;
        const V_s = vibration ? k_v * vibration * Math.sqrt(element.mass) : 0;
        const q = charge;
        spheres.forEach(s => {
            const scale = V_s || q ? 1 + Math.sin(Date.now() * 0.001) * (s.baseEnergy * 1e50) : 1;
            s.mesh.scale.set(scale, scale, scale);
        });
        controls.update();
        renderer.render(scene, camera);
    }
    animate();
}

document.addEventListener("DOMContentLoaded", () => {
    buildPeriodicTable();
    initScene();
    updateQCalcs();
});
