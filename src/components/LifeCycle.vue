<template>
  <h1>Meu nome é: {{ nome }}</h1>
</template>

<script>
export default {
  name: "LifeCycle",
  data(){
    return {
      nome:"Jasi"
    }
  },
  created() {
    setTimeout(() => {
      this.nome = "Jasiel"
        }, 1000);
  },
  mounted() {
    setTimeout(() => {
      this.nome = "Serra"
        }, 2000);
  }
}
</script>

