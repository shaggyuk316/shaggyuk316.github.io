const periodicTable = [
    {symbol: "H", atomicNumber: 1, mass: 1.008}, {symbol: "He", atomicNumber: 2, mass: 4.002},
    {symbol: "Li", atomicNumber: 3, mass: 6.941}, {symbol: "Be", atomicNumber: 4, mass: 9.012},
    {symbol: "B", atomicNumber: 5, mass: 10.811}, {symbol: "C", atomicNumber: 6, mass: 12.011},
    {symbol: "N", atomicNumber: 7, mass: 14.007}, {symbol: "O", atomicNumber: 8, mass: 15.999},
    {symbol: "F", atomicNumber: 9, mass: 18.998}, {symbol: "Ne", atomicNumber: 10, mass: 20.180},
    {symbol: "Na", atomicNumber: 11, mass: 22.990}, {symbol: "Mg", atomicNumber: 12, mass: 24.305},
    {symbol: "Al", atomicNumber: 13, mass: 26.982}, {symbol: "Si", atomicNumber: 14, mass: 28.085},
    {symbol: "P", atomicNumber: 15, mass: 30.974}, {symbol: "S", atomicNumber: 16, mass: 32.06},
    {symbol: "Cl", atomicNumber: 17, mass: 35.45}, {symbol: "Ar", atomicNumber: 18, mass: 39.948},
    {symbol: "K", atomicNumber: 19, mass: 39.098}, {symbol: "Ca", atomicNumber: 20, mass: 40.078},
    {symbol: "Sc", atomicNumber: 21, mass: 44.956}, {symbol: "Ti", atomicNumber: 22, mass: 47.867},
    {symbol: "V", atomicNumber: 23, mass: 50.942}, {symbol: "Cr", atomicNumber: 24, mass: 51.996},
    {symbol: "Mn", atomicNumber: 25, mass: 54.938}, {symbol: "Fe", atomicNumber: 26, mass: 55.845},
    {symbol: "Co", atomicNumber: 27, mass: 58.933}, {symbol: "Ni", atomicNumber: 28, mass: 58.693},
    {symbol: "Cu", atomicNumber: 29, mass: 63.546}, {symbol: "Zn", atomicNumber: 30, mass: 65.38},
    {symbol: "Ga", atomicNumber: 31, mass: 69.723}, {symbol: "Ge", atomicNumber: 32, mass: 72.630},
    {symbol: "As", atomicNumber: 33, mass: 74.922}, {symbol: "Se", atomicNumber: 34, mass: 78.971},
    {symbol: "Br", atomicNumber: 35, mass: 79.904}, {symbol: "Kr", atomicNumber: 36, mass: 83.798},
    {symbol: "Rb", atomicNumber: 37, mass: 85.468}, {symbol: "Sr", atomicNumber: 38, mass: 87.62},
    {symbol: "Y", atomicNumber: 39, mass: 88.906}, {symbol: "Zr", atomicNumber: 40, mass: 91.224},
    {symbol: "Nb", atomicNumber: 41, mass: 92.906}, {symbol: "Mo", atomicNumber: 42, mass: 95.95},
    {symbol: "Tc", atomicNumber: 43, mass: 98}, {symbol: "Ru", atomicNumber: 44, mass: 101.07},
    {symbol: "Rh", atomicNumber: 45, mass: 102.91}, {symbol: "Pd", atomicNumber: 46, mass: 106.42},
    {symbol: "Ag", atomicNumber: 47, mass: 107.87}, {symbol: "Cd", atomicNumber: 48, mass: 112.41},
    {symbol: "In", atomicNumber: 49, mass: 114.82}, {symbol: "Sn", atomicNumber: 50, mass: 118.71},
    {symbol: "Sb", atomicNumber: 51, mass: 121.76}, {symbol: "Te", atomicNumber: 52, mass: 127.60},
    {symbol: "I", atomicNumber: 53, mass: 126.90}, {symbol: "Xe", atomicNumber: 54, mass: 131.29},
    {symbol: "Cs", atomicNumber: 55, mass: 132.91}, {symbol: "Ba", atomicNumber: 56, mass: 137.33},
    {symbol: "La", atomicNumber: 57, mass: 138.91}, {symbol: "Ce", atomicNumber: 58, mass: 140.12},
    {symbol: "Pr", atomicNumber: 59, mass: 140.91}, {symbol: "Nd", atomicNumber: 60, mass: 144.24},
    {symbol: "Pm", atomicNumber: 61, mass: 145}, {symbol: "Sm", atomicNumber: 62, mass: 150.36},
    {symbol: "Eu", atomicNumber: 63, mass: 151.96}, {symbol: "Gd", atomicNumber: 64, mass: 157.25},
    {symbol: "Tb", atomicNumber: 65, mass: 158.93}, {symbol: "Dy", atomicNumber: 66, mass: 162.50},
    {symbol: "Ho", atomicNumber: 67, mass: 164.93}, {symbol: "Er", atomicNumber: 68, mass: 167.26},
    {symbol: "Tm", atomicNumber: 69, mass: 168.93}, {symbol: "Yb", atomicNumber: 70, mass: 173.05},
    {symbol: "Lu", atomicNumber: 71, mass: 174.97}, {symbol: "Hf", atomicNumber: 72, mass: 178.49},
    {symbol: "Ta", atomicNumber: 73, mass: 180.95}, {symbol: "W", atomicNumber: 74, mass: 183.84},
    {symbol: "Re", atomicNumber: 75, mass: 186.21}, {symbol: "Os", atomicNumber: 76, mass: 190.23},
    {symbol: "Ir", atomicNumber: 77, mass: 192.22}, {symbol: "Pt", atomicNumber: 78, mass: 195.08},
    {symbol: "Au", atomicNumber: 79, mass: 196.97}, {symbol: "Hg", atomicNumber: 80, mass: 200.59},
    {symbol: "Tl", atomicNumber: 81, mass: 204.38}, {symbol: "Pb", atomicNumber: 82, mass: 207.2},
    {symbol: "Bi", atomicNumber: 83, mass: 208.98}, {symbol: "Po", atomicNumber: 84, mass: 209},
    {symbol: "At", atomicNumber: 85, mass: 210}, {symbol: "Rn", atomicNumber: 86, mass: 222},
    {symbol: "Fr", atomicNumber: 87, mass: 223}, {symbol: "Ra", atomicNumber: 88, mass: 226},
    {symbol: "Ac", atomicNumber: 89, mass: 227}, {symbol: "Th", atomicNumber: 90, mass: 232.04},
    {symbol: "Pa", atomicNumber: 91, mass: 231.04}, {symbol: "U", atomicNumber: 92, mass: 238.03},
    {symbol: "Np", atomicNumber: 93, mass: 237}, {symbol: "Pu", atomicNumber: 94, mass: 244},
    {symbol: "Am", atomicNumber: 95, mass: 243}, {symbol: "Cm", atomicNumber: 96, mass: 247},
    {symbol: "Bk", atomicNumber: 97, mass: 247}, {symbol: "Cf", atomicNumber: 98, mass: 251},
    {symbol: "Es", atomicNumber: 99, mass: 252}, {symbol: "Fm", atomicNumber: 100, mass: 257},
    {symbol: "Md", atomicNumber: 101, mass: 258}, {symbol: "No", atomicNumber: 102, mass: 259},
    {symbol: "Lr", atomicNumber: 103, mass: 262}, {symbol: "Rf", atomicNumber: 104, mass: 267},
    {symbol: "Db", atomicNumber: 105, mass: 268}, {symbol: "Sg", atomicNumber: 106, mass: 269},
    {symbol: "Bh", atomicNumber: 107, mass: 270}, {symbol: "Hs", atomicNumber: 108, mass: 269},
    {symbol: "Mt", atomicNumber: 109, mass: 278}, {symbol: "Ds", atomicNumber: 110, mass: 281},
    {symbol: "Rg", atomicNumber: 111, mass: 280}, {symbol: "Cn", atomicNumber: 112, mass: 285},
    {symbol: "Nh", atomicNumber: 113, mass: 286}, {symbol: "Fl", atomicNumber: 114, mass: 289},
    {symbol: "Mc", atomicNumber: 115, mass: 289}, {symbol: "Lv", atomicNumber: 116, mass: 293},
    {symbol: "Ts", atomicNumber: 117, mass: 294}, {symbol: "Og", atomicNumber: 118, mass: 294}
];

function buildPeriodicTable() {
    const table = document.getElementById("periodic-table");
    periodicTable.forEach((element, index) => {
        const btn = document.createElement("button");
        btn.className = "element";
        btn.innerHTML = `<span>${element.atomicNumber}</span>${element.symbol}`;
        btn.dataset.atomicNumber = element.atomicNumber;
        btn.dataset.mass = element.mass;
        btn.style.gridColumn = (index < 2) ? (index + 1) : ((index >= 2 && index < 18) ? (index - 1) : ((index >= 18 && index < 54) ? (index - 17) : (index - 53)));
        btn.style.gridRow = (index < 2) ? 1 : ((index >= 2 && index < 10) ? 2 : ((index >= 10 && index < 18) ? 3 : ((index >= 18 && index < 36) ? 4 : ((index >= 36 && index < 54) ? 5 : ((index >= 54 && index < 86) ? 6 : 7)))));
        btn.addEventListener("click", () => {
            localStorage.setItem("selectedElement", JSON.stringify(element));
            calculateResults();
        });
        table.appendChild(btn);
    });
}

function calculateResults() {
    const z = parseFloat(document.getElementById("z").value);
    const mass = parseFloat(document.getElementById("mass").value);
    const vibration = parseFloat(document.getElementById("vibration").value);
    const charge = parseFloat(document.getElementById("charge").value);
    const density = parseFloat(document.getElementById("density").value);

    const k_v = 1e-50, k_q = 1e-50, G = 6.674e-11;
    const binaryResult = z * Math.sqrt(mass) * (vibration + k_q * charge) * density;
    const quantsparkResult = z * Math.sqrt(mass * 1e-93) * (vibration + k_q * charge) * density;
    const chaosbloomResult = z * (vibration + k_q * charge) * density + G * mass;

    document.getElementById("binaryResult").textContent = binaryResult.toExponential(2);
    document.getElementById("quantsparkResult").textContent = quantsparkResult.toExponential(2);
    document.getElementById("chaosbloomResult").textContent = chaosbloomResult.toExponential(2);
}

document.addEventListener("DOMContentLoaded", () => {
    buildPeriodicTable();
    calculateResults();
});
