<template>
  <div class="px-5 py-4 flex items-center justify-between">
    <div class="flex items-center space-x-3">
      <button
        :class="[
          selected
            ? 'bg-pink-300 bg-gradient-to-tl from-purple-900 border'
            : 'bg-white border-gray-300 border',
          'relative w-6 h-6 flex items-center justify-center rounded-full',
        ]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
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
          selected ? 'line-through text-gray-300' : 'text-gray-600',
          'truncate w-64 text-sm ',
        ]"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum esse
        quisquam tempora magni illo? Nesciunt mollitia facilis nulla modi
        quisquam suscipit quos quod quas, quia possimus doloribus explicabo
        corporis impedit et, praesentium a? Accusantium, quibusdam vel
        blanditiis ipsum vitae accusamus cupiditate, earum sed quia itaque quo
        maiores fugit corporis delectus tempore rem? Minus deserunt ut id
        officiis nostrum quaerat suscipit corrupti libero, incidunt doloribus
        sequi illum perspiciatis quod autem culpa ab quisquam placeat nam
        tempore assumenda nisi impedit. Repellat minima, laudantium rerum ab
        perferendis esse? Quisquam, illum reiciendis. Id cumque officiis sint
        dignissimos iste labore quam ratione accusantium consequatur quas.
      </p>
    </div>
    <button class="focus:outline-none">
      <img class="w-3" src="../assets/images/icon-cross.svg" alt="" srcset="" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const selected = ref(false as boolean);
    return {
      selected,
    };
  },
});
</script>

<style lang="scss" scoped></style>
