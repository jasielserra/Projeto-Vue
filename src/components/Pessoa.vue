<template>
  <div>
    <h2>Esta é a descrição da pessoa: {{ nome }}</h2>
    <Info :email="email" :esta_trabalhando=true />
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
      nome: "Jasiel",
      email: "jasiel.serra@yahoo.com.br"

    }
  }
}
</script>
