<template>
  <div class="comingSoon">
    <p>C O M I N G</p>
    <p>S O O N</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PaintComingSoon",
});
</script>

<style lang='scss'>
@media only screen and (min-width: 320px) and (max-width: 450px) {
  .comingSoon {
    font-family: Roboto, sans-serif;
    text-align: center;
    padding: 3%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    letter-spacing: 1em;
    margin: 15%;
    color: white;
    height: 406px;
    background: #d78aff;
    border: 1px solid #6d6d6d;
    box-sizing: border-box;
  }
}
@media only screen and (min-width: 450px) and (max-width: 1600px) {
  .comingSoon {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    letter-spacing: 1em;
    margin-top: 200px;
    color: white;
    position: absolute;
    width: 814px;
    height: 406px;
    background: #d78aff;
    border: 1px solid #6d6d6d;
    box-sizing: border-box;
  }
}
</style>