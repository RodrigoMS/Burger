<!-- Conteudo da barra de navegacao -->
<template>
  <div id="main-banner">
    <h1>Make Your Burger</h1>
  </div>
</template>

<script>
  // Exportacao do componente.
  export default {
    // Nome do componente.
    name: 'Banner',

    // Permite que ocomponente receba dados.
    props: ["logo", "alt"],
  }
</script>

<!-- Scoped - A formatacao CSS sera aplicada apenas a este componente. -->
<style scoped>

  #main-banner {
    /* Sem ponto no inicio da URI, ele vai para a pasta "public". */
    background-image: url('/img/burger.jpg');

    /* 0 para o eixo X e -250 para o eixo Y */
    background-position: 0 60%;

    /* Nao repetir a imagem caso a tela diminua. */
    background-repeat: no-repeat;

    /* Redimenciona a imagem para cobrir todo o container. */
    /* Obs: Pode esticar a imagem e deixar deformada.      */
    background-size: 100vw auto;

    /* Altura do container. */
    height: calc(100vh - 250px);

    /* Proporcionar melhor alinhamento. */
    display: flex;

    /* Alinhar os elementos internos ao centro. */
    align-items: center;

    /* Conteudo alinhado a esquerda. */
    justify-content: flex-start;
  }

  #main-banner h1{
    color: #FFF;
    text-align: center;

    /* (Valor minino do tamanho da fonte, o valor desejavel, valor maximo permitido.) */
    /*font-size: clamp(3em, 3em + 1vw, 3.5em);*/
    font-size: calc(2em + 2vw);
    
    background-color: #222;
    padding: 20px 40px;
  }
</style>
