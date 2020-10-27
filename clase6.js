var luis = {
    nombre: 'Luis',
    apellido: 'Vargas',
    edad: 25
}

var dario = {
    nombre: 'Dario',
    apellido: 'Susnisky',
    edad: 25
}

function imprimirNombreEnMayusculas({nombre}) {
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(luis)
imprimirNombreEnMayusculas(dario)
imprimirNombreEnMayusculas({nombre: 'Pepito'})

