<template>
  <div
    class="rounded-md bg-white shadow-xl dark:bg-darkVeryDarkDesaturatedBlue"
  >
    <!-- single todo item -->
    <template v-if="todos.length">
      <to-do-task-item
        class="border-b dark:border-gray-700"
        v-for="(todo, index) in todos"
        :key="index"
        :todo="{ ...todo, index: index }"
      />
    </template>
    <div v-else class="h-56 grid place-content-center">
      <div class="flex flex-col">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon h-20 dark:text-gray-400"
          viewBox="0 0 512 512"
        >
          <title>Newspaper</title>
          <path
            d="M368 415.86V72a24.07 24.07 0 00-24-24H72a24.07 24.07 0 00-24 24v352a40.12 40.12 0 0040 40h328"
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="32"
          />
          <path
            d="M416 464h0a48 48 0 01-48-48V128h72a24 24 0 0124 24v264a48 48 0 01-48 48z"
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="32"
          />
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
            d="M240 128h64M240 192h64M112 256h192M112 320h192M112 384h192"
          />
          <path
            d="M176 208h-64a16 16 0 01-16-16v-64a16 16 0 0116-16h64a16 16 0 0116 16v64a16 16 0 01-16 16z"
          />
        </svg>
        <p class="dark:text-gray-400">No Todos at this time.</p>
      </div>
    </div>

    <!-- current status -->
    <div v-if="todos.length" class="p-5 flex justify-between text-gray-500">
      <small :class="{ invisible: !todos.length }"
        >{{ todos.length }} item{{ todos.length > 1 ? "s" : "" }} left</small
      >
      <button class="capitalize text-sm">clear completed</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import ToDoTaskItem from "@/components/toDoTaskItem.vue";
export default defineComponent({
  name: "ToDoListCard",
  components: {
    ToDoTaskItem,
  },
  setup() {
    const store = useStore();
    const todos = computed(() => store.getters["todos/todos"]);
    return { todos };
  },
});
</script>

<style lang="scss" scoped></style>
