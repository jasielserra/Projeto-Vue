<template>
  <div>
    <h2>Esta é a descrição da pessoa: {{ nome }}</h2>
    <Info/>
    <Form/>
  </div>
</template>
<script>
 import Info from "@/components/Info";
 import Form from "@/components/form/Form";
 export default {
  name: "Pessoa",
  components: {
    Form,
    Info
  },
  data(){
    return {
      nome: "Jasiel"
    }
  }
}
</script>
