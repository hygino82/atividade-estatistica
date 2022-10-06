let inicial = document.querySelector('#inicial');
let final = document.querySelector('#final');
let tamanho = document.querySelector('#tamanho');
let btnAdiciona = document.querySelector('#btnAdiciona');

let btnAdicionaElemento = document.querySelector('#btnAdicionaElemento');
let btnMostrarLista = document.querySelector('#btnMostraLista')

let listaIntervalo = [];
let listaElementos = [];

function adicionaIntervalos() {
    listaIntervalo = [];

    let inicio = Number(inicial.value);
    let fim = Number(final.value);
    let intervalo = Number(tamanho.value);

    let contador = 0;
    let a = inicio, b = 0;

    listaIntervalo.push(inicio);
    //intervalo.push(inicio);

    console.log(`inicio=${inicio}  fim=${fim} intervalo=${intervalo}`);
    while (b < fim) {
        a = b;
        b += intervalo;
        listaIntervalo.push(b);
        contador++;
        //console.log(`a =${a}  b=${b} contador=${contador}`);
    }

    listaIntervalo.map(x => console.log(x));
}

btnAdiciona.addEventListener('click', adicionaIntervalos);

function adicionarElemento() {
    let valor = Number(document.getElementById('valor').value);

    listaElementos.push(valor);
    //console.log(`Adicionado o valor ${valor}`);
}

btnAdicionaElemento.addEventListener('click', adicionarElemento);

function listarElementos() {
    listaElementos.map((x, index) => {
        console.log(`x_${index} = ${x}`);
    });
    console.log(`A lista tem ${listaElementos.length} elementos`);
}

btnMostrarLista.addEventListener('click', listarElementos);