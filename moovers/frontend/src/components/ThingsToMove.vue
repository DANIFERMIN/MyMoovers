<template>
  <div class="things-move">
    <div class="things-move__title">
      <i class="fas fa-vector-square"></i>
      <h2>Things to Move</h2>
    </div>
    <div class="things-move__container">
      <ul class="list-things">
        <li v-for="thing in things" :key="thing">
          <div class="item">
            <span>{{ thing.name }}</span>
            <div class="amount">
              <button
                id="minus"
                @click="handleMinusThing(thing)"
                :disabled="thing.amount === 0"
              >
                <i class="fas fa-minus-circle"></i>
              </button>
              <input
                type="number"
                name="amount"
                id="amount"
                v-model.number="thing.amount"
              />
              <button @click="handlePlusThing(thing)">
                <i class="fas fa-plus-circle"></i>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Things from "../assets/constants/ListThings";
import { mapMutations } from "vuex";
export default defineComponent({
  name: "ThingsToMove",
  data() {
    return {
      thing: { name: undefined, amount: 0 },
      things: Things,
      amount: 0,
    };
  },
  methods: {
    ...mapMutations(["handleFormOneMinusThing", "handleFormOnePlusThing"]),
    handleMinusThing(thing: { name: string; amount: number }) {
      thing.amount -= 1;
      this.handleFormOneMinusThing(thing.name);
    },
    handlePlusThing(thing: { name: string; amount: number }) {
      thing.amount += 1;
      this.handleFormOnePlusThing(thing.name);
    },
  },
  computed: {},
});
</script>
<style lang='scss' scoped>
.things-move {
  margin-top: 2%;
  width: 100%;
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
  .things-move__title {
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
  .things-move__container {
    padding: 5%;
    font-family: Comfortaa, sans-serif;
    color: #4b4b4b;
    background: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 9px;
    ul {
      list-style-type: none;
      .item {
        margin-top: 3%;
        width: 75%;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}

.fa-plus-circle {
  color: #d78aff;
}
.fa-minus-circle {
  color: #e4f4ff;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  outline: none;
  border: none;
}
input {
  text-align: center;
  border: none;
  width: 25px;
}

.amount {
  display: flex;
  justify-content: space-between;
}
</style>