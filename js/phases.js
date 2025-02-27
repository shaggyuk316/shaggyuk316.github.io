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
            initScenes();
        });
        table.appendChild(btn);
    });
}

let binaryScene, quantsparkScene, chaosbloomScene;
function initScenes() {
    const element = JSON.parse(localStorage.getItem("selectedElement") || "{}");

    // Binary Scene
    binaryScene = new THREE.Scene();
    binaryScene.background = new THREE.Color(0x000033);
    const binaryCamera = new THREE.PerspectiveCamera(75, 600 / 400, 0.1, 1000);
    const binaryRenderer = new THREE.WebGLRenderer({ canvas: document.getElementById("binaryCanvas") });
    binaryRenderer.setSize(600, 400);
    binaryCamera.position.z = 10;
    const binaryControls = new THREE.OrbitControls(binaryCamera, binaryRenderer.domElement);
    binaryControls.enableDamping = true;

    // QuantSpark Scene
    quantsparkScene = new THREE.Scene();
    quantsparkScene.background = new THREE.Color(0x330000);
    const quantsparkCamera = new THREE.PerspectiveCamera(75, 600 / 400, 0.1, 1000);
    const quantsparkRenderer = new THREE.WebGLRenderer({ canvas: document.getElementById("quantsparkCanvas") });
    quantsparkRenderer.setSize(600, 400);
    quantsparkCamera.position.z = 10;
    const quantsparkControls = new THREE.OrbitControls(quantsparkCamera, quantsparkRenderer.domElement);
    quantsparkControls.enableDamping = true;

    // ChaosBloom Scene
    chaosbloomScene = new THREE.Scene();
    chaosbloomScene.background = new THREE.Color(0x000000);
    const chaosbloomCamera = new THREE.PerspectiveCamera(75, 600 / 400, 0.1, 1000);
    const chaosbloomRenderer = new THREE.WebGLRenderer({ canvas: document.getElementById("chaosbloomCanvas") });
    chaosbloomRenderer.setSize(600, 400);
    chaosbloomCamera.position.z = 10;
    const chaosbloomControls = new THREE.OrbitControls(chaosbloomCamera, chaosbloomRenderer.domElement);
    chaosbloomControls.enableDamping = true;

    // Populate Scenes
    const lattice = [];
    const size = element.mass ? Math.min(Math.ceil(element.mass), 10) : 5;
    for (let x = -size / 2; x <= size / 2; x += 0.5) {
        for (let y = -size / 2; y <= size / 2; y += 0.5) {
            for (let z = -size / 2; z <= size / 2; z += 0.5) {
                const sphere = new THREE.Mesh(
                    new THREE.SphereGeometry(0.1, 16, 16),
                    new THREE.MeshBasicMaterial({ color: 0x0000ff })
                );
                sphere.position.set(x, y, z);
                lattice.push(sphere);
                binaryScene.add(sphere);
            }
        }
    }

    const flares = [];
    const flareCount = element.atomicNumber ? Math.min(element.atomicNumber * 2, 20) : 10;
    for (let i = 0; i < flareCount; i++) {
        const solid = new THREE.Mesh(
            new THREE.SphereGeometry(0.2, 16, 16),
            new THREE.MeshBasicMaterial({ color: 0x4b0082 })
        );
        solid.position.set(Math.random() * 4 - 2, Math.random() * 4 - 2, Math.random() * 4 - 2);
        quantsparkScene.add(solid);
        flares.push({ solid, velocity: new THREE.Vector3(Math.random() * 0.1 - 0.05, Math.random() * 0.1 - 0.05, Math.random() * 0.1 - 0.05) });
    }

    const points = element.mass ? Math.min(Math.ceil(element.mass * 100), 1000) : 300;
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const colors = [];
    for (let i = 0; i < points; i++) {
        vertices.push((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10);
        colors.push(Math.random(), Math.random(), Math.random());
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    const web = new THREE.Points(geometry, new THREE.PointsMaterial({ size: 0.1, vertexColors: true }));
    chaosbloomScene.add(web);

    let flipTime = 0;
    function animate() {
        requestAnimationFrame(animate);
        flipTime += 0.05;
        if (flipTime > 5 && element.atomicNumber) {
            lattice.forEach(s => s.material.color.set(0xffff00));
            flipTime = 0;
        }
        flares.forEach(f => f.solid.position.add(f.velocity));
        web.rotation.x += 0.01;
        web.rotation.y += 0.01;

        binaryControls.update();
        quantsparkControls.update();
        chaosbloomControls.update();
        binaryRenderer.render(binaryScene, binaryCamera);
        quantsparkRenderer.render(quantsparkScene, quantsparkCamera);
        chaosbloomRenderer.render(chaosbloomScene, chaosbloomCamera);
    }
    animate();
}

document.addEventListener("DOMContentLoaded", () => {
    buildPeriodicTable();
    initScenes();
});
