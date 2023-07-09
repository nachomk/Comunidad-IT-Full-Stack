const persona1 = {
    nombre: 'Pedro',
    edad: 15
}
const persona2 = {
    nombre: 'Ana',
    edad: 29
}
function esMayorDeEdad(persona) {
    if (persona.edad >= 18) {
        console.log(`${persona.nombre} es mayor de edad`);
    } else {
        console.log(`${persona.nombre} es menor de edad`);
    }
}

esMayorDeEdad(persona1);
esMayorDeEdad(persona2);