<template>
    <section>
        <Message :msg="msg" v-show="msg"/>

        <form @submit="createBurger">
            <fieldset>
				<div class="container">
					<label for="name">Nome do cliente:</label>
                    
                    <input type="text" id="name" name="name" v-model="name" placeholder="Digite o seu nome">
				</div>
			</fieldset>

			<fieldset>
				<div class="container">
					<label for="bread">Escolha o pao:</label>
                    <select name="bread" id="bread" v-model="bread">
                        <option value="" selected >Selecione o seu pao</option>
                        <option v-for="bread in breads" :key="bread.id" :value="bread.tipo">{{ bread.tipo }}</option>
                    </select>
				</div>
			</fieldset>

			<fieldset>
				<div class="container">
                    <label for="meat">Escolha a carne do seu Burger:</label>
                    <select name="meat" id="meat" v-model="meat">
                        <option value="" selected >Selecione o tipo de carne</option>
                        <option v-for="meat in meats" :key="meat.id" :value="meat.tipo">{{ meat.tipo }}</option>
                    </select>
				</div>
			</fieldset>

			<fieldset>
				<label id="optionsTitle" for="options">Selecione os opcionais:</label>
                <div class="container options">
                    <div v-for="option in optionsData" :key="option.id">
                        <input type="checkbox" name="options" v-model="options" :value="option.tipo">
                        <span>{{ option.tipo }}</span>
                    </div>
                </div>
			</fieldset>

            <fieldset>
                <div class="container">
                    <input type="submit" class="submitButton" value="Criar meu Burger!">
                </div>
            </fieldset>
        </form>

    </section>
</template>

<script>
import Message from './Message.vue'
export default {
    /* Nome do componente. */
    name: "BurgerForm",
    components: {
        Message
    },
    /* Mapear os dados que vem do backend. */
    data() {
        return {
            breads: null,
            meats: null,
            optionsData: null,
            name: null,
            bread: null,
            meat: null,
            options:[],
            status: "",
            msg: null
        }
    },
    /* Metodos que trabalham com o backend par atrazer os dados. */
    methods: {
        /* Busca os ingredientes no banckend. */
        async getIngredients() {
            const response = await fetch("http://localhost:3000/ingredientes")
            const data  = await response.json()
            this.breads = data.paes
            this.meats = data.carnes
            this.optionsData = data.opcionais
        },
        /* Cria um novo Burger */
        async createBurger(e) {
            e.preventDefault();
            const data = {
                name: this.name,
                carne: this.meat,
                bread: this.bread,
                /* Objeto array. */
                options: Array.from(this.options),
                status: "Solicitado"
            }
            /* Converte o objeto JavaScript em JSON. */
            const dataJson = JSON.stringify(data)
            const request = await fetch("http://localhost:3000/burgers", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: dataJson
            })
            /* Resposta do servidor. */
            const response = await request.json()

            // Mensagem resposta do sistema.
            this.msg = `Pedido Nº ${ response.id } realizado com sucesso.`
            
            setTimeout(() => {
                this.msg = null
            }, 3000)
            
            /* Limpar campos */
            this.name = "" 
            this.carne = "" 
            this.bread = ""
            this.meat = "" 
            this.options = []
        }
    },
    /* Lifecycle hooks - Assim que o componente for montado  */
    /* inicie a função. */
    mounted() {
        this.getIngredients()
    }
}
</script>

<style scoped>
    section {
        /*Torna o elemento um flex container, 
        transformando todos os seus elementos 
        internos (filhos) em flex itens.*/
        display: flex;
        /*Alinha os flex itens de acordo com o eixo 
        do container. */
        align-items: center;
        /*Alinha os itens flex no container de 
        acordo com a direção. */
        justify-content: center;
        /* Tamanho máximo do elemento. */
        max-width: 100vw;
        /* Organiza os itens em colunas. */
        flex-direction: column;
    }
    form {
        width: 500px;
    }
    fieldset{
        /* Remove a borda. */
        border:none;
    }
    .container {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }
    label {
        border-left: 5px solid #fcba03;
        padding: 8px;
        font-size: 18px;
        margin-bottom: 20px;
        font-weight: bold;
    }
    .container input[type=text], select {
        /* Define a largura do elemento. */
        width: calc(100% - 20px);
        /* Defina a altura do elementos. */
        height: 50px;
        /* Remove a borda. */
        border: 2px solid #222;
        background-color: #FFF;
        border-radius: 2px;
        color: #333;
        /* Tamanho da fonte.*/
        font-size: 18px;
        /* Aumenta a largura do contorno do texto.*/
        font-weight: 700;
        padding-left: 5px;
    }
    .options {
        margin-top: 40px;
        margin-bottom: 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .options div {
        display: flex;
        align-items: flex-start;
        width: 50%;
        margin-bottom: 20px;
    }
    input[type="checkbox"] {
        width: 20px;
        height: 20px;
        margin-left: 15%;
        margin-bottom: 20px; 
    }
    span {
        margin: 0px 10px;
        font-weight: bold;
    }
    .submitButton {
        background-color: #222;
        color:#fcba03;
        font-weight: bold;
        border: 2px solid #222;
        padding: 15px;
        font-size: 16px;
        cursor: pointer;
        transition: .5s;
        width: calc(100% - 20px);
    }
    .submitButton:hover {
        background-color: transparent;
        color: #222;
        border-radius: 2px;
    }
</style>