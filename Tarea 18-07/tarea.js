// 8) 
// const botonAgregaElemento = document.getElementById('botonElementos');
// const listaElementos = document.getElementById('lista');
// let numero = 0;

// botonAgregaElemento.addEventListener('click', function(){
//     let elementoLista = document.createElement('li');
//     listaElementos.appendChild(elementoLista);
//     elementoLista.innerText = `Elemento ${numero}`;
//     numero++;
// });

// 8) extra
const botonAgregaElemento = document.getElementById('botonElementos');
const listaElementos = document.getElementById('lista');

botonAgregaElemento.addEventListener('click', function(){
    let textoUsuario = prompt('Ingrese un texto')
    let elementoLista = document.createElement('li')
    listaElementos.appendChild(elementoLista);
    elementoLista.innerText = `${textoUsuario}`;
});

