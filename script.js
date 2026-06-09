/* ================================
   AIR DENSITY CALCULATOR (SAFE + PROFESSIONAL)
================================ */

function calculateDensity() {

    let tempInput = document.getElementById("temp").value;
    let pressureInput = document.getElementById("pressure").value;
    let resultBox = document.getElementById("result");

    let T = parseFloat(tempInput);
    let P = parseFloat(pressureInput);

    // Validation (GLOBAL STANDARD)
    if (isNaN(T) || isNaN(P)) {
        resultBox.innerHTML = "⚠ Please enter valid temperature and pressure values.";
        return;
    }

    // Convert to Kelvin
    T = T + 273.15;

    // Gas constant (air)
    const R = 287.05;

    // Density calculation
    let density = P / (R * T);

    // lb/ft³ conversion
    let density_lb = density * 0.062428;

    resultBox.innerHTML =
        "Density: " + density.toFixed(3) + " kg/m³<br>" +
        "Density: " + density_lb.toFixed(3) + " lb/ft³";
}


/* ================================
   RESET FUNCTION (GLOBAL SAFE)
================================ */

function resetForm() {

    let temp = document.getElementById("temp");
    let pressure = document.getElementById("pressure");
    let result = document.getElementById("result");

    if (temp) temp.value = "";
    if (pressure) pressure.value = "";
    if (result) result.innerHTML = "";
}


/* ================================
   GLOBAL SAFETY HELPERS (FUTURE EXPANSION READY)
================================ */

// Prevent empty/invalid numeric input globally
function safeNumber(value) {
    let num = parseFloat(value);
    return isNaN(num) ? null : num;
}

// Format number consistently across all tools
function formatNumber(num, decimals = 3) {
    return Number(num).toFixed(decimals);
}
