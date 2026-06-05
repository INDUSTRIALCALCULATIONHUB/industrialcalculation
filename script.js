function calculateDensity() {
    let T = parseFloat(document.getElementById("temp").value) + 273.15;
    let P = parseFloat(document.getElementById("pressure").value);

    let R = 287.05;

    let density = P / (R * T);
    let density_lb = density * 0.062428;

    document.getElementById("result").innerHTML =
        "Density: " + density.toFixed(2) + " kg/m³ | " +
        density_lb.toFixed(2) + " lb/ft³";
}

function resetForm() {
    document.getElementById("temp").value = "";
    document.getElementById("pressure").value = "";
    document.getElementById("result").innerHTML = "";
}
