<template>
  <div class="house-things">
    <PickHouse />
    <ThingsToMove />
  </div>
  <div class="navigation-buttons">
    <button @click="previousForm">Prev</button>
    <button @click="nextForm">Next</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PickHouse from "../components/PickHouse.vue";
import ThingsToMove from "../components/ThingsToMove.vue";

export default defineComponent({
  name: "HouseAndThings",
  components: {
    PickHouse,
    ThingsToMove,
  },
  props: ["nextForm", "previousForm"],
});
</script>
<style lang='scss' scoped>
@media only screen and (min-width: 320px) and (max-width: 450px) {
  .house-things {
    display: flex;
    flex-direction: column;
  }

  button {
    cursor: pointer;
    font-family: Roboto, sans-serif;
    font-size: 13px;
    font-style: normal;
    font-weight: 900;
    line-height: 15px;
    letter-spacing: 0.04em;
    text-align: center;
    color: white;
    margin-top: 15%;
    margin-bottom: 15%;
    width: 85%;
    height: 55px;
    background-color: #d78aff;
    border: solid 2px #6d6d6d;
    box-sizing: border-box;
    border-radius: 6px;
  }
  .navigation-buttons {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    button {
      font-family: Roboto, sans-serif;
      font-size: 13px;
      font-style: normal;
      font-weight: 900;
      line-height: 15px;
      letter-spacing: 0.04em;
      text-align: center;
      color: white;
      margin-top: 15%;
      margin-bottom: 15%;
      width: 35%;
      height: 55px;
      background-color: #d78aff;
      border: solid 2px #6d6d6d;
      box-sizing: border-box;
      border-radius: 6px;
    }
  }
}
@media only screen and (min-width: 450px) and (max-width: 1600px) {
  .house-things {
    display: flex;
    flex-direction: column;
    margin-top: 30%;
  }

  button {
    cursor: pointer;
    font-family: Roboto, sans-serif;
    font-size: 13px;
    font-style: normal;
    font-weight: 900;
    line-height: 15px;
    letter-spacing: 0.04em;
    text-align: center;
    color: white;
    margin-top: 15%;
    margin-bottom: 15%;
    width: 85%;
    height: 55px;
    background-color: #d78aff;
    border: solid 2px #6d6d6d;
    box-sizing: border-box;
    border-radius: 6px;
  }
  .navigation-buttons {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    button {
      font-family: Roboto, sans-serif;
      font-size: 13px;
      font-style: normal;
      font-weight: 900;
      line-height: 15px;
      letter-spacing: 0.04em;
      text-align: center;
      color: white;
      margin-top: 15%;
      margin-bottom: 15%;
      width: 35%;
      height: 55px;
      background-color: #d78aff;
      border: solid 2px #6d6d6d;
      box-sizing: border-box;
      border-radius: 6px;
    }
  }
}
</style>