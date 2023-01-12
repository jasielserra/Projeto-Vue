<template>
  <div class="card">

        {{ product.name }} - {{ product.price }}

    <button @click="addProduct()">
       Adicionar
    </button>

    <button v-if="InCart" @click="removeProduct">
      Remove
    </button>
  </div>

</template>

<script>
export default {
  name: "AppProduct",
  data(){
    return {
      Incart : true,
    }
  },
  props: {
    product: Object
  },
  methods: {
    addProduct(){
      this.$store.commit('addProduct', this.product)
      this.Incart = true;
    },
    removeProduct(){
      this.$store.commit('removeProduct', this.product.id)
    },
  }
}
</script>

<style scoped>

 .card {
   background: bisque;
   padding: 6px;
   margin-bottom: 5px;
 }

</style>