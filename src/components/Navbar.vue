<!-- Conteudo da barra de navegacao -->
<template>
  <nav >
    <div id="nav">
        <router-link to="/" id="logo_url">
          <!-- v-bind ou : - permite o uso de dados dinamicos -->
          <!-- recebendo os dados do componente App. -->
          <img v-bind:src="logo" :alt="alt" id="logo">
        </router-link>

        <!-- to - Representa a rota do link. -->
        <router-link to="/">Home</router-link>
        <router-link to="/requests">Pedidos</router-link>
    </div>
  </nav>

</template>

<script>
  // Exportacao do componente.
  export default {
    // Nome do componente.
    name: 'Navbar',

    // Permite que ocomponente receba dados.
    props: ["logo", "alt"],
  }
</script>

<!-- Scoped - A formatacao CSS sera aplicada apenas a este componente. -->
<style scoped>
  nav {
    /* Aplica degrade entre a cor vermelho e amarelo */
    background: linear-gradient(to right, red , yellow);

    /* Em cima, direita, em baixo, esquerda. */
    padding: 0px 0px 5px 0px;

  }

  div#nav {
    /* Transforma a nav em flex container.     */
    /* Alinhando os itens um ao lado do outro. */
    display: flex;

    /* Alinha os itens a direita */
    justify-content: flex-end;

    /* Centraliza os itens. */
    align-items: center;

    /* Adiciona espaco interno.      */
    /* superior e inferior com 15px. */
    /* Esquesda e direita com 50px.  */
    padding: 15px 50px;

    /* Aplica cor ao elemento.*/
    background: #222;
    
  }

  #logo_url {
    /* Define que a margin sera automatica */
    margin: auto;

    /* para movela para a esquerda.        */
    margin-left: 0;
  }

  #logo {
    /* Tamanho do imagem do logo*/
    /* Horizontal */
    width: 40px;

    /* Vertical */
    height: 40px;
  }

  /* Os router-link sao links "a" */
  nav a {
    /* Remove o sublinhado. */
    text-decoration: none;

    /* Aplica margem em todos os lados. */
    margin: 12px;
    
    /* Cor da fonte (letras) */
    color: #FCBA03;

    /* Ao aplicar hover no elemento a transicao */
    /* ocorre em meio segundo.                  */
    transition: 0.5s;
  }

  /* Aplica uma animacao ao elemento. */
  #nav a:hover {
    /* Cor da fonte (letras) */
    color: #FFF;
  }


</style>
