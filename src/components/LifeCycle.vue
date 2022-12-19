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
    this.lifeCycle()
  },
  mounted() {
    setTimeout(() => {
      this.nome = "Serra"
        }, 2000);
    this.lifeCycle()
  },
  methods: {
    lifeCycle(){
      console.log("Executou");
    }
  }
}
</script>

