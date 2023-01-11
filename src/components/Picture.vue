<template>
  <div>
  <img :src="avatar" :alt="descricao">
  <Mudarimagem @mudar-imagem="trocarImagem" />
  <Reutilizacao/>
  </div>
</template>
<script>
import Reutilizacao from "@/components/Reutilizacao";
import Mudarimagem from "@/components/Mudarimagem";
export default {
  name: 'Picture',
  components: {Mudarimagem, Reutilizacao},
  data() {
    return { 
      avatar: "/img/avatar.png",
      descricao: "Jasiel de C. Serra"
    }
  },
  methods: {
    trocarImagem(){
      this.avatar = "/img/avatar2.png"
    }
  }
}
</script>