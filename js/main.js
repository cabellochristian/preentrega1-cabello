const pizaaChica = 4000;
const pizzaMediana = 6000;
const pizzaGrande = 8000;
const descuentoPromocion = 0.1; // Descuento del 10%

const mensajeBienvenida = "¡Bienvenido a Tienda Online!\n\nPrecios:\n- Pizza Chica $" + pizaaChica + ".\n- Pizza Mediana $" + pizzaMediana + ".\n- Pizza Grande $" + pizzaGrande + ".\n\nElegí a continuación la cantidad y el producto.";

const mensajeMenu = "Menu de Productos:\n\n1. Pizza Chica\n2. Pizza Mediana\n3. Pizza Grande";

alert(mensajeBienvenida);

let cantidadDeProductos = Number(prompt("Ingresa la cantidad de productos que deseas:"));
let productoElegido = "";
let precioUnitario = 0;

while (productoElegido === "") {
    const opcion = Number(prompt(mensajeMenu + "\n\nIngresa el número de opción elegida:"));

    switch (opcion) {
        case 1:
            productoElegido = "Pizza Chica";
            precioUnitario = pizaaChica;
            break;
        case 2:
            productoElegido = "Pizza Mediana";
            precioUnitario = pizzaMediana;
            break;
        case 3:
            productoElegido = "Pizza Grande";
            precioUnitario = pizzaGrande;
            break;
        default:
            alert("Opción inválida. Ingresa un número del 1 al 3.");
            break;
    }
}

alert("Elegiste " + cantidadDeProductos + " " + productoElegido + "(s).");
console.log("El cliente eligió " + cantidadDeProductos + " " + productoElegido + "(s).");

const totalAPagar = cantidadDeProductos * precioUnitario;

alert("Tu total es $" + totalAPagar + ".");

let cantidadPagada = Number(prompt("Ingresa la cantidad de dinero que vas a pagar:"));

while (isNaN(cantidadPagada) || cantidadPagada < totalAPagar) {
    if (isNaN(cantidadPagada)) {
        alert("Cantidad incorrecta. Ingresa un número válido.");
    } else if (cantidadPagada < totalAPagar) {
        alert("La cantidad ingresada es menor al total a pagar.");
    }
    cantidadPagada = Number(prompt("Ingresa la cantidad de dinero que vas a pagar:"));
}

let codigoPromocion = prompt('¿Tienes un código de promoción? Ingresa el código (si no tienes, deja el campo vacío):');
let descuento = 0;

if (codigoPromocion === "PROMO10") { // Ejemplo de código de promoción válido
    descuento = totalAPagar * descuentoPromocion;
    alert("Se aplicó un descuento del 10% con el código de promoción.");
} else {
    alert("El código de promoción ingresado no es válido.");
}

const totalConDescuento = totalAPagar - descuento;
const vuelto = cantidadPagada - totalConDescuento;

alert("Tu total con descuento es $" + totalConDescuento + ".\nTu vuelto es $" + vuelto + ".");
console.log("El cliente pagó $" + cantidadPagada + ", recibió $" + vuelto + " de vuelto y obtuvo un descuento de $" + descuento + ".");
console.log("Fin del programa.");



