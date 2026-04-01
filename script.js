console.log("O JavaScript foi carregado com sucesso!");
const botaoAdicionar = document.querySelector('button');
const inputDescricao = document.querySelector('input[type="text"]');
const inputValor = document.querySelector('input[type="number"]');
const displaySaldo = document.querySelector('#balance h2');

let saldoTotal = 0;

function atualizarSaldo() {
    const descricao = inputDescricao.value;
    const valorDigitado = parseFloat(inputValor.value);

if(descricao === "" || isNaN(valorDigitado)) {
    alert("Por favor, preencha a descricao e o valor corretamente!");
    return;
}

saldoTotal += valorDigitado;

displaySaldo.innerHTML = `Saldo Atual : R$ ${saldoTotal.toFixed(2)}`;

inputDescricao.value = "";
inputValor.value ="";
inputDescricao.focus();
}
botaoAdicionar.addEventListener("click", atualizarSaldo);

