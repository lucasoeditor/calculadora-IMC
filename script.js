function calcularPeso () {
    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);

    if (peso <= 0 || altura <= 0) {
        document.getElementById("resultado").innerText = "Por favor, insira valores válidos (números positivos)."
        return
    }

    else {
        let IMC = peso / (altura * altura);

        document.getElementById("resultado").innerText = "Seu IMC é: " + IMC.toFixed(2);

        let check = checkIMC(IMC);

        document.getElementById("IMC").innerText = "Sua classificação de peso é: " + check;
        }

    
}

function checkIMC (IMC) {
    if (IMC < 18.5) {
        return "Abaixo do peso";
    }
    else if (IMC >= 18.5 && IMC <= 24.9) {
        return "Peso normal";
    }
    else if (IMC > 25.0) {
        return "Sobrepeso";
    }
}