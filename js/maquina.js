const texto = "De ideas a realidad";
let i = 0;

function escribir() {
    if (i < texto.length) {
        document.getElementById("frase").textContent += texto.charAt(i);
        i++;
        setTimeout(escribir, 60);
    }
}

window.addEventListener("load", escribir);