const executar = () =>{
    const barra = Number(document.getElementById("opcao").value);
    const quantidade = Number(document.getElementById("quantidade").value);

    const calculo = (barra * 6) * quantidade;

    return document.getElementById("resposta").innerHTML =
    calculo.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 3
    });

}