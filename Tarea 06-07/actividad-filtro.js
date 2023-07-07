function filtroNumeros(arrayNumeros, string) {
    if (string === 'Par') {
        for (let itemPar of arrayNumeros) {
            if (itemPar % 2 === 0) {
                arrayFiltros.push(itemPar);
            }
        }
        console.log(arrayFiltros);
    }
    if (string === 'Impar') {
        for (let itemImpar of arrayNumeros) {
            if (itemImpar % 2 !== 0) {
                arrayFiltros.push(itemImpar);
            }
        }
        console.log(arrayFiltros);
    }
    if (string !== 'Par' && string !== 'Impar') {
        console.log('No se ha podido aplicar ningun filtro');
    }
}
let arrayFiltros = [];
filtroNumeros([1,2,5,10,19,25,33,100],'Par');