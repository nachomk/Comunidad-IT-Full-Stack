const persona1 = {
    nombre: 'Pedro',
    edad: 15
}
const persona2 = {
    nombre: 'Ana',
    edad: 29
}
function esMayorDeEdad(dato) {
    if (dato.edad >= 18) {
        console.log(`${dato.nombre} es mayor de edad`);
    } else {
        console.log(`${dato.nombre} es menor de edad`);
    }
}

esMayorDeEdad(persona1);
esMayorDeEdad(persona2);