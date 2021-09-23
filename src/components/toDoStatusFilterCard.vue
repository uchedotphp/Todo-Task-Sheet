<template>
  <div
    class="
      rounded-md
      bg-white
      py-4
      px-5
      text-gray-500
      flex
      dark:bg-darkVeryDarkDesaturatedBlue
    "
  >
    <div class="mx-auto space-x-5 font-semibold">
      <span
        role="button"
        @click.prevent="setStatus('all')"
        :class="{ 'text-blue-700': currentFilter === 'all' }"
        >All</span
      >
      <span
        role="button"
        @click.prevent="setStatus('uncompleted')"
        :class="{ 'text-blue-700': currentFilter === 'uncompleted' }"
        >Uncompleted</span
      >
      <span
        role="button"
        @click.prevent="setStatus('completed')"
        :class="{ 'text-blue-700': currentFilter === 'completed' }"
        >Completed</span
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ToDoStatusFilterCard",
  setup(props, context) {
    const currentFilter = ref("all");
    return {
      currentFilter,
      setStatus(s: string): void {
        currentFilter.value = s;
        context.emit("changeStat", s);
      },
    };
  },
});
</script>

<style lang="scss" scoped></style>
