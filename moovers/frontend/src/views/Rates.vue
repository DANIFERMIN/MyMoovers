<template>
  <section class="pick-rate">
    <div class="pick-rate__title">
      <i class="fas fa-vector-square"></i>
      <h2>Pick a Rate</h2>
    </div>
    <div class="pick-rate__container">
      <ul class="list-rates">
        <li v-for="rate in rates" :key="rate">
          <button
            :class="{
              'is-active': current === rate,
            }"
            @click="pickRate(rate)"
          >
            {{ rate }}
            <br />
            <i class="fas fa-truck-moving"></i>
          </button>
        </li>
      </ul>
    </div>
  </section>
  <div class="number-hours">
    <h3>Hours:</h3>
    <p>{{ numberOfHours }}</p>
  </div>
  <div class="navigation-buttons">
    <button class="prev-button" @click="previousForm">Prev</button>
    <button class="checkout" @click="checkout">Checkout</button>
    <p>{{ trip }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Rates from "../assets/constants/ListRates";
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default defineComponent({
  name: "Time",
  data() {
    return {
      rates: Rates,
      current: this.getFormThreeRate() || null,
      thingsToMoveObject: this.getThingsToMove(),
      thingsToMove: this.thingsObjectToArray(),
      numberOfHours: this.howManyHours(),
    };
  },
  computed: {
    ...mapState(["finishedForm"]),
  },
  methods: {
    ...mapGetters(["getFormThreeRate", "getThingsToMove", "getTrip"]),
    ...mapMutations(["pickRateStore", "createFinishedForm", "compileCart"]),
    ...mapActions(["createTrip"]),
    checkout() {
      const tripToCreate = JSON.parse(JSON.stringify(this.finishedForm));
      const currentRate = this.current.split(" ");
      const tripPlusCart = {
        userId: tripToCreate.userId,
        destinationAddress: tripToCreate.destinationAddress,
        pickUpAddress: tripToCreate.pickUpAddress,
        house: tripToCreate.house,
        refreshToken: tripToCreate.refreshToken,
        thingsToMove: tripToCreate.thingsToMove,
        rate: currentRate[0],
        hours: this.numberOfHours,
        total: currentRate[0] * this.numberOfHours,
      };
      this.createTrip(tripPlusCart);
      this.$router.push("/moovers/checkout");
    },
    pickRate(rate: string) {
      this.current = rate;
      this.pickRateStore(rate);
    },
    thingsObjectToArray() {
      const objectToConvert = this.getThingsToMove();
      const newArrayOfThings = Object.entries(objectToConvert).map(
        ([key, value]) => ({
          thingName: key,
          amount: value,
        })
      );
      console.log(this.thingsToMove);
      return newArrayOfThings;
    },
    howManyHours() {
      const thingsArrayToCount = this.thingsObjectToArray();
      if (thingsArrayToCount.length < 5) {
        return (this.numberOfHours = 2);
      } else if (thingsArrayToCount.length < 8) {
        return (this.numberOfHours = 3);
      } else {
        return (this.numberOfHours = 4);
      }
    },
  },
  props: ["nextForm", "previousForm"],
  mounted() {
    this.getThingsToMove();
    this.getTrip();
    this.createFinishedForm();
  },
});
</script>
<style lang='scss' scoped>
@media only screen and (min-width: 320px) and (max-width: 450px) {
  .pick-rate {
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
    .pick-rate__title {
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
    .pick-rate__container {
      font-family: Comfortaa, sans-serif;
      color: #4b4b4b;
      width: 360px;
      height: max-content;
      background: #fff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 9px;
      .list-rates {
        color: #6d6d6d;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        padding: 10%;
        button {
          width: 104px;
          height: 133px;
          background-color: #f1f3f8;
          box-sizing: border-box;
          border-radius: 12px;
          margin: 7%;
          padding: 15%;
          i {
            font-size: 2rem;
          }
        }
        .is-active {
          width: 104px;
          height: 133px;
          background-color: #76fcce;
          border: 3px solid #d78aff;
          box-sizing: border-box;
          border-radius: 12px;
          margin: 7%;
          padding: 15%;
        }
      }
    }
  }

  .navigation-buttons {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    .prev-button {
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
    .checkout {
      font-family: Roboto, sans-serif;
      font-size: 13px;
      font-style: normal;
      font-weight: 900;
      line-height: 15px;
      letter-spacing: 0.04em;
      text-align: center;
      color: #6d6d6d;
      margin-top: 15%;
      margin-bottom: 15%;
      width: 35%;
      height: 55px;
      background-color: #76fcce;
      border: solid 2px #6d6d6d;
      box-sizing: border-box;
      border-radius: 6px;
      cursor: pointer;
    }
  }
  .number-hours {
    font-family: Comfortaa, sans-serif;
    color: #4b4b4b;
  }
}

@media only screen and (min-width: 450px) and (max-width: 1600px) {
  .pick-rate {
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
    .pick-rate__title {
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
    .pick-rate__container {
      font-family: Comfortaa, sans-serif;
      color: #4b4b4b;
      width: 360px;
      height: max-content;
      background: #fff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 9px;
      .list-rates {
        color: #6d6d6d;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        padding: 10%;
        button {
          width: 104px;
          height: 133px;
          background-color: #f1f3f8;
          box-sizing: border-box;
          border-radius: 12px;
          margin: 7%;
          padding: 15%;
          i {
            font-size: 2rem;
          }
        }
        .is-active {
          width: 104px;
          height: 133px;
          background-color: #76fcce;
          border: 3px solid #d78aff;
          box-sizing: border-box;
          border-radius: 12px;
          margin: 7%;
          padding: 15%;
        }
      }
    }
  }

  .navigation-buttons {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    .prev-button {
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
    .checkout {
      font-family: Roboto, sans-serif;
      font-size: 13px;
      font-style: normal;
      font-weight: 900;
      line-height: 15px;
      letter-spacing: 0.04em;
      text-align: center;
      color: #6d6d6d;
      margin-top: 15%;
      margin-bottom: 15%;
      width: 35%;
      height: 55px;
      background-color: #76fcce;
      border: solid 2px #6d6d6d;
      box-sizing: border-box;
      border-radius: 6px;
      cursor: pointer;
    }
  }
  .number-hours {
    font-family: Comfortaa, sans-serif;
    color: #4b4b4b;
  }
}
</style>
