<template>
  <div id="vote-detail">
    <div id="vote-count">Already voted: {{totalVote}} votes</div>
    <div id="logo-section" class="flex-parent">
      <button class="previous-product flex-child"><</button>
      <img src="../../assets/logo.png" class="logo-limited-education flex-child"/>
      <div class="vertically-aligned-x flex-child">x</div>
      <img src="../../assets/logo-nanyang.png" class="logo-product flex-child" />
      <button class="next-product flex-child">></button>
    </div>
    <div id="product-image" class="flex-parent">
      <img src="../../assets/product-shoe-nanyang.jpg" class="product-image-left flex-child"/>
      <img src="../../assets/logo.png" class="product-image-right flex-child"/>
    </div>
    <div id="product-description">
      <div class="title">{{name}}</div>
      <div class="content-text">
        Super cool nanyang shoe with limited education logo and own name in Thai! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProductDetail",
    props: {
      name: String,
      totalVote: Number
    }
  }
</script>
