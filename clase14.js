var luis = {
    nombre: 'Luis',
    apellido: 'Vargas',
    edad: 25,
    peso: 70
}

console.log(`Al inicio del año ${luis.nombre} pesa ${luis.peso}kg`)


const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = luis.peso - 3
var dias = 0

while (luis.peso > META) {
    if (comeMucho()) {
        aumentarDePeso(luis)
    }
    if (realizaDeporte()) {
        adelgazar(luis)
    }
    dias += 1
}

console.log(`Pasaron ${dias} dias hasta que ${luis.nombre} adelgazo 3kg`)