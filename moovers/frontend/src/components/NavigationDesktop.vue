<template>
  <div class="navigation--desktop" v-if="isUserAuthenticated()">
    <router-link to="/cleaners">
      <section class="navigation--desktop__cleaning">
        <div>
          <img :src="logos.cleaning" alt="cleaning logo" />
        </div>
      </section>
    </router-link>
    <router-link to="/moovers">
      <section class="navigation--desktop__moovers">
        <div class="logo-ellipse">
          <div>
            <img :src="logos.moovers" alt="moovers logo" />
          </div>
        </div>
      </section>
    </router-link>
    <router-link to="/painters">
      <section class="navigation--desktop__paint">
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
  name: "NavigationDesktop",
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
  .navigation--desktop {
    display: none;
  }
}
@media only screen and (min-width: 450px) and (max-width: 1600px) {
  .navigation--desktop {
    display: flex;
    justify-content: flex-end;
    position: absolute;
    width: 100%;
    height: 148px;
    left: 0px;
    top: 0px;
    background: #ffcf72;
    padding-right: 3%;
    .navigation--desktop__moovers {
      height: 100%;
      width: 85px;
      display: flex;
      justify-content: center;
      .logo-ellipse {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #ffcf72;

        div {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            position: relative;
            max-width: 100%;
            max-height: 100%;
            object-fit: fill;
            top: 3px;
            left: -7px;
          }
        }
      }
    }
    .navigation--desktop__cleaning {
      height: 100%;
      width: 85px;
      display: flex;
      justify-content: center;
      div {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          position: relative;
          height: 50%;
          object-fit: contain;
        }
      }
    }
    .navigation--desktop__paint {
      height: 100%;
      width: 85px;
      display: flex;
      justify-content: center;
      div {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          position: relative;
          height: 35%;
          object-fit: contain;
        }
      }
    }
  }
}
</style>