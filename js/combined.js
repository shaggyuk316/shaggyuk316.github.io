<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Grokox Theory - Combined</title>
    <link rel="stylesheet" href="style.css">
    <style>
        body { margin: 0; overflow: hidden; background: #000; color: #ccc; font-family: Arial, sans-serif; }
        .container { display: flex; width: 100%; height: 100vh; }
        .container-left { width: 45%; height: 100%; }
        .container-right { width: 45%; padding: 20px; overflow-y: auto; }
        canvas { display: block; }
        .controls { margin-bottom: 20px; }
        label { margin-right: 10px; }
        h3 { color: #007BFF; }
        button { padding: 5px 10px; cursor: pointer; }
    </style>
</head>
<body>
    <div class="container">
        <div class="container-left">
            <canvas id="canvas"></canvas>
        </div>
        <div class="container-right">
            <div class="controls">
                <h3>Sound Settings</h3>
                <label>Sound Mode: 
                    <select id="soundMode">
                        <option value="live">Live Sound (Microphone)</option>
                        <option value="wavelength">Normal Wavelength</option>
                        <option value="none">No Sound</option>
                    </select>
                </label><br>
                <label>Wavelength Frequency (Hz): <input type="range" id="waveFrequency" min="0.1" max="2" value="1" step="0.1"></label><br>
                <button id="startAudio">Start Audio</button>
            </div>
            <div class="controls">
                <h3>Binary Cubes (Solids)</h3>
                <label>Size: <input type="range" id="cubeSize" min="0.5" max="2" value="1" step="0.1"></label><br>
                <label>Color: <input type="color" id="cubeColor" value="#ff0000"></label><br>
                <label>Vibration Intensity: <input type="range" id="cubeVibration" min="0" max="1" value="0.5" step="0.1"></label>
            </div>
            <div class="controls">
                <h3>QuantSpark Flares (Gases)</h3>
                <label>Count: <input type="range" id="flareCount" min="10" max="100" value="50"></label><br>
                <label>Color: <input type="color" id="flareColor" value="#00ff00"></label><br>
                <label>Spread Speed: <input type="range" id="flareSpread" min="0.01" max="0.1" value="0.05" step="0.01"></label>
            </div>
            <div class="controls">
                <h3>ChaosBloom Points (Particles)</h3>
                <label>Count: <input type="range" id="pointCount" min="100" max="1000" value="500"></label><br>
                <label>Color: <input type="color" id="pointColor" value="#0000ff"></label><br>
                <label>Fall Speed: <input type="range" id="pointFallSpeed" min="0.01" max="0.1" value="0.05" step="0.01"></label>
            </div>
            <div class="controls">
                <h3>Laser Lane</h3>
                <label>Enable Laser: <input type="checkbox" id="laserEnabled"></label><br>
                <label>Laser Color: <input type="color" id="laserColor" value="#ff00ff"></label>
            </div>
            <div class="controls">
                <h3>CERN Collider Simulation</h3>
                <label>Enable Collider: <input type="checkbox" id="colliderEnabled"></label><br>
                <label>Particle Speed: <input type="range" id="particleSpeed" min="0.1" max="1" value="0.5" step="0.1"></label><br>
                <label>Collision Frequency (s): <input type="range" id="collisionFrequency" min="1" max="10" value="5" step="1"></label><br>
                <label>Magnetic Field Strength: <input type="range" id="magneticField" min="0" max="2" value="1" step="0.1"></label><br>
                <label>Collider Particle Color: <input type="color" id="colliderParticleColor" value="#ffff00"></label><br>
                <label>Energy Burst Color: <input type="color" id="energyBurstColor" value="#ffaa00"></label>
            </div>
        </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
    <script src="combined.js"></script>
</body>
</html>
