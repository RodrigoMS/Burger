<!-- Conteudo da barra de navegacao -->
<template>
 <div id="burger-table" v-if="burgers">
    <Message :msg="msg" v-show="msg"/>
    <div>
      <div id="burger-table-heading">
        <div class="order-id">#:</div>
        <div>Cliente:</div>
        <div>Pão:</div>
        <div>Carne:</div>
        <div>Opcionais:</div>
        <div>Ações:</div>
      </div>
    </div>
    <div id="burger-table-rows">
      <!-- v-for - Cria um laco no elemento. -->
      <div class="burger-table-row" v-for="burger in burgers" :key="burger.id" :id="'order_' + burger.id">
        <div class="order-number">{{ burger.id }}</div>
        <div>{{ burger.name }}</div>
        <div>{{ burger.bread }}</div>
        <div>{{ burger.carne }}</div>
        <div>
          <!-- v-for - Cria um laco no elemento. Com a lista de complementos. -->
          <ul v-for="(option, index) in burger.options" :key="index">
            <li>{{ option }}</li>
          </ul>
        </div>
        <div>
          <!-- @change - Quando mudar o valor do select vai disparar a funcao updateBurger. -->
          <select name="status" class="status" @change="updateBurger($event, burger.id)">
            <!-- :selected - Caso o status do burger for igual ao tipo, selecine a opcao. -->
            <option :value="state.tipo" v-for="state in status" :key="state.id" :selected="burger.status == state.tipo">
              {{ state.tipo }}
            </option>
          </select>

          <!-- @click - Ao click,executa a funcao deleteBurder(). -->
          <button class="delete-btn" @click="deleteBurger(burger.id)">Cancelar</button>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <h2>Não há pedidos no momento!</h2>
  </div>
</template>

<script>
  import Message from "./Message.vue"

  // Exportacao do componente.
  export default {
    // Nome do componente.
    name: "Dashboard",
    data() {
      return {
        /** Burges cadastrados no sistema. */
        burgers: null,
        burger_id: null,
        status: [],
        msg: null
      }
    },

    methods: {
      /** Obter os burges di backend */
      async getOrders() {

        /** Obtem os dados dos pedidos em formato JSON a partir da rota. */
        const req = await fetch('http://localhost:3000/burgers')

        /** Converte O JSON em objeto JavaScript. */
        const data = await req.json()

        /** Substitui os dados do burger pelos dados de data.*/
        this.burgers = data

        // Resgata os status de pedidos
        this.getStatus()
      },

      /** Obtem todos os tipos de status do burger cadastrados no sistema. */
      async getStatus() {
        const req = await fetch('http://localhost:3000/status')
        const data = await req.json()
        this.status = data
      },

      /** Remove o pedido do sistema. */
      async deleteBurger(id) {
        const req = await fetch(`http://localhost:3000/burgers/${id}`, {
          method: "DELETE"
        });
        const res = await req.json()

        // Remove o elemento da tabela.
        document.getElementById('order_' + id).remove()

        // Mensagem resposta do sistema.
        this.msg = `Pedido cancelado.`
        
        setTimeout(() => {
            this.msg = null
        }, 3000)

        // Faz nova soliciatao dos pedidos e sobrescreve os dados anteriores.
        //this.getOrders()
      },

      /** Atualizacao do status do pedido */
      async updateBurger(event, id) {
        /** Obter o valor do option. */
        const option = event.target.value;
        const dataJson = JSON.stringify({status: option});
        const req = await fetch(`http://localhost:3000/burgers/${id}`, {

          /** indica que ocorreu atualiza de parte das informacoes */
          method: "PATCH",
          headers: { "Content-Type" : "application/json" },
          body: dataJson
        });
        
        const response = await req.json()

        // Mensagem resposta do sistema.
        this.msg = `Pedido Nº ${ response.id } foi atualizado para "${response.status}".`
        
        setTimeout(() => {
            this.msg = null
        }, 3000)
      }
    },

    components: {
      Message
    },

    mounted () {
    this.getOrders()
    }
  }
</script>

<!-- Scoped - A formatacao CSS sera aplicada apenas a este componente. -->
<style scoped>
  #burger-table {
    max-width: 1200px;
    margin: 0 auto;
  }
  #burger-table-heading,
  #burger-table-rows,
  .burger-table-row {
    display: flex;
    flex-wrap: wrap;
  }
  #burger-table-heading {
    font-weight: bold;
    padding: 12px;
    border-bottom: 3px solid #333;
  }
  .burger-table-row {
    width: 100%;
    padding: 12px;
    border-bottom: 1px solid #CCC;
  }
  #burger-table-heading div,
  .burger-table-row div {
    width: 19%;
  }
  #burger-table-heading .order-id,
  .burger-table-row .order-number {
    width: 5%;
  }
  select {
    padding: 12px 6px;
    margin-right: 12px;
  }
  .delete-btn {
    background-color: #222;
    color:#fcba03;
    font-weight: bold;
    border: 2px solid #222;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: .5s;
  }
  
  .delete-btn:hover {
    background-color: transparent;
    color: #222;
  }

</style>
