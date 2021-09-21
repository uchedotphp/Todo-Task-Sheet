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
      @submit="submit"
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
        :class="[
          showOptionalDetails ? 'block' : 'hidden',
          'bg-green-200 p-1 text-xs tracking-tighter w-20 shadow-md',
        ]"
      >
        Push enter
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "CreateToDo",
  setup() {
    const todo = ref("" as string);
    const allowedMaxTextCharacterCount = 100 as number;
    const showOptionalDetails = computed((): boolean =>
      Boolean(todo.value.length)
    );
    const textInputCount = computed((): number => todo.value.length);
    const isMaxInputCount = computed((): boolean =>
      Boolean(todo.value.length === allowedMaxTextCharacterCount)
    );
    function clearInput() {
      todo.value = "" as string;
    }
    return {
      todo,
      textInputCount,
      showOptionalDetails,
      clearInput,
      isMaxInputCount,
      allowedMaxTextCharacterCount,
    };
  },
});
</script>

<style lang="scss" scoped></style>
