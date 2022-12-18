<template>
  <img :src="avatar" :alt="descricao">
</template>

<script>
export default {
  name: "Picture",
  data(){
    return {
      avatar: "/img/jasi.jpeg",
      descricao: "Jasiel de Cristo Serra",
    }
  }
}
</script>

