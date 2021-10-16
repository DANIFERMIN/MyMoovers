<template>
  <section class="pick-time">
    <div class="pick-time__title">
      <i class="fas fa-vector-square"></i>
      <h2>Pick a Time</h2>
    </div>
    <div class="pick-time__container">
      <ul class="list-hours">
        <li v-for="hour in hours" :key="hour">
          <button
            :class="{
              'is-active': current === hour,
            }"
            @click="pickHour(hour)"
          >
            {{ hour }}
          </button>
        </li>
      </ul>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapMutations, mapGetters } from "vuex";
import Hours from "../assets/constants/ListPossibleHours";

export default defineComponent({
  name: "Time",
  data() {
    return {
      hours: Hours,
      time: null,
      current: this.getFormTwoHour() || null,
    };
  },
  methods: {
    ...mapMutations(["pickTimeStore"]),
    ...mapGetters(["getFormTwoHour"]),

    pickHour(hour: string) {
      this.current = hour;
      this.pickTimeStore(hour);
    },
  },
});
</script>
<style lang='scss' scoped>
.pick-time {
  margin-top: 3%;
  button {
    left: 0;
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  @import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;700&display=swap");
  .pick-time__title {
    background-color: #ffcf72;
    height: 55px;
    width: 100%;
    color: #6d6d6d;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: Comfortaa, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 17px;
    letter-spacing: -0.333333px;
    i {
      padding: 3%;
    }
    h2 {
      font-size: 15px;
    }
  }
  .pick-time__container {
    height: max-content;
    font-family: Comfortaa, sans-serif;
    color: #4b4b4b;
    width: 360px;
    background: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 9px;
    .list-hours {
      color: #6d6d6d;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      padding: 2%;
      button {
        width: 100px;
        height: 60px;
        background-color: #f1f3f8;
        box-sizing: border-box;
        border-radius: 12px;
        margin: 7%;
      }
      .is-active {
        width: 100px;
        height: 60px;
        background-color: #76fcce;
        border: 3px solid #d78aff;
        box-sizing: border-box;
        border-radius: 12px;
        margin: 7%;
      }
    }
  }
}
</style>
