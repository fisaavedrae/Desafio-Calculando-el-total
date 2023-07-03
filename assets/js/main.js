let precio = 480000;
let valor = document.querySelector(".precio");
valor.innerHTML = "Precio $ " + precio.toLocaleString('es-ES');

function calcularValor() {

    let cantidad = document.getElementById('inputCantidad');
    let color = document.getElementById('inputColor');
    let total = precio * cantidad.value;

    console.log("Cantidad: " + cantidad.value);
    console.log("Color: " + color.value);
    console.log("Total: " + precio * cantidad.value);

    let divTotal = document.querySelector(".total");
    let divCantidad = document.querySelector(".cantidad");
    let divColor = document.querySelector(".color");

    divTotal.innerHTML = " $ : " + total.toLocaleString('es-ES');
    divCantidad.innerHTML = " " + cantidad.value;
    divColor.style.backgroundColor = color.value;
}