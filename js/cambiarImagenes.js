document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("cambiarBtn");
    const imagenes = document.querySelectorAll(".icono-tec");

    const originales = [
        "img/htmlNormal.png",
        "img/cssNormal.png",
        "img/jsNormal.png",
        "img/pythonNormal.png",
        "img/javaNormal.png"
    ];

    const alternativas = [
        "img/html.png",
        "img/css.png",
        "img/js.png",
        "img/python.png",
        "img/java.png"
    ];

    let usandoAlternativas = false;

    boton.addEventListener("click", function () {
        imagenes.forEach((img, i) => {
            img.src = usandoAlternativas ? originales[i] : alternativas[i];
        });

        usandoAlternativas = !usandoAlternativas;

        boton.textContent = usandoAlternativas ? "No UwU" : "¿UwU?";
    });
});