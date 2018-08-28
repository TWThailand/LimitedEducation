<template>
  <div class="item">
    <div class="productImage"/>
    <div class="productDesc">
      <span class="title">{{name}}</span>
      <span class="brand-name">{{brand}}</span>
      <span class="amount">Total votes {{totalVote}}</span>
    </div>
    <button class="vote" @click="navigateToVote">Vote</button>
  </div>
</template>

<script>
  export default {
    name: "VoteItem",
    props: {
      quantity: Number,
      name: String,
      brand: String,
      totalVote: Number
    },
    methods: {
      navigateToVote() {
        this.$router.push('/vote')
      }
    }
  }
</script>

<style scoped>

</style>
