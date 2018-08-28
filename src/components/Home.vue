<template>
  <div class="container">
    <div class="logo"/>
    <div class="desc">This is a place holder for the description of the website</div>
    <div class="hashtag">#LimitedEducation</div>
    <div class="category">
      <div class="category-heading">Pre-order</div>
      <section class="items">
        <PreOrderItem v-for="item in preOrderItems"
          :key="item.name"
          :quantity="item.quantity"
          :name="item.name"
          :brand="item.brand"
          :price="item.price"
        />
      </section>
    </div>
    <div class="category">
      <div class="category-heading">Vote for you favorite brand</div>
      <section class="items">
        <VoteItem v-for="item in voteItems"
          :key="item.name"
          :name="item.name"
          :brand="item.brand"
          :totalVote="item.totalVote"
        />
      </section>
    </div>
  </div>
</template>
<script>
  import VoteItem from "./VoteItem";
  import PreOrderItem from "./PreOrderItem";

  export default {
    components: {PreOrderItem, VoteItem},
    data: function() {
      return {
        preOrderItems: [
          {quantity: 4100, name: 'Limited Phone', brand: 'TW mobile', price: 1200},
          {quantity: 3000, name: 'Limited Steak', brand: 'TW Steak House', price: 785000},
          {quantity: 2000, name: 'Limited Pizza', brand: 'TW Pizza', price: 599},
          {quantity: 1000, name: 'Limited Shoe', brand: 'TW Shoes', price: 299}
        ],
        voteItems: [
          {name: 'Black drink', brand: 'TW Cola', totalVote: 200},
          {name: 'Black Steak', brand: 'TW Steak House', totalVote: 50},
          {name: 'ที่เป่าลม', brand: 'TW Gadget', totalVote: 120},
        ]
      }
    }
  }
</script>
