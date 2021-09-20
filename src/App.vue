<template>
  <div class="h-screen bg-back-drop bg-no-repeat">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap");
.bg-back-drop {
  background-image: url("~@/assets/images/bg-mobile-light.jpg");
  background-position: top;
  background-size: 100%;
  background-attachment: fixed;
}
</style>
