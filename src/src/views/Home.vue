<template>
  <Banner />
  <div class="main-container">
    <h1>Monte o seu burge:</h1>
    <BurgerForm />
  </div>
</template>

<script>
import Banner from "../components/Banner.vue"
import BurgerForm from "../components/BurgerForm.vue"

export default {
  // Nome do componente.
  name: "Home",

  // Importacao de componentes.
  components: {
    Banner,
    BurgerForm
  }
}

</script>
