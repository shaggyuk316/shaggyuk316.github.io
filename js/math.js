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
    calculateResults();
});
