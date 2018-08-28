<template>
  <div class="item">
    <span class="count">Only {{quantity}} left</span>
    <div class="productImage"/>
    <div class="productDesc">
      <span class="title">{{name}}</span>
      <span class="brand-name">{{brand}}</span>
      <span class="amount">only {{price}} Baht</span>
    </div>
    <button class="preorder">Pre-order</button>
  </div>
</template>

<script>
  export default {
    name: "Item",
    props: {
      quantity: Number,
      name: String,
      brand: String,
      price: Number
    }
  }
</script>

<style scoped>

</style>
