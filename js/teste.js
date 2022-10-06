function repetir(valor, x) {
    let lista = [];
    for (let i = 0; i < x; i++) {
        lista.push(valor);
    }
    return lista;
}

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

console.log(minhaLista);