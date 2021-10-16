<template>
  <section class="pick-date">
    <div class="pick-date__title">
      <i class="fas fa-vector-square"></i>
      <h2>Pick a date</h2>
    </div>
    <div class="pick-date__container">
      <DatePicker v-model="date" :model-config="modelConfig" />
    </div>
  </section>
  <Time />
  <div class="navigation-buttons">
    <button @click="previousForm">Prev</button>
    <button @click="sendDateAndNext">Next</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Time from "../components/Time.vue";
import { DatePicker } from "v-calendar";
import { mapGetters, mapMutations } from "vuex";

export default defineComponent({
  name: "CalendarAndTime",
  data() {
    return {
      date: this.getFormTwoDate() || new Date().toDateString(),
      modelConfig: {
        type: "string",
        mask: "DD-MM-YYYY",
      },
    };
  },

  components: {
    DatePicker,
    Time,
  },
  props: ["nextForm", "previousForm"],
  methods: {
    ...mapGetters(["getFormTwoDate"]),
    ...mapMutations(["addDateToStore"]),
    sendDateAndNext() {
      this.addDateToStore(this.date);
      this.nextForm();
    },
  },
});
</script>
<style lang='scss' scoped>
@media only screen and (min-width: 320px) and (max-width: 450px) {
  .pick-date {
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
    .pick-date__title {
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
    .pick-date__container {
      font-family: Comfortaa, sans-serif;
      color: #4b4b4b;
      width: 360px;
      height: 400px;
      background: #fff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 9px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
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
      cursor: pointer;
    }
  }
}

@media only screen and (min-width: 450px) and (max-width: 1600px) {
  .pick-date {
    margin-top: 30%;
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
    .pick-date__title {
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
    .pick-date__container {
      font-family: Comfortaa, sans-serif;
      color: #4b4b4b;
      width: 360px;
      height: 400px;
      background: #fff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 9px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
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
      cursor: pointer;
    }
  }
}
</style>