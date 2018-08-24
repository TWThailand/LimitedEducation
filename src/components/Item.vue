<template>
  <div class="item">
    <span v-if="preOrder" class="count">Only 3000 left</span>
    <div class="productImage"/>
    <div class="productDesc">
      <span class="title">{{name}}</span>
      <span class="brand-name">{{brand}}</span>
      <span class="amount">{{amount}}</span>
    </div>
    <button v-if="preOrder" class="perorder">Per-order</button>
    <button v-else class="vote">Vote</button>
  </div>
</template>

<script>
  export default {
    name: "Item",
    props: {
      productType: {
        type: String,
        require: true
      },
      name: String,
      brand: String,
      price: Number,
      totalVote: Number,

    },
    computed: {
      preOrder() {
        return this.productType === "PreOrder"
      },
      amount() {
        if (this.productType === "PreOrder") {
          return `only ${this.price} Bath`
        } else if (this.productType === "Vote") {
          return `Total votes ${this.totalVote}`
        }
        return ""
      }
    }
  }
</script>

<style scoped>

</style>
