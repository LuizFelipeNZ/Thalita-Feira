alert('Boas-vindas ao jogo do número secreto'); 
let numeroSecreto = 13;
let chute=prompt('Escolha um número entre 1 e 30');
// se chute for igual ao número secreto
if(chute == numeroSecreto) {
    console.log('Isso aí! Você descobriu o número secreto ${numeroSecreto}');

} else {
    alert ('Você errou :-(')
}
while (chute != numeroSecreto)  {
    chute = prompt('Escolha um número entre 1 e 10');
    if (chute == numeroSecreto) {
        alert('Isso aí! Você descobriu o número secreto ${numeroSecreto}');
    } else {
        if (chute > numeroSecreto) {
        alert (`O numeroSecreto é menor que ${chute}`);
        } else {
        alert (`O numeroSecreto é maior que ${chute}`);
        }
    }
  }

