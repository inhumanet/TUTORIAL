//alert("Seja bem-vind@");
//console.log('oi');
//console.log(document);



/*modelo get 
const botao = document.getElementById('botao')
console.log(botao)
*/


/*
## ALGORITMO E LÓGICA DO JAVASCRIPT

- Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 
  Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 
  Passo 2 - identificar o clique no botão 
  Passo 3 - adicionar a classe ativo nos projetos escondidos 

- Objetivo 2 - esconder o botão de mostrar mais 
  Passo 1 - pegar o botão e esconder ele *
*/


//- Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
//va pro passo 1

//Passo 3 - adicionar a classe ativo nos projetos escondidos 
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');
//console.log(projetosInativos);
//volta no passo2

//Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 
//console.log(botaoMostrarProjetos);


// Passo 2 - identificar o clique no botão 

botaoMostrarProjetos.addEventListener('click', () => { //arrow function
// Passo 2 - identificar o clique no botão 
//console.log("teste");
//clique no botao e vai aparecer a mensagem, depois vá criar a constante no passo 3 fora do laço 

//Passo 3 - adicionar a classe ativo nos projetos escondidos 
projetosInativos.forEach(projetosNaoAtivos =>{
//console.log(projetosNaoAtivos);
projetosNaoAtivos.classList.add('ativo');
//vá para o objetivo 2 esconder botão
})

/*- Objetivo 2 - esconder o botão de mostrar mais 
  Passo 1 - pegar o botão e esconder ele */
  botaoMostrarProjetos.classList.add("remover")
})



