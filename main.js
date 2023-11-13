function verificarRodizio() {
    const finalPlaca = document.getElementById("finalPlaca").value;
    const diaSemana = document.getElementById("diaSemana").value;
    const areaRodizio = document.getElementById("areaRodizio").checked;

    if ((diaSemana === "sabado" || diaSemana === "domingo") || !areaRodizio) {
        document.getElementById("result").innerText = "Não há rodízio.";
    } else {
        const rodizioAtivo = (diaSemana === "segunda" && (finalPlaca === "1" || finalPlaca === "2")) ||
                            (diaSemana === "terca" && (finalPlaca === "3" || finalPlaca === "4")) ||
                            (diaSemana === "quarta" && (finalPlaca === "5" || finalPlaca === "6")) ||
                            (diaSemana === "quinta" && (finalPlaca === "7" || finalPlaca === "8")) ||
                            (diaSemana === "sexta" && (finalPlaca === "9" || finalPlaca === "0"));

        document.getElementById("result").innerText = rodizioAtivo ? "Rodízio ativo." : "Não há rodízio.";
    }
}