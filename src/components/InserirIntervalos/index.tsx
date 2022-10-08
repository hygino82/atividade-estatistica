import { useState } from "react";

function InserirIntervalos() {

    const [inicio, setInicio] = useState<Number>();
    const [fim, setFim] = useState<Number>();
    const [tamanho, setTamanho] = useState<Number>();

    function mudarInicio(event: any) {
        event.preventDefault();
        const pontoInicial = Number(event.target.value);
        setInicio(pontoInicial);
    }

    function mudarFim(event: any) {
        event.preventDefault();
        const pontoFinal = Number(event.target.value);
        setFim(pontoFinal);
    }

    function mudarTamanho(event: any) {
        event.preventDefault();
        const novoTamanho = Number(event.target.value);
        setTamanho(novoTamanho);
    }

    function geraIntervalos() {
        console.log(`O valor de início é ${inicio}, do fim ${fim} e o tamanho ${tamanho}`);
    }

    return (
        <div className="container">
            <label htmlFor="inicio">Início</label>
            <input type="number" id="inicio" onChange={mudarInicio} /><br />
            <label htmlFor="fim">Fim</label>
            <input type="number" id="fim" onChange={mudarFim} /><br />
            <label htmlFor="tamanho">Tamanho dos intervalos</label>
            <input type="number" id="tamanho" onChange={mudarTamanho} /><br />
            <button type="submit" className="btn btn-primary" onClick={geraIntervalos}>Gerar intervalos</button>
        </div>
    )
}

export default InserirIntervalos;