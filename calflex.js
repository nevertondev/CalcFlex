var etanol, gasolina;

function calcular() {
    etanol = parseFloat(calFlex.txtEtanol.value);
    gasolina = parseFloat(calFlex.txtGasolina.value);

    if (etanol < 0.7 * gasolina) {
        document.getElementById("status").src = "imgflex/e.png";
    }
    else {
        document.getElementById("status").src = "imgflex/g.png";
    }
}
function resetar() {
    document.getElementById("status").src = "imgflex/meio.png";
}

