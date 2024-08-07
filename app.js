alert('Boas-vindas ao jogo do número secreto'); 
let numeroSecreto = 13;
let chute=prompt('Escolha um número entre 1 e 30');
// se chute for igual ao número secreto
if(chute == numeroSecreto) {
    console.log('Isso aí! Você descobriu o número secreto (13)');

} else {
    alert ('Você errou :-(')
}
