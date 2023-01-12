<template>
  <div>
    <Header :esta_logado="false" />
    <AppProducts/>
    <PrimeiroComponente/>
    <HelloWorld msg="Vamos aprender Vue JS"/>
    <p class="paragrafo-pai">O dado de app é: {{testando}} </p>
    <LifeCycle/>
    <button @click="updateUser()">
       Atualizar Perfil
    </button>
    <Pessoa/>
  </div>
</template>

<script>
  import PrimeiroComponente from './components/PrimeiroComponente.vue'
  import LifeCycle from './components/LifeCycle.vue'
  import Pessoa from "@/components/Pessoa";
  import Header from "@/components/Header";
  import HelloWorld from "@/components/HelloWorld";
  import AppProducts from "@/components/Products/AppProducts";
    export default {
      name: 'App',
      components:{
        AppProducts,
        Header,
        Pessoa,
        PrimeiroComponente,
        LifeCycle,
        HelloWorld
      },
      data(){
        return {
          testando: "Testing",

        }
      },
      methods:{
        updateUser(){
          const newUser = {
               first_name: 'Joaquim',
               last_name: 'Nabuco',
               email: 'joaquim.nabuco@uol.com.br'
        }
        this.$store.commit('storeUser', newUser)
    }
  },
      created() {

      }
    }
</script>

<style>
  body {
    background-color: #333;
    color: #FFF;
  }
  a {
    color: firebrick;
  }
  .teste {
     background-color: black;
  }
</style>