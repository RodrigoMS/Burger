<!-- Conteudo do footer -->
<template>
  <footer>
    <div id="footer">
      <p>Make Your Burger &copy; 2021</p>
    </div>
  </footer>
</template>

<script>
// Exportacao do componente.
export default {
  name: 'Footer',
}
</script>

<!-- Scoped - A formatacao CSS sera aplicada apenas a este componente. -->
<style scoped>
  footer {
    /* Preencher toda a largura horizontal. */
    width: 100%;

    /* Aplica degrade entre a cor vermelho e amarelo */
    background: linear-gradient(to right, yellow , red);

    /* Em cima, direita, em baixo, esquerda. */
    padding: 5px 0px 0px 0px; 
  }

  div#footer {
    /* Transforma a nav em flex container.     */
    /* Alinhando os itens um ao lado do outro. */
    display: flex;

    /* Alinha os itens no centro */
    justify-content: center;

    /* Centraliza os itens. */
    align-items: center;

    /* Altura do elemento. */
    height: 200px;

    /* Aplica cor ao elemento.*/
    background: #222;

    /* Cor da fonte */
    color: #FCBA03;
  }

</style>
