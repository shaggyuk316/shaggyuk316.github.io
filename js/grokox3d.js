// Simplified OrbitControls (from original)
const OrbitControls = (function() {
    function OrbitControls(object, domElement) {
        this.object = object;
        this.domElement = domElement;
        this.enabled = true;
        this.target = new THREE.Vector3();
        this.minDistance = 0;
        this.maxDistance = Infinity;
        this.enableDamping = true;
        this.dampingFactor = 0.05;
        this.enableZoom = true;
        this.zoomSpeed = 1.0;
        this.enableRotate = true;
        this.rotateSpeed = 1.0;
        this.enablePan = true;
        this.panSpeed = 1.0;

        const scope = this;
        const rotateStart = new THREE.Vector2();
        const rotateEnd = new THREE.Vector2();
        const rotateDelta = new THREE.Vector2();
        const panStart = new THREE.Vector2();
        const panEnd = new THREE.Vector2();
        const panDelta = new THREE.Vector2();
        const dollyStart = new THREE.Vector2();
        const dollyEnd = new THREE.Vector2();
        const dollyDelta = new THREE.Vector2();
        let state = -1;
        const spherical = new THREE.Spherical();
        const sphericalDelta = new THREE.Spherical();
        let scale = 1;
        const panOffset = new THREE.Vector3();

        function getZoomScale() { return Math.pow(0.95, scope.zoomSpeed); }
        function rotateLeft(angle) { sphericalDelta.theta -= angle; }
        function rotateUp(angle) { sphericalDelta.phi -= angle; }
        function panLeft(distance, objectMatrix) {
            const v = new THREE.Vector3().setFromMatrixColumn(objectMatrix, 0);
            v.multiplyScalar(-distance);
            panOffset.add(v);
        }
        function panUp(distance, objectMatrix) {
            const v = new THREE.Vector3().setFromMatrixColumn(objectMatrix, 1);
            v.multiplyScalar(distance);
            panOffset.add(v);
        }
        function pan(deltaX, deltaY) {
            const element = scope.domElement;
            const position = scope.object.position;
            const offset = position.clone().sub(scope.target);
            let targetDistance = offset.length();
            targetDistance *= Math.tan((scope.object.fov / 2) * Math.PI / 180.0);
            panLeft(2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix);
            panUp(2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix);
        }
        function dollyIn(dollyScale) { scale *= dollyScale; }
        function dollyOut(dollyScale) { scale /= dollyScale; }

        this.update = function() {
            const offset = new THREE.Vector3();
            const quat = new THREE.Quaternion().setFromUnitVectors(object.up, new THREE.Vector3(0, 1, 0));
            const quatInverse = quat.clone().invert();
            offset.copy(scope.object.position).sub(scope.target);
            offset.applyQuaternion(quat);
            spherical.setFromVector3(offset);
            if (scope.enableDamping) {
                spherical.theta += sphericalDelta.theta * scope.dampingFactor;
                spherical.phi += sphericalDelta.phi * scope.dampingFactor;
            } else {
                spherical.theta += sphericalDelta.theta;
                spherical.phi += sphericalDelta.phi;
            }
            spherical.phi = Math.max(0, Math.min(Math.PI, spherical.phi));
            spherical.radius *= scale;
            spherical.radius = Math.max(scope.minDistance, Math.min(scope.maxDistance, spherical.radius));
            if (scope.enableDamping) {
                scope.target.addScaledVector(panOffset, scope.dampingFactor);
            } else {
                scope.target.add(panOffset);
            }
            offset.setFromSpherical(spherical);
            offset.applyQuaternion(quatInverse);
            scope.object.position.copy(scope.target).add(offset);
            scope.object.lookAt(scope.target);
            if (scope.enableDamping) {
                sphericalDelta.theta *= (1 - scope.dampingFactor);
                sphericalDelta.phi *= (1 - scope.dampingFactor);
                panOffset.multiplyScalar(1 - scope.dampingFactor);
            } else {
                sphericalDelta.set(0, 0, 0);
                panOffset.set(0, 0, 0);
            }
            scale = 1;
        };

        function onMouseDown(event) {
            if (!scope.enabled) return;
            event.preventDefault();
            if (event.button === 0) {
                state = 0;
                rotateStart.set(event.clientX, event.clientY);
            } else if (event.button === 1) {
                state = 1;
                dollyStart.set(event.clientX, event.clientY);
            } else if (event.button === 2) {
                state = 2;
                panStart.set(event.clientX, event.clientY);
            }
            if (state !== -1) {
                document.addEventListener('mousemove', onMouseMove, false);
                document.addEventListener('mouseup', onMouseUp, false);
            }
        }

        function onMouseMove(event) {
            if (!scope.enabled) return;
            event.preventDefault();
            if (state === 0) {
                rotateEnd.set(event.clientX, event.clientY);
                rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
                const element = scope.domElement;
                rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight);
                rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);
                rotateStart.copy(rotateEnd);
            } else if (state === 1) {
                dollyEnd.set(event.clientX, event.clientY);
                dollyDelta.subVectors(dollyEnd, dollyStart);
                if (dollyDelta.y > 0) dollyOut(getZoomScale());
                else if (dollyDelta.y < 0) dollyIn(getZoomScale());
                dollyStart.copy(dollyEnd);
            } else if (state === 2) {
                panEnd.set(event.clientX, event.clientY);
                panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);
                pan(panDelta.x, panDelta.y);
                panStart.copy(panEnd);
            }
            scope.update();
        }

        function onMouseUp() {
            document.removeEventListener('mousemove', onMouseMove, false);
            document.removeEventListener('mouseup', onMouseUp, false);
            state = -1;
        }

        function onMouseWheel(event) {
            if (!scope.enabled || !scope.enableZoom) return;
            event.preventDefault();
            if (event.deltaY < 0) dollyIn(getZoomScale());
            else if (event.deltaY > 0) dollyOut(getZoomScale());
            scope.update();
        }

        scope.domElement.addEventListener('mousedown', onMouseDown, false);
        scope.domElement.addEventListener('wheel', onMouseWheel, { passive: false });

        this.update();
    }
    return OrbitControls;
})();

// Scene Setup
function initScene(canvasId, sceneColor) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return null;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(sceneColor);
    const camera = new THREE.PerspectiveCamera(75, 600 / 400, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(600, 400);
    camera.position.z = 20;
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    return { scene, camera, renderer, controls };
}

// Binary Phase
const binaryScene = initScene('binaryCanvas', 0x000033);
let binaryLattice = [];
function updateBinary() {
    if (!binaryScene) return;
    const element = JSON.parse(localStorage.getItem("selectedElement") || "{}");
    const size = parseInt(document.getElementById('binarySize').value) || (element.mass ? Math.min(Math.ceil(element.mass), 10) : 5);
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
    const geometry = new THREE.SphereGeometry(0.1 * (element.atomicNumber || 1), 16, 16);
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

// QuantSpark Phase
const quantsparkScene = initScene('quantsparkCanvas', 0x330000);
let quantsparkFlares = [];
function updateQuantspark() {
    if (!quantsparkScene) return;
    const element = JSON.parse(localStorage.getItem("selectedElement") || "{}");
    const count = parseInt(document.getElementById('quantsparkCount').value) || (element.atomicNumber ? Math.min(element.atomicNumber * 2, 20) : 10);
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
    const geometry = new THREE.SphereGeometry(0.2 * (element.mass || 1), 16, 16);
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

// ChaosBloom Phase
const chaosbloomScene = initScene('chaosbloomCanvas', 0x000000);
let chaosbloomWeb = null;
function updateChaosbloom() {
    if (!chaosbloomScene) return;
    const element = JSON.parse(localStorage.getItem("selectedElement") || "{}");
    const points = parseInt(document.getElementById('chaosbloomPoints').value) || (element.mass ? Math.min(Math.ceil(element.mass * 100), 1000) : 300);
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
    const material = new THREE.PointsMaterial({ size: 0.1 * (element.atomicNumber || 1), vertexColors: true });
    chaosbloomWeb = new THREE.Points(geometry, material);
    chaosbloomWeb.positions = positions;
    chaosbloomWeb.gravityStrength = gravityStrength;
    chaosbloomWeb.soundAmplitude = soundAmplitude;
    chaosbloomWeb.vibrationScale = vibrationScale;
    chaosbloomWeb.netCharge = netCharge;
    chaosbloomScene.scene.add(chaosbloomWeb);

    function animate() {
        requestAnimationFrame(animate);
        const soundEnergy = chaosbloomWeb.soundAmplitude * Math.sin(Date.now() * 0.001);
        const posArray = chaosbloomWeb.geometry.attributes.position.array;
        for (let i = 0; i < chaosbloomWeb.positions.length; i++) {
            const p1 = chaosbloomWeb.positions[i];
            let force = new THREE.Vector3();
            if (gravityToggle || soundToggle || vibrationToggle || positiveChargeToggle || negativeChargeToggle) {
                for (let j = 0; j < chaosbloomWeb.positions.length; j++) {
                    if (i === j) continue;
                    const p2 = chaosbloomWeb.positions[j];
                    const distance = p1.distanceTo(p2);
                    if (distance < 0.1) continue;
                    const direction = p2.clone().sub(p1).normalize();
                    const gravity = chaosbloomWeb.gravityStrength / (distance * distance) * p1.density * p2.density + soundEnergy * p1.vibration * 0.01 + p1.charge * p2.charge * 0.01;
                    force.add(direction.multiplyScalar(gravity));
                }
                p1.add(force.multiplyScalar(0.01));
            }
            p1.clamp(new THREE.Vector3(-10, -10, -10), new THREE.Vector3(10, 10, 10));
            posArray[i * 3] = p1.x;
            posArray[i * 3 + 1] = p1.y;
            posArray[i * 3 + 2] = p1.z;
        }
        chaosbloomWeb.geometry.attributes.position.needsUpdate = true;
        chaosbloomWeb.rotation.x += 0.01;
        chaosbloomWeb.rotation.y += 0.01;
        chaosbloomScene.controls.update();
        chaosbloomScene.renderer.render(chaosbloomScene.scene, chaosbloomScene.camera);
    }
    animate();
}

if (binaryScene) updateBinary();
if (quantsparkScene) updateQuantspark();
if (chaosbloomScene) updateChaosbloom();
