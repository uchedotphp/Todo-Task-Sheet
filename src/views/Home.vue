<template>
  <div class="py-12 px-8">
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

    <div class="space-y-5">
      <!-- creating a todo item -->
      <create-to-do />

      <!-- todo items parent card -->
      <to-do-list-card />

      <!-- todos status filter -->
      <to-do-status-filter-card />
    </div>
    <div class="fixed bottom-16 text-center right-0 left-0">
      <b class="text-gray-500 font-normal text-sm">
        Drag and drop to reorder list
      </b>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CreateToDo from "@/components/createToDo.vue";
import ToDoStatusFilterCard from "@/components/toDoStatusFilterCard.vue";
import ToDoListCard from "@/components/toDoListCard.vue";

export default defineComponent({
  name: "Home",
  components: {
    CreateToDo,
    ToDoStatusFilterCard,
    ToDoListCard,
  },
});
</script>
