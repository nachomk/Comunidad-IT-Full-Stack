// 8)
// const botonAgregaElemento = document.getElementById('botonElementos');
// const listaElementos = document.getElementById('lista');
// let textoUsuario = prompt('Ingrese un texto')

// botonAgregaElemento.addEventListener('click', function(){
//     let elementoLista = document.createElement('li')
//     listaElementos.appendChild(elementoLista);
//     elementoLista.innerText = `${textoUsuario}`;
// });

// 8) extra
const botonAgregaElemento = document.getElementById('botonElementos');
const listaElementos = document.getElementById('lista');
let numero = 0;

botonAgregaElemento.addEventListener('click', function(){
    let elementoLista = document.createElement('li')
    listaElementos.appendChild(elementoLista);
    elementoLista.innerText = `Elemento ${numero}`;
    numero++;
});