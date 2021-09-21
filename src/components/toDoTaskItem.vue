<template>
  <div class="px-5 py-4 flex items-center justify-between">
    <div class="flex items-center space-x-3">
      <button
        @click="markItem(todo.index)"
        :class="[
          todo.completed
            ? 'bg-pink-300 bg-gradient-to-tl from-purple-900'
            : 'bg-white border-gray-300 dark:border-gray-600 border dark:bg-transparent',
          'relative w-6 h-6 flex items-center justify-center rounded-full',
        ]"
      >
        <svg
          v-if="todo.completed"
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="9"
        >
          <path
            fill="none"
            stroke="#FFF"
            stroke-width="2"
            d="M1 4.304L3.696 7l6-6"
          />
        </svg>
      </button>
      <p
        :class="[
          todo.completed ? 'line-through text-gray-300' : 'text-gray-600',
          'truncate w-64 text-sm dark:text-gray-300 capitalize',
        ]"
      >
        {{ todo.title }}
      </p>
    </div>
    <button class="focus:outline-none">
      <img class="w-3" src="../assets/images/icon-cross.svg" alt="" srcset="" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  props: {
    todo: {
      type: Object,
    },
  },
  setup() {
    const store = useStore();
    function markItem(index: number): void {
      store.commit("todos/MARK_TODO", index);
    }
    return {
      markItem,
    };
  },
});
</script>

<style lang="scss" scoped></style>
