<template>
  <div class="rounded-md bg-white shadow-xl">
    <!-- single todo item -->
    <to-do-task-item class="border-b" v-for="t in 5" :key="t" />

    <!-- current status -->
    <div class="p-5 flex justify-between text-gray-500">
      <small>5 items left</small>
      <button class="capitalize text-sm">clear completed</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ToDoTaskItem from "@/components/toDoTaskItem.vue";
export default defineComponent({
  name: "ToDoListCard",
  components: {
    ToDoTaskItem,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
