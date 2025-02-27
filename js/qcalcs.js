const periodicTable = [
    { name: "H", atomicNumber: 1, mass: 1.008 },
    { name: "He", atomicNumber: 2, mass: 4.002 },
    { name: "Li", atomicNumber: 3, mass: 6.941 },
    // Add more as needed
];

function buildPeriodicTable() {
    const table = document.getElementById("periodic-table");
    periodicTable.forEach(element => {
        const btn = document.createElement("button");
        btn.className = "element";
        btn.textContent = element.name;
        btn.dataset.atomicNumber = element.atomicNumber;
        btn.dataset.mass = element.mass;
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
    renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(600, 400);
    camera.position.z = 5;
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
}

function updateQCalcs() {
    const element = JSON.parse(localStorage.getItem("selectedElement") || "{}");
    if (!element.name) {
        document.getElementById("element-info").textContent = "Select an element first!";
        return;
    }
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
