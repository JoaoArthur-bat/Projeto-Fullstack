console.log("O JavaScript foi carregado com sucesso!");

const botaoAdicionar = document.querySelector('button');
const inputDescricao = document.querySelector('input[type="text"]');
const inputValor = document.querySelector('input[type="number"]');
const displaySaldo = document.querySelector('#balance h2');

const selectTipo = document.querySelector('#tipo-transacao');

let saldoSalvo = localStorage.getItem('saldoUsuario');
let saldoTotal = saldoSalvo ? parseFloat(saldoSalvo) : 0;

displaySaldo.innerHTML = `Saldo Atual: R$ ${saldoTotal.toFixed(2)}`;

function atualizarSaldo() {
    const descricao = inputDescricao.value;
    const valorDigitado = parseFloat(inputValor.value);

    if(descricao === "" || isNaN(valorDigitado)) {
        alert("Por favor, preencha a descricao e o valor corretamente!");
        return;
    }

    if (selectTipo.value === "saida") {
        saldoTotal -= valorDigitado;
    } else {
        saldoTotal += valorDigitado;
    }

    displaySaldo.innerHTML = `Saldo Atual: R$ ${saldoTotal.toFixed(2)}`;
    localStorage.setItem('saldoUsuario', saldoTotal);

    inputDescricao.value = "";
    inputValor.value = "";
    inputDescricao.focus();
}

botaoAdicionar.addEventListener("click", atualizarSaldo);