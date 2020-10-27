var  signo = prompt('¿Cúal es tu signo?')

switch(signo) {
    case 'acuario':
        console.log('Transitará un día fuera de lo común donde podrá aplicar su lado más perceptivo y libre. Haga lo que haga, se sentirá espléndido. Nadie podrá opacarlo.')
        break
    case 'piscis':
        console.log('Sepa que hoy despertará con mucha energía y con ganas de encontrar la felicidad después de tanto sufrimiento. Aproveche que se sentirá más jovial que nunca.')
        break
    case 'cancer':
        console.log('Después de tantos inconvenientes, sería óptimo que organice adecuadamente su vida personal. Haga los cambios que crea necesarios comenzando por su hogar.')
        break
    case 'libra':
        console.log('Momento oportuno para que empiece a creer en su imaginación, la cual será indispensable para resolver cualquiera de los inconvenientes que aparezcan.')
        break
    case 'escorpio':
        console.log('Si usted pretende cumplir con todos los objetivos, debería poner más entusiasmo en lo que hace. Evite relajarse, ya que podría perder cualquier oportunidad.')
        break
    case 'sagitario':
        console.log('Antes de avanzar, primero deberá tener en claro a dónde quiere llegar. Sepa que contará con el empuje necesario para conquistar todo lo que desee.')
        break
    case 'virgo':
        console.log('Sera una jornada donde se enfrentará con demasiadas opciones y tendrá que decidir la más conveniente. Relájese y espere a mañana para la determinación.')
        break
    case 'leo':
        console.log('Ponga todo su entusiasmo para poder concretar las metas. Ante todo, deberá tener en claro qué es lo que quiere realmente y esforzarse por conseguirlo.')
        break
    case 'capricornio':
        console.log('Prepárese, ya que será una excelente jornada para concretar esos proyectos pendiente que hace tiempo tiene y se le dificultó alcanzar por su irresponsabilidad.')
        break
    case 'aries':
        console.log('Deje de cometer siempre el mismo error al desvalorizarse continuamente. Aunque usted no lo vea, sus méritos son muy bien reconocidos por la gente que lo rodea.')
        break
    case 'tauro':
        console.log('No quiera volver a vivir sus viejas historias, intente abandonar su pasado. Comience a sobrellevar el presente de otra manera y se sentirá menos angustiado.')
        break
    case 'geminis':
        console.log('Transitará un excelente momento para poner todo su esfuerzo y apostar a las cosas materiales con las que siempre soñó. Gracias a su inteligencia lo conseguirá.')
        break
    default:
        console.log('No es un signo zodiacal valido')
        break
}

