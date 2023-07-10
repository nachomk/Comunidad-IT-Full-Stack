function encontrarPalabraMasLarga(frase) {
    const frasePasadaArray = frase.split(' ');
    palabraMasLarga = '';
    for (let palabra of frasePasadaArray) {
        if (palabra.length > palabraMasLarga.length){
            palabraMasLarga = palabra;
        }
    }
    console.log(palabraMasLarga);
}
encontrarPalabraMasLarga('Ayer iba caminando por Avenida Corrientes y me cruze con mi dermatologo el señor Fernandez con su perro Estanislao');