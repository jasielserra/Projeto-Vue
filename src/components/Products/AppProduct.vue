<template>
  <div class="card">

        {{ product.name }} - {{ product.price }}

    <button @click="addProduct()">
       Adicionar
    </button>

   <button @click="removeProduct">
      Remove
    </button>
  </div>

</template>

<script>
export default {
  name: "AppProduct",
  props: {
    product: Object
  },

  methods: {
    addProduct(){
      this.$store.commit('addProduct', this.product)
    },
    removeProduct(){
      this.$store.commit('removeProduct', this.product.id)
    },

  },
}
</script>

<style scoped>

 .card {
   background: bisque;
   padding: 6px;
   margin-bottom: 5px;
 }

</style>