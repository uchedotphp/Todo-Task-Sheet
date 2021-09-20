<template>
  <div class="py-12 px-6">
    <div class="flex justify-between items-center mb-10">
      <h1
        class="uppercase text-white font-bold text-2xl"
        style="letter-spacing: 0.5em"
      >
        todo
      </h1>
      <img
        class="h-5"
        role="button"
        src="../assets/images/icon-moon.svg"
        alt="moon display for dark mode"
      />
    </div>
    <create-to-do />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CreateToDo from "@/components/createToDo.vue";

export default defineComponent({
  name: "Home",
  components: {
    CreateToDo,
  },
});
</script>
