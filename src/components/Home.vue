<template>
  <div class="container">
    <div class="logo"/>
    <div class="desc">This is a place holder for the description of the website</div>
    <div class="hashtag">#LimitedEducation</div>
    <div class="category">
      <div class="category-heading">Pre-order</div>
      <section class="items">
        <item
          productType="PreOrder"
          name="Limited Shoe"
          brand="TW shoes"
          :price=299
        />
        <item
          productType="PreOrder"
          name="Limited Pizza"
          brand="TW Pizza"
          :price=599
        />
        <item
          productType="PreOrder"
          name="Limited Steak"
          brand="TW Steak house"
          :price=785000
        />
        <item
          productType="PreOrder"
          name="Limited Phone"
          brand="TW mobile"
          :price=1200
        />
      </section>
    </div>
    <div class="category">
      <div class="category-heading">Vote for you favorite brand</div>
      <section class="items">
        <item
          productType="Vote"
          name="Black drink"
          brand="TW cola"
          :totalVote=200
        />
        <item
          productType="Vote"
          name="Black Steak"
          brand="TW Steak house"
          :totalVote=50
        />
        <item
          productType="Vote"
          name="ที่เป่าลม"
          brand="TW gadget"
          :totalVote=120
        />
      </section>
    </div>
  </div>
</template>
<script>
  import Item from "./Item";

  export default {
    components: {Item}
  }
</script>
