<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['close']);
</script>


<template>
  <div class="fixed inset-0 z-40 bg-black opacity-70"></div>

  <div class="fixed inset-0 z-50 flex items-center justify-center">
    <div class="bg-[#666257f3] w-4/5 h-4/5 rounded-xl shadow-lg p-8 relative">
      <button
        @click="$emit('close')"
        class="absolute top-4 right-4 text-gray-100 hover:text-gray-700 text-2xl font-bold"
      >
        &times;
      </button>
      <h2 class="text-2xl font-bold mb-4 text-white">Ваши сохранённые аниме</h2>
      <p class="text-gray-100">Список избранного пока пуст...</p>
    </div>
  </div>
</template>
