<template>
  <div>
    <Header :esta_logado="false" />
    <PrimeiroComponente/>
    <HelloWorld msg="Vamos aprender Vue JS"/>
    <p class="paragrafo-pai">O dado de app é: {{testando}} </p>
    <LifeCycle/>
    <Pessoa/>
  </div>
</template>

<script>
  import PrimeiroComponente from './components/PrimeiroComponente.vue'
  import LifeCycle from './components/LifeCycle.vue'
  import Pessoa from "@/components/Pessoa";
  import Header from "@/components/Header";
  import HelloWorld from "@/components/HelloWorld";
    export default {
      name: 'App',
      components:{
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