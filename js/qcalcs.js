function simulateQCalcs(n, t_start = 1e-108, e_base = 1e-93) {
    const q_calcs = [];
    for (let i = 1; i <= n; i++) {
        const t = t_start * Math.pow(10, (i - 1) / 9);
        const r = Math.random();
        const e = i * Math.sqrt(e_base * r) * Math.PI;
        const x = (Math.random() - 0.5) * 2e-100;
        const y = (Math.random() - 0.5) * 2e-100;
        const z = (Math.random() - 0.5) * 2e-100;
        q_calcs.push({
            step: i,
            time: t.toExponential(2),
            energy: e.toExponential(2),
            position: `(${x.toExponential(2)}, ${y.toExponential(2)}, ${z.toExponential(2)})`
        });
    }
    return q_calcs;
}

document.addEventListener("DOMContentLoaded", () => {
    const q_results = simulateQCalcs(10);
    const table = document.getElementById("qcalcsTable");
    q_results.forEach(result => {
        const row = table.insertRow();
        row.insertCell().textContent = result.step;
        row.insertCell().textContent = result.time;
        row.insertCell().textContent = result.energy;
        row.insertCell().textContent = result.position;
    });
});
