let listaNumerosSorteados = [];
let numeroLimite = 10;
// let numeroSecreto = 1;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}
function exibirMensagemIncial() {
    exibirTextoNaTela('h1', 'jogo do numero secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
}

exibirMensagemIncial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
            if (chute > numeroSecreto)  {
            exibirTextoNaTela('p', 'O numero secreto é menor');
            } else {
            exibirTextoNaTela('p', 'O numero secreto é maior');
            }
        tentativas++;
        limparCampo();
    }  
}

    //    console.log(chute == numeroSecreto);


function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosLista = numeroLimite;
    if(quantidadeElementosLista == 3) {
        listaNumerosSorteados = []; 
    }
    if(listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados)
        return numeroEscolhido;
    }
}
function limparCampo() {
        chute = document.querySelector('input');
        chute.value = '';
    }                    

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemIncial();
    document.getElementById('reiniciar').setAttribute('disabled',true);

}




