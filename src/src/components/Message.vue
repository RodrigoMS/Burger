<!-- Conteudo da mensagem-->
<template>
  <div class="message-container">
    <p>{{ msg }}</p>
  </div>
</template>

<script>

// Exportação do componente.
export default {
  name: "Message",

  // Parâmetros vindos para o componente.
  props: {
    msg: String
  }
}
</script>

<!-- Scoped - A formatacao CSS sera aplicada apenas a este componente. -->
<style scoped>
  .message-container {
    color: #004085;
    background: #CCE5FF;
    border: 2px solid #88DAFF;
    border-radius: 5px;
    padding: 10px;
    max-width: 400px;
    margin: 30px auto;
  }

</style>
