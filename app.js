alert('Boas-vindas ao jogo do número secreto!'); 
let numeroSecreto = 13;
let chute
let tentativas = 1;

while (chute != numeroSecreto)  {
    chute = prompt('Escolha um número entre 1 e 25');
    if (chute == numeroSecreto) {
        alert("Isso aí! Você descobriu o número secreto " + numeroSecreto +" com " + tentativas + " tentativas !");

    } else {
        if (chute > numeroSecreto) {
        alert ("O numeroSecreto é menor que " + chute + "!");
        } else {
        alert ("O numeroSecreto é maior que " + chute + "!");
        }
    }
     //tentativas = tentativas + 1;


 
     tentativas++;
  }

