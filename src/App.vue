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
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .bg-back-drop {
    background-image: url("~@/assets/images/bg-mobile-light.jpg");
    background-position: top;
    background-size: 100%;
    background-attachment: fixed;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .bg-back-drop {
    background-image: url("~@/assets/images/bg-mobile-light.jpg");
    background-position: top;
    background-size: 100%;
    background-attachment: fixed;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .bg-back-drop {
    background-image: url("~@/assets/images/bg-desktop-light.jpg");
    background-position: top;
    background-size: 100%;
    background-attachment: fixed;
  }
}
</style>
