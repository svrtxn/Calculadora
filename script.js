let pantalla = document.getElementById('pantalla');

function limpiarPantalla() {
    pantalla.value = "";
}

function agregarPantalla(valor) {
    pantalla.value += valor;
}

function calcularResultado() {
    try {
        let expresion = pantalla.value;

        expresion = expresion.replace(/(\d+(?:\.\d+)?)%(\d+(?:\.\d+)?)/g, '($2*$1/100)');

        const resultado = eval(expresion);
        pantalla.value = resultado;
    } catch (error) {
        pantalla.value = "Error";
    }
}
