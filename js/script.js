let inicial = document.querySelector('#inicial');
let final = document.querySelector('#final');
let tamanho = document.querySelector('#tamanho');
let btnAdiciona = document.querySelector('#btnAdiciona');

let btnAdicionaElemento = document.querySelector('#btnAdicionaElemento');
let btnMostrarLista = document.querySelector('#btnMostraLista');
let corpoTabela = document.querySelector('#corpo-tabela');

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

/*function listarElementos() {
    listaElementos.map((x, index) => {
        console.log(`x_${index} = ${x}`);
    });
    console.log(`A lista tem ${listaElementos.length} elementos`);
}

btnMostrarLista.addEventListener('click', listarElementos);*/


let minhaLista = [];

function adicionarLista(valor, x) {
    for (let i = 0; i < x; i++) {
        minhaLista.push(valor);
    }
}

adicionarLista(141, 13);
adicionarLista(146, 22);
adicionarLista(151, 35);
adicionarLista(156, 42);
adicionarLista(161, 38);
adicionarLista(166, 27);
adicionarLista(171, 18);
adicionarLista(176, 11);

let min = 140;
let max = 190;

let intervalos = [];

let a = 140;
let b = 140;
let intervalo = 5;

while (b <= max) {
    a = b;
    b = a + intervalo;
    //let media = (a + b) / 2;//acha a média do intervalo
    let quantidade = minhaLista.filter(x => x >= a && x < b);//filtra os elementos que estejam no intervalo
    if (quantidade.length !== 0) {
        intervalos.push([a, b, quantidade.length]);
    }
}

function gerarTabela() {
    let freqAcumulada = 0;
    let freqPercentualAcumulada = 0;
    let total = minhaLista.length;
    corpoTabela.innerHTML = '';
    intervalos.map((x, index) => {
        freqAcumulada += x[2];
        let freqRelativa = freqAcumulada / total;
        let freqRelativaPercentual = freqRelativa * 100.0;
        freqPercentualAcumulada = freqAcumulada / 2;

        corpoTabela.innerHTML +=
            `
            <tr>
                <th scope="row">${index+1}</th>
                <td>${x[0]} &#10152; ${x[1]}</td>
                <td>${x[2]}</td>
                <td>${freqAcumulada}</td>
                <td>${freqRelativa.toFixed(3)}</td>
                <td>${freqRelativaPercentual.toFixed(3)}</td>
                <td>${freqPercentualAcumulada}</td>
            </tr>
            `;
    });
}

btnMostrarLista.addEventListener('click', gerarTabela);