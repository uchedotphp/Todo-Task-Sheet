<template>
  <div
    class="h-screen bg-back-drop bg-no-repeat bg-customVeryLightGrayishBlue"
    :class="{ 'bg-customVeryDarkGrayishBlue': isDarkThemeOn }"
  >
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  mounted () {
    // this.$toasted.show('hello billo')
  },
  setup() {
    const store = useStore();
    const isDarkThemeOn = computed(() => store.getters.stateOfDarkTheme);
    return {
      isDarkThemeOn,
    };
  },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap");
.bg-back-drop {
  background-image: url("~@/assets/images/bg-mobile-light.jpg");
  background-position: top;
  background-size: 100%;
  background-attachment: fixed;
}
</style>
