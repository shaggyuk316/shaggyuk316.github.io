const periodicTable = [
    {s: "H", z: 1, m: 1.008}, {s: "He", z: 2, m: 4.002}, {s: "Li", z: 3, m: 6.941},
    // ... (full list - keeping it short here, full in final version)
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
        btn.addEventListener("click", () => localStorage.setItem("selectedElement", JSON.stringify(el)));
        table.appendChild(btn);
    });
}

function updateBinary() {}
function updateQuantspark() {}
function updateChaosbloom() {}

document.addEventListener("DOMContentLoaded", buildPeriodicTable);
