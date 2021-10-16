<template>
  <section class="moovers" v-if="isUserAuthenticated()">
    <AddressFavorites
      v-if="currentForm === 1"
      :nextForm="nextForm"
      :previousForm="previousForm"
    />
    <HouseAndThings
      v-if="currentForm === 2"
      :nextForm="nextForm"
      :previousForm="previousForm"
    />
    <CalendarAndTime
      v-if="currentForm === 3"
      :nextForm="nextForm"
      :previousForm="previousForm"
    />

    <Rates
      v-if="currentForm === 4"
      :nextForm="nextForm"
      :previousForm="previousForm"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CalendarAndTime from "./CalendarAndTime.vue";
import HouseAndThings from "./HouseAndThings.vue";
import Rates from "./Rates.vue";
import AddressFavorites from "./AddressFavorites.vue";
import { mapState } from "vuex";

export default defineComponent({
  name: "Trip",
  data() {
    return {
      currentForm: 1,
    };
  },
  components: {
    AddressFavorites,
    CalendarAndTime,
    HouseAndThings,
    Rates,
  },
  methods: {
    ...mapState(["isUserAuthenticated"]),
    nextForm() {
      if (this.currentForm > 3) {
        return this.currentForm;
      }
      return (this.currentForm += 1);
    },
    previousForm() {
      if (this.currentForm > 1) {
        return (this.currentForm -= 1);
      }
      return this.currentForm;
    },
  },
});
</script>
<style lang="scss" scoped>
.moovers {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
