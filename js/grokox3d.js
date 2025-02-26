// Scene Setup with OrbitControls
function initScene(canvasId, sceneColor) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) { console.error(`${canvasId} not found`); return null; }
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(sceneColor);
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / 400, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas });
    renderer.setSize(canvas.clientWidth, 400);
    camera.position.z = 20;
    camera.lookAt(0, 0, 0);
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    return { scene, camera, renderer, controls };
}

// Binary: Lattice to Flare
let binaryScene = initScene('binaryCanvas', 0x000033);
let binaryLattice = [];
function updateBinary() {
    if (!binaryScene) return;
    const size = parseInt(document.getElementById('binarySize').value);
    binaryScene.scene.clear();
    binaryLattice = [];
    const latticeGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const latticeMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    for (let x = -size/2; x <= size/2; x += 0.5) {
        for (let y = -size/2; y <= size/2; y += 0.5) {
            for (let z = -size/2; z <= size/2; z += 0.5) {
                const sphere = new THREE.Mesh(latticeGeometry, latticeMaterial);
                sphere.position.set(x, y, z);
                binaryLattice.push(sphere);
                binaryScene.scene.add(sphere);
            }
        }
    }
}
updateBinary();
if (binaryScene) {
    let flipTime = 0;
    function animateBinary() {
        requestAnimationFrame(animateBinary);
        flipTime += 0.05;
        if (flipTime > 5) {
            binaryLattice.forEach(sphere => {
                sphere.material.color.set(0xffff00);
                sphere.scale.set(2, 2, 2);
            });
        }
        binaryScene.controls.update();
        binaryScene.renderer.render(binaryScene.scene, binaryScene.camera);
    }
    animateBinary();
}

// QuantSpark: Chaotic Flares
let quantsparkScene = initScene('quantsparkCanvas', 0x330000);
let quantsparkFlares = [];
function updateQuantspark() {
    if (!quantsparkScene) return;
    const count = parseInt(document.getElementById('quantsparkCount').value);
    quantsparkScene.scene.clear();
    quantsparkFlares = [];
    const flareGeometry = new THREE.SphereGeometry(0.2, 16, 16);
    for (let i = 0; i < count; i++) {
        const solidMaterial = new THREE.MeshBasicMaterial({ color: 0x4b0082 });
        const gasMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const solidFlare = new THREE.Mesh(flareGeometry, solidMaterial);
        const gasFlare = new THREE.Mesh(flareGeometry, gasMaterial);
        solidFlare.position.set(Math.random() * 4 - 2, Math.random() * 4 - 2, Math.random() * 4 - 2);
        gasFlare.position.set(Math.random() * 4 - 2, Math.random() * 4 - 2, Math.random() * 4 - 2);
        quantsparkFlares.push({ solid: solidFlare, gas: gasFlare });
        quantsparkScene.scene.add(solidFlare, gasFlare);
    }
}
updateQuantspark();
if (quantsparkScene) {
    function animateQuantspark() {
        requestAnimationFrame(animateQuantspark);
        quantsparkFlares.forEach(flare => {
            flare.solid.scale.set(1 + Math.sin(Date.now() * 0.005), 1 + Math.sin(Date.now() * 0.005), 1);
            flare.gas.scale.set(1 + Math.sin(Date.now() * 0.007), 1 + Math.sin(Date.now() * 0.007), 1);
        });
        quantsparkScene.controls.update();
        quantsparkScene.renderer.render(quantsparkScene.scene, quantsparkScene.camera);
    }
    animateQuantspark();
}

// ChaosBloom: Fractal Web
let chaosbloomScene = initScene('chaosbloomCanvas', 0x000000);
let chaosbloomWeb = null;
function updateChaosbloom() {
    if (!chaosbloomScene) return;
    const points = parseInt(document.getElementById('chaosbloomPoints').value);
    chaosbloomScene.scene.clear();
    const webGeometry = new THREE.BufferGeometry();
    const vertices = [];
    const colors = [];
    for (let i = 0; i < points; i++) {
        const x = (Math.random() - 0.5) * 10;
        const y = (Math.random() - 0.5) * 10;
        const z = (Math.random() - 0.5) * 10;
        vertices.push(x, y, z);
        const color = Math.random() < 0.5 ? [0, 0, 1] : [1, 0, 0];
        colors.push(...color);
    }
    webGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    webGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    const webMaterial = new THREE.PointsMaterial({ size: 0.1, vertexColors: true });
    chaosbloomWeb = new THREE.Points(webGeometry, webMaterial);
    chaosbloomScene.scene.add(chaosbloomWeb);
}
updateChaosbloom();
if (chaosbloomScene) {
    function animateChaosbloom() {
        requestAnimationFrame(animateChaosbloom);
        if (chaosbloomWeb) {
            chaosbloomWeb.rotation.x += 0.01;
            chaosbloomWeb.rotation.y += 0.01;
        }
        chaosbloomScene.controls.update();
        chaosbloomScene.renderer.render(chaosbloomScene.scene, chaosbloomScene.camera);
    }
    animateChaosbloom();
}
