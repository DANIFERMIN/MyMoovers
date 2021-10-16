<template>
  <section class="invoice">
    <div class="profile">
      <div class="avatar">
        <i class="fas fa-user-circle"></i>
      </div>
      <p>{{ getCartFromApi().user.firstName }}</p>
    </div>
    <br />
    <i class="fas fa-grip-lines"></i>
    <div class="total-rate">
      <h3>Total:{{ getCartFromApi().total }}</h3>
      <p class="rate">Rate: {{ getCartFromApi().rate }} € per hour</p>
    </div>
    <br />
    <i class="fas fa-grip-lines"></i>
    <div class="things">
      <p>Things moved:</p>
      <ul>
        <li v-for="thing in getCartFromApi().trip.thingsToMove" :key="thing">
          <span>Item: {{ thing.thingName }}</span>
          <span>Amount: {{ thing.amount }}</span>
        </li>
      </ul>
    </div>
    <br />
    <i class="fas fa-grip-lines"></i>
    <div class="date-number">
      <div class="invoice-number">
        <p>Invoice number: {{ getCartFromApi()?._id.slice(5) }}</p>
      </div>
      <div class="date">
        <p>Date: {{ date }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapState } from "vuex";

export default defineComponent({
  name: "Invoice",
  data() {
    const theApiCart = this.getCartFromApi();
    return {
      thingsMoved: this.getCartFromApi().trip.thingsToMove,
      apiCart: theApiCart,
      date: new Date().toDateString(),
    };
  },
  computed: {
    ...mapState(["cartFromApi"]),
  },
  methods: {
    ...mapGetters(["getCartFromApi"]),
  },
  mounted() {
    this.getCartFromApi();
  },
});
</script>
<style lang="scss" scoped>
@media only screen and (min-width: 320px) and (max-width: 450px) {
  .invoice {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-family: Comfortaa, sans-serif;
    color: #4b4b4b;
    width: 100%;
    height: 50%;
    background: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 9px;
    margin-bottom: 15%;
    .profile {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .avatar {
        font-size: 3.5rem;
      }
    }
    .total-rate {
      font-family: Roboto, sans-serif;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      p {
        font-weight: 400;
      }
    }
    .things {
      font-family: Roboto, sans-serif;
      font-weight: 100;
      display: flex;
      flex-direction: column;
      padding: 5%;
      margin: 5%;
      flex-wrap: wrap;
      width: 80%;
      background: rgba(91, 99, 169, 0.1);
      p {
        font-weight: 400;
      }
      li {
        display: flex;
        justify-content: space-between;
        font-size: 0.7rem;
        span {
          margin-left: 1%;
        }
      }
    }
    .date-number {
      width: 100%;
      font-family: Roboto, sans-serif;
      font-weight: 300;
      font-size: 0.7rem;
      display: flex;
      justify-content: space-evenly;
    }
  }
}

@media only screen and (min-width: 450px) and (max-width: 1600px) {
  .invoice {
    margin-top: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-family: Comfortaa, sans-serif;
    color: #4b4b4b;
    width: 100%;
    height: 50%;
    background: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 9px;
    margin-bottom: 15%;
    .profile {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .avatar {
        font-size: 3.5rem;
      }
    }
    .total-rate {
      font-family: Roboto, sans-serif;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      p {
        font-weight: 400;
      }
    }
    .things {
      font-family: Roboto, sans-serif;
      font-weight: 100;
      display: flex;
      flex-direction: column;
      padding: 5%;
      margin: 5%;
      flex-wrap: wrap;
      width: 80%;
      background: rgba(91, 99, 169, 0.1);
      p {
        font-weight: 400;
      }
      li {
        display: flex;
        justify-content: space-between;
        font-size: 0.7rem;
        span {
          margin-left: 1%;
        }
      }
    }
    .date-number {
      width: 100%;
      font-family: Roboto, sans-serif;
      font-weight: 300;
      font-size: 0.7rem;
      display: flex;
      justify-content: space-evenly;
    }
  }
}
</style>