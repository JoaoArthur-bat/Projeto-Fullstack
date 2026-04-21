console.log("O JavaScript foi carregado com sucesso!");

const botaoAdicionar = document.querySelector('button');
const inputDescricao = document.querySelector('input[type="text"]');
const inputValor = document.querySelector('input[type="number"]');
const displaySaldo = document.querySelector('#balance h2');
const selectTipo = document.querySelector('#tipo-transacao');

const listaTransacoes = document.querySelector('#lista-transacoes');

let saldoSalvo = localStorage.getItem('saldoUsuario');
let saldoTotal = saldoSalvo ? parseFloat(saldoSalvo) : 0;

displaySaldo.innerHTML = `Saldo Atual: R$ ${saldoTotal.toFixed(2)}`;

function atualizarSaldo() {
    const descricao = inputDescricao.value;
    const valorDigitado = parseFloat(inputValor.value);
    
    const tipo = selectTipo.value; 

    if(descricao === "" || isNaN(valorDigitado)) {
        alert("Por favor, preencha a descricao e o valor corretamente!");
        return;
    }

    if (tipo === "saida") {
        saldoTotal -= valorDigitado;
    } else {
        saldoTotal += valorDigitado;
    }

    displaySaldo.innerHTML = `Saldo Atual: R$ ${saldoTotal.toFixed(2)}`;
    localStorage.setItem('saldoUsuario', saldoTotal);

    const novoItem = document.createElement('li'); 
    novoItem.innerHTML = `<span>${descricao}</span> <span>R$ ${valorDigitado.toFixed(2)}</span>`;

    if (tipo === "entrada") {
        novoItem.classList.add('item-entrada');
    } else {
        novoItem.classList.add('item-saida');
    }

    listaTransacoes.appendChild(novoItem);
   
    inputDescricao.value = "";
    inputValor.value = "";
    inputDescricao.focus();
}

botaoAdicionar.addEventListener("click", atualizarSaldo);