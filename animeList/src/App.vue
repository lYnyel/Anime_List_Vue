<script setup></script>

<template>
  <div class="bg-[#0E0F13] w-4/5 m-auto h-screen rounded-xl shadow-xl mt-14">
    <header class="flex justify-between border-b border-slate-600 px-8 py-8">
      <div class="flex items-center gap-4">
        <img class="w-20" src="/logo.png" alt="" />
        <div class="text-[#DAE5FF] font-bold">
          <h2 class="text-xl font-bold uppercase">Akashi</h2>
          <p class="text-slate-400">Anime List</p>
        </div>
      </div>

      <ul class="text-[#DAE5FF] flex items-center gap-10">
        <li class="flex items-center gap-3">
          <img src="/heart.svg" alt="" />
          <b>Saved</b>
        </li>

        <li class="flex items-center gap-3">
          <img src="/profile.svg" alt="" />
          <b>Profile</b>
        </li>
      </ul>
    </header>
  </div>
</template>

<style scoped></style>
