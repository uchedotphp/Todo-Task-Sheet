<template>
  <div class="rounded-md bg-white py-4 px-5 text-gray-500 flex">
    <div class="mx-auto space-x-5 font-semibold">
      <span class="text-blue-700">All</span>
      <span class="">Active</span>
      <span class="">Completed</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "ToDoStatusFilterCard",
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
