<template>
  <section class="pick-house">
    <div class="pick-house__title">
      <i class="fas fa-vector-square"></i>
      <h2>Pick your House</h2>
    </div>
    <div class="pick-house__container">
      <div class="main-options">
        <label for="house">
          <input
            id="test-type"
            type="radio"
            name="house"
            value="house"
            v-model="selected"
            @change="handleTypeOfHouseAll($event)"
          />
          House
        </label>
        <div class="house-options" v-if="selected === 'house'">
          <div class="floor-amount">
            <span>Floors</span>
            <div class="amount">
              <button
                id="button-test"
                @click="handlefloorNumberAllMinus"
                :disabled="floors === 0"
              >
                <i class="fas fa-minus-circle"></i>
              </button>
              <input
                type="number"
                name="floors"
                id="floors"
                v-model.number="floors"
              />
              <button @click="handleFloorNumberAllPlus">
                <i class="fas fa-plus-circle"></i>
              </button>
            </div>
          </div>

          <br />
          <div class="room-amount">
            <span>Rooms</span>
            <div class="amount">
              <button @click="handleRoomNumberAllMinus" :disabled="rooms === 0">
                <i class="fas fa-minus-circle"></i>
              </button>
              <input
                type="number"
                name="rooms"
                id="rooms"
                v-model.number="rooms"
              />
              <button @click="handleRoomNumberAllPlus">
                <i class="fas fa-plus-circle"></i>
              </button>
            </div>
          </div>
        </div>
        <label for="building">
          <input
            type="radio"
            name="building"
            id="building"
            value="building"
            v-model="selected"
            @change="handleTypeOfHouseAll($event)"
          />
          Building
        </label>
        <div class="building-options" v-if="selected === 'building'">
          <div class="floor-amount">
            <span>Floors</span>
            <div class="amount">
              <button
                @click="handlefloorNumberAllMinus"
                :disabled="floors === 0"
              >
                <i class="fas fa-minus-circle"></i>
              </button>
              <input
                type="number"
                name="floors"
                id="floors"
                v-model.number="floors"
              />
              <button @click="handleFloorNumberAllPlus">
                <i class="fas fa-plus-circle"></i>
              </button>
            </div>
          </div>

          <br />
          <div class="room-amount">
            <span>Rooms</span>
            <div class="amount">
              <button @click="handleRoomNumberAllMinus" :disabled="rooms === 0">
                <i class="fas fa-minus-circle"></i>
              </button>
              <input
                type="number"
                name="rooms"
                id="rooms"
                v-model.number="rooms"
              />
              <button @click="handleRoomNumberAllPlus">
                <i class="fas fa-plus-circle"></i>
              </button>
            </div>
          </div>
          <br />
          <span>Elevator</span>
          <input
            type="checkbox"
            name="elevator"
            id=""
            v-model="elevator"
            @change="handleElevatorAll()"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";

export default defineComponent({
  name: "PickHouse",
  data() {
    return {
      selected: this.getFormOneHouseType() || null,
      rooms: this.getFormOneRooms() || 0,
      floors: this.getFormOneFloors() || 0,
      elevator: this.getFormOneElevator() || false,
    };
  },
  methods: {
    ...mapGetters([
      "getFormOneRooms",
      "getFormOneFloors",
      "getFormOneHouseType",
      "getFormOneElevator",
    ]),
    ...mapMutations([
      "handleTypeOfHouse",
      "handleRoomNumberPlus",
      "handleRoomNumberMinus",
      "handleFloorNumberPlus",
      "handleFloorNumberMinus",
      "handleElevator",
    ]),
    handleTypeOfHouseAll(event: any) {
      const data = event.target.value;
      this.handleTypeOfHouse(data);
      console.log(this.selected);
    },
    handleRoomNumberAllPlus() {
      this.rooms += 1;
      this.handleRoomNumberPlus();
    },
    handleRoomNumberAllMinus() {
      this.rooms -= 1;
      this.handleRoomNumberMinus();
    },
    handleFloorNumberAllPlus() {
      this.floors += 1;
      this.handleFloorNumberPlus();
    },
    handlefloorNumberAllMinus() {
      this.floors -= 1;
      this.handleFloorNumberMinus();
    },
    handleElevatorAll() {
      this.handleElevator(this.elevator);
    },
  },
});
</script>
<style lang='scss' scoped>
.pick-house {
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
  .pick-house__title {
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
  .pick-house__container {
    font-family: Comfortaa, sans-serif;
    color: #4b4b4b;
    width: 360px;
    height: 254px;
    background: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 9px;
    .main-options {
      padding: 5%;
      padding-top: 7%;
    }
    .house-options {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 15%;
      padding-left: 25%;
    }
    .building-options {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 15%;
      padding-left: 25%;
    }
    .floor-amount {
      width: 75%;
      display: flex;
      justify-content: space-between;
    }
    .room-amount {
      width: 75%;
      display: flex;
      justify-content: space-between;
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
  }
  .amount {
    display: flex;
    justify-content: space-between;
  }
}
</style>