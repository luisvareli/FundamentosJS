var luis = {
    nombre: 'Luis',
    apellido: 'Vargas',
    edad: 25,
    ingeniero: true,
    cocinero: false,
    cantante: true,
    dj:false,
    guitarrista: false,
    drone: false
}

var juan = {
    nombre: 'Juan',
    apellido: 'Gomez',
    edad: 13,
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`)

    if(persona.ingeniero){
        console.log('Ingeniero')
    } else {
        console.log('No es Ingeniero')
    }
    if(persona.cocinero){
        console.log('Cocinero')
    }
    if(persona.cantante){
        console.log('Cantante')
    }
    if(persona.dj){
        console.log('DJ')
    }
    if(persona.guitarrista){
        console.log('Guitarrista')
    }
    if(persona.drone){
        console.log('Piloto de drone')
    }
}

const MAYORIA_DE_EDAD = 18

const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD


function imprimirSiEsMayorDeEdad(persona) {
    if(esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}

function permitirAcceso(persona) {
    if(!esMayorDeEdad(persona)) {
        console.log('ACCESO DENEGADO')
    }
}