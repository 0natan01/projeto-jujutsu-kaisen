const botoes = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
  
    botao.classList.add("selecionado");
    desativarImagem();
    removerBotaoAberto();
    
    imagens[indice].classList.add("selecionado");
  });
});

function desativarImagem() {
  const imagemAberta = document.querySelector(".personagem.selecionado");
  imagemAberta.classList.remove("selecionado");
}

function removerBotaoAberto() {
  const botaoAtivo = document.querySelector(".botao.selecionado")
  botaoAtivo.classList.remove("selecionado")
}
