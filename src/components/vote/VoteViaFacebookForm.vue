<template>
  <div id="vote-via-facebook">
  <form action="#/vote" class="vote-form">
    <div class="wrapper">
      <div class="title">ร่วมลงชื่อสนับสนุน</div>
      <div class="subtitle">สินค้าที่มีผลโหวตสูงสุดของแต่ละแบรนด์จะนำไปผลิตจริง</div>
      <input type="text" value="ชื่อจริง นามสกุล (ภาษาไทย)" class="first-name"/>
      <input type="text" value="ชื่อเล่น (ภาษาไทย)" class="last-name"/>
      <div class="product-text">สนับสนุน Club 21 ออก Limited edition เพื่อนำรายได้ทั้งหมด ไปช่วยการศึกษาไทย (ผลิตภัณฑ์ที่ผลิตจะเป็นแบบตามที่อยู่ในรูป)</div>
      <input type="submit" value="สนับสนุนสินค้าเพื่อช่วยการศึกษา"/>
    </div>
  </form>
  </div>
</template>

<script>
export default {
  name: "VoteViaFacebookForm"
}
</script>
