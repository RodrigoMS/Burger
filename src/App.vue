<template>
  <!-- v-bind: ou : - permite o uso de dados dinâmicos. -->
  <!-- Enviando os dados para o componente Navbar. -->
  <Navbar v-bind:logo="logo_src" :alt="app_name"/>
  <router-view/>
  <Footer/>
</template>

<script>
  import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue'

  export default {

    // Importacao de componentes.
    components: {
      Navbar,
      Footer
    },

    // Cria dados.
    data() {
      return {
        logo_src: "/img/logo.png",
        app_name: "Crie seu Hamburger",
      }
    }
  }
</script>


<style>
  /* Reset das formatacoes CSS padrao do navegador. */
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Helvetica; 
  }

  .main-container {
    /* Aplica espaco externo em todos os lados do elemento. */
    margin: 50px;

    /* O elemento nao pode ser menor que 250px. */
    min-height: 250px;
  }

  h1 {
    /* Alinha o texto ao centro. */
    text-align: center;

    /* Tamanho da fonte. */
    font-size: 42px;

    /* Aplica margem externa na parte inferior. */
    margin-bottom: 30px;

    color: #222;
  }

</style>
