<template>
  <div>
    <AppProduct v-for="product in $store.state.products" :key="product.id" :product="product"/>

  </div>
</template>

<script>
//import AppProducts from "@/components/Products/AppProducts";
import AppProduct from "@/components/Products/AppProduct";

export default {
  name: "AppProducts",
  components: {AppProduct}
}
</script>

<style scoped>

</style>