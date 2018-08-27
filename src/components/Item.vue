<template>
  <div class="item">
    <span v-if="preOrder" class="count">Only {{quantity}} left</span>
    <div class="productImage"/>
    <div class="productDesc">
      <span class="title">{{name}}</span>
      <span class="brand-name">{{brand}}</span>
      <span class="amount">{{amount}}</span>
    </div>
    <button v-if="preOrder" class="preorder">Pre-order</button>
    <button v-else class="vote" @click="navigateToVote">Vote</button>
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
      quantity: Number,
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
          return `only ${this.price} Baht`
        } else if (this.productType === "Vote") {
          return `Total votes ${this.totalVote}`
        }
        return ""
      }
    },
    methods: {
      navigateToVote() {
        this.$router.push('/Vote')
      }
    }
  }
</script>

<style scoped>

</style>
