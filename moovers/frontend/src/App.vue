<template>
  <div class="all">
    <NavigationDesktop />
    <router-view />
    <Navigation />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navigation from "../src/components/Navigation.vue";
import NavigationDesktop from "../src/components/NavigationDesktop.vue";

export default defineComponent({
  name: "App",
  components: {
    Navigation,
    NavigationDesktop,
  },
});
</script>

<style lang="scss" scoped>
@import "styles/_custom.scss";
.all {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
</style>
