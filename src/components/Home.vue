<template>
  <div class="container">
    <div class="logo"/>
    <div class="desc">This is a place holder for the description of the website</div>
    <div class="hashtag">#LimitedEducation</div>
    <div class="category">
      <div class="category-heading">Pre-order</div>
      <section class="items">
        <item v-for="item in items" v-if="item.productType == 'PreOrder'"
          v-bind:key="item.name"
          v-bind:productType="item.productType"
          v-bind:quantity="item.quantity"
          v-bind:name="item.name"
          v-bind:brand="item.brand"
          v-bind:price="item.price"
        />
      </section>
    </div>
    <div class="category">
      <div class="category-heading">Vote for you favorite brand</div>
      <section class="items">
        <item v-for="item in items" v-if="item.productType == 'Vote'"
          v-bind:key="item.name"
          v-bind:productType="item.productType"
          v-bind:name="item.name"
          v-bind:brand="item.brand"
          v-bind:totalVote="item.totalVote"
        />
      </section>
    </div>
  </div>
</template>
<script>
  import Item from "./Item";

  export default {
    components: {Item},
    data: function() {
      return {
        items: [
          {productType: 'PreOrder', quantity: 4100, name: 'Limited Phone', brand: 'TW mobile', price: 1200},
          {productType: 'PreOrder', quantity: 3000, name: 'Limited Steak', brand: 'TW Steak House', price: 785000},
          {productType: 'PreOrder', quantity: 2000, name: 'Limited Pizza', brand: 'TW Pizza', price: 599},
          {productType: 'PreOrder', quantity: 1000, name: 'Limited Shoe', brand: 'TW Shoes', price: 299},
          {productType: 'Vote', name: 'Black drink', brand: 'TW Cola', totalVote: 200},
          {productType: 'Vote', name: 'Black Steak', brand: 'TW Steak House', totalVote: 50},
          {productType: 'Vote', name: 'ที่เป่าลม', brand: 'TW Gadget', totalVote: 120},
        ]
      }
    }
  }
</script>
