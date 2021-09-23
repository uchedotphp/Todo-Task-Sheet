<template>
  <div
    class="rounded-md bg-white shadow-xl dark:bg-darkVeryDarkDesaturatedBlue"
  >
    <!-- single todo item -->
    <template v-if="fetchStatusTodo.length">
      <to-do-task-item
        class="border-b dark:border-gray-700"
        v-for="(todo, index) in fetchStatusTodo"
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
        <p class="dark:text-gray-400">
          No {{ status === "all" ? "" : status }} todos at this time.
        </p>
      </div>
    </div>

    <!-- current status -->
    <div
      v-if="fetchStatusTodo.length"
      class="p-5 flex justify-between text-gray-500"
    >
      <small :class="{ invisible: !fetchStatusTodo.length }"
        >{{ fetchStatusTodo.length }} item{{
          fetchStatusTodo.length > 1 ? "s" : ""
        }}
        left</small
      >
      <button
        @click="clearSelection()"
        type="button"
        class="capitalize text-sm"
      >
        clear {{ status }}
      </button>
    </div>
  </div>
  <notification
    :show="notification"
    @closenotification="closenotification($event)"
  >
    <p class="text-sm font-medium text-gray-900 capitalize">
      {{ todoNotificationTitle }}
    </p>
  </notification>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";
import ToDoTaskItem from "@/components/toDoTaskItem.vue";
import Notification from "./utils/notification.vue";

export default defineComponent({
  name: "ToDoListCard",
  props: {
    status: {
      type: String,
      default: "all",
    },
  },
  components: {
    ToDoTaskItem,
    Notification,
  },
  setup(props) {
    const notification = ref(false as boolean);
    const todoNotificationTitle = ref("");
    const store = useStore();
    const todos = computed(() => store.getters["todos/todos"]);
    const fetchStatusTodo = computed(() => {
      if (props.status === "all") {
        return todos.value;
      } else if (props.status === "uncompleted") {
        return todos.value.filter(
          (todo: { title: string; completed: boolean }) => !todo.completed
        );
      } else {
        return todos.value.filter(
          (todo: { title: string; completed: boolean }) => todo.completed
        );
      }
    });
    function closenotification(e: boolean): void {
      notification.value = e;
    }
    function clearSelection() {
      store.commit("todos/CLEAR_TODOS", props.status);
      notification.value = true;
      todoNotificationTitle.value = `${props.status} tasks cleared`;
    }
    return {
      fetchStatusTodo,
      clearSelection,
      notification,
      todoNotificationTitle,
      closenotification,
    };
  },
});
</script>

<style lang="scss" scoped></style>
