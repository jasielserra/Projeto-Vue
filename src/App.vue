<template>
  <div>
    <Header/>
    <PrimeiroComponente/>
    <p>O dado de app é: {{testando}} </p>
    <LifeCycle/>
    <Pessoa/>
  </div>
</template>

<script>
  import PrimeiroComponente from './components/PrimeiroComponente.vue'
  import LifeCycle from './components/LifeCycle.vue'
  import Pessoa from "@/components/Pessoa";
  import Header from "@/components/Header";
    export default {
      name: 'App',
      components:{
        Header,
        Pessoa,
        PrimeiroComponente,
        LifeCycle
      },
      data(){
        return {
          testando: "Testing"
        }
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