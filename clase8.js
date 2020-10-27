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

function imprimirNombreEnMayusculas(persona) {
    //var nombre = persona.nombre
    var {nombre} = persona
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(luis)
imprimirNombreEnMayusculas(dario)
// imprimirNombreEnMayusculas({nombre: 'Pepito'})

function cumpleanos(persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }
}



