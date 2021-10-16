<template>
  <div class="navigation" v-if="isUserAuthenticated()">
    <router-link to="/cleaners">
      <section class="navigation__cleaning">
        <div>
          <img :src="logos.cleaning" alt="cleaning logo" />
        </div>
      </section>
    </router-link>
    <router-link to="/moovers">
      <section class="navigation__moovers">
        <div class="logo-ellipse">
          <div>
            <img :src="logos.moovers" alt="moovers logo" />
          </div>
        </div>
      </section>
    </router-link>
    <router-link to="/painters">
      <section class="navigation__paint">
        <div>
          <img :src="logos.paint" alt="painters logo" />
        </div>
      </section>
    </router-link>
  </div>
</template>



<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  name: "Navigation",
  data() {
    return {
      logos: {
        moovers: "https://i.ibb.co/X86td7T/moovers-logo.png",
        cleaning: "https://i.ibb.co/d4rh21z/CLEANING-ICON-gris.png",
        paint: "https://i.ibb.co/XjMGF15/PAINT-ICON-gris.png",
      },
    };
  },
  methods: {
    ...mapState(["isUserAuthenticated"]),
  },
});
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 320px) and (max-width: 450px) {
  .navigation {
    align-self: flex-end;
    display: flex;
    justify-content: space-between;
    background-color: #ffcf72;
    width: 100%;
    height: 71px;
    left: 0px;
    top: 550px;
    .navigation__moovers {
      width: 100px;
      .logo-ellipse {
        position: relative;
        left: -20px;
        width: 140px;
        height: 92px;
        margin-top: -21%;
        border-radius: 49%;
        background: #ffcf72;
        img {
          max-width: 100%;
          max-height: 100%;
          position: relative;
          width: 175%;
          top: -15px;
          left: 7px;
          object-fit: contain;
        }
      }
    }
    .navigation__cleaning {
      height: 100%;
      width: 100px;
      display: flex;
      justify-content: center;
      div {
        max-height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          position: relative;
          height: 75%;
          object-fit: contain;
        }
      }
    }
    .navigation__paint {
      height: 100%;
      width: 100px;
      display: flex;
      justify-content: center;
      flex-grow: 0.2;

      div {
        display: flex;
        align-items: center;
        img {
          position: relative;
          height: 50%;
          object-fit: contain;
        }
      }
    }
  }
}
@media only screen and (min-width: 450px) and (max-width: 1600px) {
  .navigation {
    display: none;
  }
}
</style>