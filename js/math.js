
const periodicTable = [
    {s: "H", z: 1, m: 1.008}, {s: "He", z: 2, m: 4.002}, {s: "Li", z: 3, m: 6.941},
    // ... (full list in grokox3d.js)
    {s: "Og", z: 118, m: 294}
];

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
            calculate();
        });
        table.appendChild(btn);
    });
}

function calculate() {
    const z = parseFloat(document.getElementById("z").value) || 1;
    const m = parseFloat(document.getElementById("mass").value) || 1.008;
    const v = parseFloat(document.getElementById("vibration").value) || 0;
    const q = parseFloat(document.getElementById("charge").value) || 0;
    const d = parseFloat(document.getElementById("density").value) || 0.1;

    const k_q = 1e-50, G = 6.674e-11;
    const binary = z * Math.sqrt(m) * (v + k_q * q) * d;
    const quantspark = z * Math.sqrt(m * 1e-93) * (v + k_q * q) * d;
    const chaosbloom = z * (v + k_q * q) * d + G * m;

    document.getElementById("results").innerHTML = `
        <p>Binary: ${binary.toExponential(2)}</p>
        <p>QuantSpark: ${quantspark.toExponential(2)}</p>
        <p>ChaosBloom: ${chaosbloom.toExponential(2)}</p>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    buildPeriodicTable();
    calculate();
});
