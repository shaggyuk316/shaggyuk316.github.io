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
    return { scene, camera, renderer };
}

const binary = initScene('binaryCanvas', 0x000033);
if (binary) {
    const latticeGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const latticeMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const lattice = [];
    for (let x = -2; x <= 2; x += 0.5) {
        for (let y = -2; y <= 2; y += 0.5) {
            for (let z = -2; z <= 2; z += 0.5) {
                const sphere = new THREE.Mesh(latticeGeometry, latticeMaterial);
                sphere.position.set(x, y, z);
                lattice.push(sphere);
                binary.scene.add(sphere);
            }
        }
    }
    let flipTime = 0;
    function animateBinary() {
        requestAnimationFrame(animateBinary);
        flipTime += 0.05;
        if (flipTime > 5) {
            lattice.forEach(sphere => {
                sphere.material.color.set(0xffff00);
                sphere.scale.set(2, 2, 2);
            });
        }
        binary.renderer.render(binary.scene, binary.camera);
    }
    animateBinary();
}

const quantspark = initScene('quantsparkCanvas', 0x330000);
if (quantspark) {
    const flareGeometry = new THREE.SphereGeometry(0.2, 16, 16);
    const flares = [];
    for (let i = 0; i < 10; i++) {
        const solidMaterial = new THREE.MeshBasicMaterial({ color: 0x4b0082 });
        const gasMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const solidFlare = new THREE.Mesh(flareGeometry, solidMaterial);
        const gasFlare = new THREE.Mesh(flareGeometry, gasMaterial);
        solidFlare.position.set(Math.random() * 4 - 2, Math.random() * 4 - 2, Math.random() * 4 - 2);
        gasFlare.position.set(Math.random() * 4 - 2, Math.random() * 4 - 2, Math.random() * 4 - 2);
        flares.push({ solid: solidFlare, gas: gasFlare });
        quantspark.scene.add(solidFlare, gasFlare);
    }
    function animateQuantspark() {
        requestAnimationFrame(animateQuantspark);
        flares.forEach(flare => {
            flare.solid.scale.set(1 + Math.sin(Date.now() * 0.005), 1 + Math.sin(Date.now() * 0.005), 1);
            flare.gas.scale.set(1 + Math.sin(Date.now() * 0.007), 1 + Math.sin(Date.now() * 0.007), 1);
        });
        quantspark.renderer.render(quantspark.scene, quantspark.camera);
    }
    animateQuantspark();
}

const chaosbloom = initScene('chaosbloomCanvas', 0x000000);
if (chaosbloom) {
    const webGeometry = new THREE.BufferGeometry();
    const vertices = [];
    const colors = [];
    for (let i = 0; i < 300; i++) {
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
    const web = new THREE.Points(webGeometry, webMaterial);
    chaosbloom.scene.add(web);
    function animateChaosbloom() {
        requestAnimationFrame(animateChaosbloom);
        web.rotation.x += 0.01;
        web.rotation.y += 0.01;
        chaosbloom.renderer.render(chaosbloom.scene, chaosbloom.camera);
    }
    animateChaosbloom();
}
