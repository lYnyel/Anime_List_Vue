<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['open-saved'])
</script>

<template>
  <header class="flex justify-between border-b border-slate-600 px-8 py-8">
    <div class="flex items-center gap-4">
      <img class="w-20" src="/logo.png" alt="" />
      <div class="text-[#DAE5FF] font-bold">
        <h2 class="text-xl font-bold uppercase">Akashi</h2>
        <p class="text-slate-400">Anime List</p>
      </div>
    </div>

    <ul class="text-[#DAE5FF] flex items-center gap-10">
      <li
        class="flex items-center gap-3 hover:text-white cursor-pointer"
        @click="emit('open-saved')"
      >
        <img src="/heart.svg" alt="" />
        <span>Saved</span>
      </li>

      <li class="flex items-center gap-3 hover:text-white cursor-pointer">
        <img src="/profile.svg" alt="" />
        <span>Profile</span>
      </li>
    </ul>
  </header>
</template>
