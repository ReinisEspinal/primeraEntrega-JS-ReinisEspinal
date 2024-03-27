
main();

//Funcion principal
function main() {
    presentacion();
}

//Captura los datos y llama a las de mas funciones
function presentacion() {
    alert("Calculador de Prestamo Hipotecario\nDebe registrar: \n*El monto del prestamo\n*La tasa Anual\n*Perido de tiempo en años");
    let montoPrestamo = 0, tasaInteresAnual = 0, numeroCuotaAnual = 0;
    let result = 0;
    let continuarCalculadora = false;

    do {
        let repetirPregunta = 1;
        continuarCalculadora = true;

        montoPrestamo = Number(prompt("Monto prestamo :"));
        numeroCuotaAnual = Number(prompt("A cuanto años: "));
        tasaInteresAnual = Number(prompt("Tasa interes anual: "));

        if (verificarEntradaNumerica(montoPrestamo, tasaInteresAnual, numeroCuotaAnual) === true) {

            result = calculoCuota(montoPrestamo, tasaInteresAnual, numeroCuotaAnual);

            alert(`Debe pagar $${result}  ${numeroCuotaAnual * 12} por meses`);
        }
        while (repetirPregunta === 1) {
            repetirPregunta = Number(prompt("Desea repetir el programa ?\nDigite (1) para continuar.\nDigite (2) para salir."));
            if (repetirPregunta === 1) {
                continuarCalculadora = true;
                break;
            }
            else if (repetirPregunta != 1 && repetirPregunta != 2) {
                alert("Opcion no valida, digite la opcion correcta.");
                repetirPregunta = 1;
            }
            else {
                alert("El programa ha terminado.");
                continuarCalculadora = false;
            }

        }
    }
    while (continuarCalculadora === true);
}

//Calcula la cuota
function calculoCuota(montoPrestamoP, tasaInteresAnualP, numeroCuotaAnualP) {
    let calculoCuota = 0;
    numeroCuotaAnualP = numeroCuotaAnualP * 12;
    tasaInteresAnualP = (tasaInteresAnualP / 12) / 100;
    calculoCuota = (montoPrestamoP * tasaInteresAnualP / (1 - Math.pow((1 + tasaInteresAnualP), (-numeroCuotaAnualP)))).toFixed(2);

    return calculoCuota;
}

//Valida si hay numeros
function verificarEntradaNumerica(montoPrestamoP, tasaInteresAnualP, numeroCuotaAnualP) {

    let result = false;

    if (isNaN(montoPrestamoP) || isNaN(tasaInteresAnualP) || isNaN(numeroCuotaAnualP)) {
        alert("Solo digitar numeros");
        return result = false;
    }
    else {
        if (verificarValorNull(montoPrestamoP, tasaInteresAnualP, numeroCuotaAnualP)) {
            result = false;
        } else {
            result = true;
        }
    }
    return result;
}

//Valida si hay valores NULL
function verificarValorNull(a, b, c) {
    let result = false;
    if (a === 0 || b === 0 || c === 0) {
        alert("Completar todos los campos");
        result = true;
    }
    return result;
}
