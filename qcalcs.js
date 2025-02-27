const periodicTable = [
    {s: "H", z: 1, m: 1.008}, {s: "He", z: 2, m: 4.002}, {s: "Li", z: 3, m: 6.941},
    {s: "Be", z: 4, m: 9.012}, {s: "B", z: 5, m: 10.811}, {s: "C", z: 6, m: 12.011},
    {s: "N", z: 7, m: 14.007}, {s: "O", z: 8, m: 15.999}, {s: "F", z: 9, m: 18.998},
    {s: "Ne", z: 10, m: 20.180}, {s: "Na", z: 11, m: 22.990}, {s: "Mg", z: 12, m: 24.305},
    {s: "Al", z: 13, m: 26.982}, {s: "Si", z: 14, m: 28.085}, {s: "P", z: 15, m: 30.974},
    {s: "S", z: 16, m: 32.06}, {s: "Cl", z: 17, m: 35.45}, {s: "Ar", z: 18, m: 39.948},
    {s: "K", z: 19, m: 39.098}, {s: "Ca", z: 20, m: 40.078}, {s: "Sc", z: 21, m: 44.956},
    {s: "Ti", z: 22, m: 47.867}, {s: "V", z: 23, m: 50.942}, {s: "Cr", z: 24, m: 51.996},
    {s: "Mn", z: 25, m: 54.938}, {s: "Fe", z: 26, m: 55.845}, {s: "Co", z: 27, m: 58.933},
    {s: "Ni", z: 28, m: 58.693}, {s: "Cu", z: 29, m: 63.546}, {s: "Zn", z: 30, m: 65.38},
    {s: "Ga", z: 31, m: 69.723}, {s: "Ge", z: 32, m: 72.630}, {s: "As", z: 33, m: 74.922},
    {s: "Se", z: 34, m: 78.971}, {s: "Br", z: 35, m: 79.904}, {s: "Kr", z: 36, m: 83.798},
    {s: "Rb", z: 37, m: 85.468}, {s: "Sr", z: 38, m: 87.62}, {s: "Y", z: 39, m: 88.906},
    {s: "Zr", z: 40, m: 91.224}, {s: "Nb", z: 41, m: 92.906}, {s: "Mo", z: 42, m: 95.95},
    {s: "Tc", z: 43, m: 98}, {s: "Ru", z: 44, m: 101.07}, {s: "Rh", z: 45, m: 102.91},
    {s: "Pd", z: 46, m: 106.42}, {s: "Ag", z: 47, m: 107.87}, {s: "Cd", z: 48, m: 112.41},
    {s: "In", z: 49, m: 114.82}, {s: "Sn", z: 50, m: 118.71}, {s: "Sb", z: 51, m: 121.76},
    {s: "Te", z: 52, m: 127.60}, {s: "I", z: 53, m: 126.90}, {s: "Xe", z: 54, m: 131.29},
    {s: "Cs", z: 55, m: 132.91}, {s: "Ba", z: 56, m: 137.33}, {s: "La", z: 57, m: 138.91},
    {s: "Ce", z: 58, m: 140.12}, {s: "Pr", z: 59, m: 140.91}, {s: "Nd", z: 60, m: 144.24},
    {s: "Pm", z: 61, m: 145}, {s: "Sm", z: 62, m: 150.36}, {s: "Eu", z: 63, m: 151.96},
    {s: "Gd", z: 64, m: 157.25}, {s: "Tb", z: 65, m: 158.93}, {s: "Dy", z: 66, m: 162.50},
    {s: "Ho", z: 67, m: 164.93}, {s: "Er", z: 68, m: 167.26}, {s: "Tm", z: 69, m: 168.93},
    {s: "Yb", z: 70, m: 173.05}, {s: "Lu", z: 71, m: 174.97}, {s: "Hf", z: 72, m: 178.49},
    {s: "Ta", z: 73, m: 180.95}, {s: "W", z: 74, m: 183.84}, {s: "Re", z: 75, m: 186.21},
    {s: "Os", z: 76, m: 190.23}, {s: "Ir", z: 77, m: 192.22}, {s: "Pt", z: 78, m: 195.08},
    {s: "Au", z: 79, m: 196.97}, {s: "Hg", z: 80, m: 200.59}, {s: "Tl", z: 81, m: 204.38},
    {s: "Pb", z: 82, m: 207.2}, {s: "Bi", z: 83, m: 208.98}, {s: "Po", z: 84, m: 209},
    {s: "At", z: 85, m: 210}, {s: "Rn", z: 86, m: 222}, {s: "Fr", z: 87, m: 223},
    {s: "Ra", z: 88, m: 226}, {s: "Ac", z: 89, m: 227}, {s: "Th", z: 90, m: 232.04},
    {s: "Pa", z: 91, m: 231.04}, {s: "U", z: 92, m: 238.03}, {s: "Np", z: 93, m: 237},
    {s: "Pu", z: 94, m: 244}, {s: "Am", z: 95, m: 243}, {s: "Cm", z: 96, m: 247},
    {s: "Bk", z: 97, m: 247}, {s: "Cf", z: 98, m: 251}, {s: "Es", z: 99, m: 252},
    {s: "Fm", z: 100, m: 257}, {s: "Md", z: 101, m: 258}, {s: "No", z: 102, m: 259},
    {s: "Lr", z: 103, m: 262}, {s: "Rf", z: 104, m: 267}, {s: "Db", z: 105, m: 268},
    {s: "Sg", z: 106, m: 269}, {s: "Bh", z: 107, m: 270}, {s: "Hs", z: 108, m: 269},
    {s: "Mt", z: 109, m: 278}, {s: "Ds", z: 110, m: 281}, {s: "Rg", z: 111, m: 280},
    {s: "Cn", z: 112, m: 285}, {s: "Nh", z: 113, m: 286}, {s: "Fl", z: 114, m: 289},
    {s: "Mc", z: 115, m: 289}, {s: "Lv", z: 116, m: 293}, {s: "Ts", z: 117, m: 294},
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
            updateQCalcs();
        });
        table.appendChild(btn);
    });
}

function updateQCalcs() {
    const el = JSON.parse(localStorage.getItem("selectedElement") || JSON.stringify(periodicTable[0]));
    document.getElementById("element-info").textContent = `Element: ${el.s} (Z: ${el.z}, m: ${el.m})`;
}

document.addEventListener("DOMContentLoaded", () => {
    buildPeriodicTable();
    updateQCalcs();
});
