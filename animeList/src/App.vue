<script setup>
import Header from './components/Header.vue'
import AnimeCard from './components/AnimeCard.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const animeList = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('https://api.jikan.moe/v4/top/anime')
    animeList.value = response.data.data
  } catch (err) {
    console.log(err)
  }
})
</script>

<template>
  <div class="bg-[#0E0F13] w-4/5 m-auto h-full rounded-xl shadow-xl mt-14">
    <Header />

    <div class="gap-8 p-8 overflow-y-auto h-full grid grid-cols-4">
      <AnimeCard class="gap-5"
      v-for="anime in animeList"
      :key="anime.mal_id"
      :anime="anime" />
    </div>
  </div>
</template>

<style scoped></style>
