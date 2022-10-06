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
let tamanho = 5;

while (b <= max) {
    a = b;
    b = a + tamanho;
    //let media = (a + b) / 2;//acha a média do intervalo
    let quantidade = minhaLista.filter(x => x >= a && x < b);//filtra os elementos que estejam no intervalo
    if (quantidade.length !== 0) {
        intervalos.push([a, b, quantidade.length]);
    }
}

console.log(intervalos);

console.log(`Sua amostra possui ${intervalos.length} intervalos`);

intervalos.map((x) => console.log(x));

let total = minhaLista.length;
console.log(`A lista possui um total de ${total} elementos.`);

console.log('Estatura\tF\tFa\tFr\tFp\tFpa');

let freqAcumulada = 0;
let freqPercentualAcumulada = 0;

intervalos.map((x, index) => {
    freqAcumulada += x[2];
    let freqRelativa = freqAcumulada / total;
    let freqRelativaPercentual = freqRelativa * 100.0;
    freqPercentualAcumulada += freqRelativaPercentual;
    console.log(`${x[0]} |-- ${x[1]}\t${x[2]}\t${freqAcumulada}\t${freqRelativa.toFixed(3)}\t${freqRelativaPercentual.toFixed(3)}\t${freqPercentualAcumulada}`);
});




