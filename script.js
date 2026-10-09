/**
 * Alterna a imagem principal ao clicar nas miniaturas
 */
function trocarImagem(caminhoImagem, elementoClicado) {
  const mainImg = document.getElementById('mainImg');
  
  if (mainImg) {
    mainImg.src = caminhoImagem;
  }
  
  // Remove a classe 'active' de todas as miniaturas e adiciona na clicada
  const miniaturas = document.querySelectorAll('.thumb-item');
  miniaturas.forEach(thumb => thumb.classList.remove('active'));
  
  if (elementoClicado) {
    elementoClicado.classList.add('active');
  }
}