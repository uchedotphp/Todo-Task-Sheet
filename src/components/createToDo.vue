<template>
  <div class="relative">
    <div
      :class="[
        showOptionalDetails ? 'block' : 'hidden',
        'absolute flex -top-6 w-full',
      ]"
    >
      <button
        @click="clearInput"
        role="button"
        class="mr-auto bg-red-200 rounded p-0.5 text-xs tracking-tighter"
      >
        Clear input
      </button>
      <small :class="[isMaxInputCount ? 'text-red-600' : 'dark:text-white']"
        >{{ textInputCount }}/{{ allowedMaxTextCharacterCount }}</small
      >
    </div>
    <form
      @submit.prevent="createToDo"
      :class="[
        isMaxInputCount ? 'border-red-600' : 'border-transparent',
        'bg-white rounded-md py-4 pl-5 pr-2 flex border-2 dark:bg-darkVeryDarkDesaturatedBlue',
      ]"
    >
      <textarea
        :maxlength="allowedMaxTextCharacterCount"
        v-model="todo"
        rows="1"
        class="
          focus:outline-none
          w-full
          pr-4
          mr-auto
          dark:bg-darkVeryDarkDesaturatedBlue dark:text-white
        "
        placeholder="Create a new todo..."
      />
      <button
        type="submit"
        :class="[
          showOptionalDetails ? 'block' : 'hidden',
          'bg-green-200 p-1 text-xs tracking-tighter w-20 shadow-md',
        ]"
      >
        Create
      </button>
    </form>
  </div>
  <notification
    :show="notification"
    @closenotification="closenotification($event)"
  >
    <p class="text-sm font-medium text-gray-900">{{ todoNotificationTitle }}</p>
    <p v-if="todoNotificationSubTitle" class="mt-1 text-sm text-gray-500">
      {{ todoNotificationSubTitle }}
    </p>
  </notification>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from "vue";
import { useStore } from "vuex";
import { TodosPayload } from "../types";
import notification from "./utils/notification.vue";

export default defineComponent({
  components: { notification },
  name: "CreateToDo",
  setup() {
    const store = useStore();
    const todoNotificationTitle = ref("Todo saved!");
    const todoNotificationSubTitle = ref("");
    const allowedToDosCount = 5;
    const todos = computed(() => store.getters["todos/todos"]);
    const todo = ref("" as string);
    const notification = ref(false as boolean);
    const allowedMaxTextCharacterCount = 100 as number;
    const showOptionalDetails = computed((): boolean =>
      Boolean(todo.value.length)
    );
    const textInputCount = computed((): number => todo.value.length);
    const isMaxInputCount = computed((): boolean =>
      Boolean(todo.value.length === allowedMaxTextCharacterCount)
    );
    watch(todo, () => {
      if (todo.value.length && notification.value) {
        notification.value = false;
      }
    });
    function clearInput() {
      todo.value = "";
    }
    function createToDo() {
      if (todos.value.length >= allowedToDosCount) {
        todoNotificationTitle.value = "Not Allowed";
        todoNotificationSubTitle.value = "You are allowed a max of 5 todos!";
        notification.value = true;
        return;
      } else if (
        todo.value &&
        todos.value.some(
          (t: { title: string }): boolean =>
            t.title.toLowerCase() === todo.value.toLowerCase()
        )
      ) {
        notification.value = true;
        todoNotificationTitle.value = "Not Allowed";
        todoNotificationSubTitle.value = "This item already exist!!";
        return;
      }
      store.commit("todos/CREATE_TODO", {
        title: todo.value,
        completed: false,
      } as TodosPayload);
      notification.value = true;
      todo.value = "";
      todoNotificationTitle.value = "Todo Saved!";
      todoNotificationSubTitle.value = "";
    }
    function closenotification(e: boolean): void {
      notification.value = e;
    }
    return {
      todo,
      textInputCount,
      showOptionalDetails,
      clearInput,
      isMaxInputCount,
      allowedMaxTextCharacterCount,
      createToDo,
      notification,
      closenotification,
      todoNotificationTitle,
      todoNotificationSubTitle,
    };
  },
});
</script>

<style lang="scss" scoped></style>
