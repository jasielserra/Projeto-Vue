<template>
  <img :src="avatar" :alt="descricao">
  <Reutilizacao/>
</template>

<script>
import Reutilizacao from "@/components/Reutilizacao";

export default {
  name: "Picture",
  components: {
    Reutilizacao
  },
  data(){
    return {
      avatar: "/img/jasi.jpeg",
      descricao: "Jasiel de Cristo Serra",
    }
  }
}
</script>

