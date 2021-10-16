<template>
  <section class="checkout">
    <div class="checkout__title">
      <i class="fas fa-vector-square"></i>
      <h2>Checkout</h2>
    </div>
    <div class="checkout__container">
      <h3>Total: {{ this.getCart().total }}</h3>
      <button class="button--apple" @click="payTrip">
        <i class="fab fa-apple-pay"></i>
      </button>
      <button class="button--paypal" @click="payTrip">
        <i class="fab fa-cc-paypal"></i>
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "Checkout",
  data() {
    return {
      cart: this.getCart(),
    };
  },
  components: {},
  methods: {
    ...mapGetters(["getCart"]),
    ...mapActions(["createCart"]),
    payTrip() {
      const currentCart = this.getCart();
      console.log(currentCart);
      this.$router.push("/moovers/invoice");
      this.createCart(currentCart);
    },
  },
  mounted() {
    this.getCart();
  },
});
</script>
<style lang="scss" scoped>
@media only screen and (min-width: 320px) and (max-width: 450px) {
  .checkout {
    width: 100%;
    .checkout__title {
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
    .checkout__container {
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
      margin-bottom: 3%;
      .button--apple {
        width: 85%;
        height: 50px;
        left: calc(50% - 343px / 2 + 1px);
        top: calc(50% - 50px / 2 - 175.5px);
        background: #000000;
        border-radius: 8px;
        cursor: pointer;
        margin-bottom: 10%;
        i {
          font-size: 2.5rem;
        }
      }
      .button--paypal {
        width: 85%;
        height: 50px;
        left: calc(50% - 343px / 2 + 1px);
        top: calc(50% - 50px / 2 - 97.5px);
        background: #ffffff;
        border: 1px solid #bbbaba;
        border-radius: 8px;
        cursor: pointer;
        margin-bottom: 25%;
        i {
          font-size: 2.5rem;
        }
      }
      .fa-apple-pay {
        color: #fff;
        font-size: 1rem;
      }
      .fa-cc-paypal {
        color: #253b80;
        font-size: 1rem;
      }
    }
  }
}

@media only screen and (min-width: 450px) and (max-width: 1600px) {
  .checkout {
    margin-top: 30%;
    width: 100%;
    .checkout__title {
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
    .checkout__container {
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
      margin-bottom: 3%;
      .button--apple {
        width: 85%;
        height: 50px;
        left: calc(50% - 343px / 2 + 1px);
        top: calc(50% - 50px / 2 - 175.5px);
        background: #000000;
        border-radius: 8px;
        cursor: pointer;
        margin-bottom: 10%;
        i {
          font-size: 2.5rem;
        }
      }
      .button--paypal {
        width: 85%;
        height: 50px;
        left: calc(50% - 343px / 2 + 1px);
        top: calc(50% - 50px / 2 - 97.5px);
        background: #ffffff;
        border: 1px solid #bbbaba;
        border-radius: 8px;
        cursor: pointer;
        margin-bottom: 25%;
        i {
          font-size: 2.5rem;
        }
      }
      .fa-apple-pay {
        color: #fff;
        font-size: 1rem;
      }
      .fa-cc-paypal {
        color: #253b80;
        font-size: 1rem;
      }
    }
  }
}
</style>