<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  anime: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="text-[#DAE5FF]">
    <img class="" :src="anime.images.webp.image_url" :alt="anime.title" />
    <h3 class="">{{ anime.title }}</h3>
    <p class="">⭐ {{ anime.score }}</p>
  </div>
</template>
<style></style>
