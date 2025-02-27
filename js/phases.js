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
    // Add more elements up to 118 as needed
];

function buildPeriodicTable() {
    const table = document.getElementById("periodic-table");
    periodicTable.forEach(element => {
        const btn = document.createElement("button");
        btn.className = "element";
        btn.innerHTML = `<span>${element.atomicNumber}</span>${element.name}`;
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
    const element = JSON.parse(localStorage.getItem("selectedElement") || periodicTable[0]);

    binaryScene = new THREE.Scene();
    binaryScene.background = new THREE.Color(0x000033);
    const binaryCamera = new THREE.PerspectiveCamera(75, 600 / 400, 0.1, 1000);
    const binaryRenderer = new THREE.WebGLRenderer({ canvas: document.getElementById("binaryCanvas") });
    binaryRenderer.setSize(600, 400);
    binaryCamera.position.z = 10;
    const binaryControls = new THREE.OrbitControls(binaryCamera, binaryRenderer.domElement);
    binaryControls.enableDamping = true;

    quantsparkScene = new THREE.Scene();
    quantsparkScene.background = new THREE.Color(0x330000);
    const quantsparkCamera = new THREE.PerspectiveCamera(75, 600 / 400, 0.1, 1000);
    const quantsparkRenderer = new THREE.WebGLRenderer({ canvas: document.getElementById("quantsparkCanvas") });
    quantsparkRenderer.setSize(600, 400);
    quantsparkCamera.position.z = 10;
    const quantsparkControls = new THREE.OrbitControls(quantsparkCamera, quantsparkRenderer.domElement);
    quantsparkControls.enableDamping = true;

    chaosbloomScene = new THREE.Scene();
    chaosbloomScene.background = new THREE.Color(0x000000);
    const chaosbloomCamera = new THREE.PerspectiveCamera(75, 600 / 400, 0.1, 1000);
    const chaosbloomRenderer = new THREE.WebGLRenderer({ canvas: document.getElementById("chaosbloomCanvas") });
    chaosbloomRenderer.setSize(600, 400);
    chaosbloomCamera.position.z = 10;
    const chaosbloomControls = new THREE.OrbitControls(chaosbloomCamera, chaosbloomRenderer.domElement);
    chaosbloomControls.enableDamping = true;

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
                binaryScene.add(sphere);
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
        quantsparkScene.add(solid);
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
    const web = new THREE.Points(geometry, new THREE.PointsMaterial({ size: 0.1, vertexColors: true }));
    web.positions = positions;
    chaosbloomScene.add(web);

    let flipTime = 0;
    function animate() {
        requestAnimationFrame(animate);
        flipTime += 0.05;
        if (flipTime > 5) {
            lattice.forEach(s => s.material.color.set(0xffff00));
            flipTime = 0;
        }
        flares.forEach(f => f.solid.position.add(f.velocity));
        const posArray = web.geometry.attributes.position.array;
        for (let i = 0; i < web.positions.length; i++) {
            web.positions[i].x += Math.sin(Date.now() * 0.001 + i) * 0.01;
            posArray[i * 3] = web.positions[i].x;
        }
        web.geometry.attributes.position.needsUpdate = true;
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
