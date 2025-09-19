<script setup>
import { defineProps, ref } from 'vue'

defineProps({
  anime: {
    type: Object,
    required: true,
  },
})

const isLiked = ref(false)

const toggleLike = () => {
  isLiked.value = !isLiked.value
}
</script>

<template>
  <div class="text-[#DAE5FF] rounded-3xl hover:-translate-y-2 transition w-80" v-auto-animate >
    <img class="" :src="anime.images.webp.image_url" :alt="anime.title" />
    <h3 class="">{{ anime.title }}</h3>
    <h3>{{ anime.year }}</h3>
    <p class="flex items-center gap-35">
      ⭐ {{ anime.score }}
      <img
        :src="!isLiked ? '/like-1.png' : '/like-2.png'"
        alt="Like"
        class="cursor-pointer w-7"
        @click="toggleLike"
      />
    </p>
  </div>
</template>
<style></style>
