<script setup>
import Header from './components/Header.vue'
import AnimeCard from './components/AnimeCard.vue'
import Saved from './components/Saved.vue'
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'

const animeList = ref([])
const sortBy = ref('')
const searchQuery = ref('')

const isSavedVisible = ref(false)

const toggleSavedVisibility = () => {
  isSavedVisible.value = !isSavedVisible.value
}

onMounted(async () => {
  try {
    const response = await axios.get('https://api.jikan.moe/v4/top/anime')
    animeList.value = response.data.data
  } catch (err) {
    console.log(err)
  }
})

const sortedAndFilteredAnime = computed(() => {
  let sortedList = animeList.value.slice()

  if (sortBy.value === 'title') {
    sortedList.sort((a, b) => a.title.localeCompare(b.title))
  } else if (sortBy.value === 'score') {
    sortedList.sort((a, b) => b.score - a.score)
  }

  if (searchQuery.value) {
    sortedList = sortedList.filter((anime) =>
      anime.title.toLowerCase().includes(searchQuery.value.toLowerCase()),
    )
  }

  return sortedList
})
</script>

<template>
  <div class="bg-[#0E0F13] w-4/5 m-auto h-full rounded-xl shadow-xl mt-14">
    <Header @open-saved="toggleSavedVisibility" />

    <div class="flex justify-between mt-6 p-10 items-center">
      <h2 class="text-[#DAE5FF] text-3xl font-bold mb-8 ml-10">Anime List</h2>
      <div class="flex gap-4">
        <select
          v-model="sortBy"
          class="py-1 px-3 border rounded-md text-[#c4cde4] outline-none bg-[#1b1d24]"
        >
          <option value="">По релизу</option>
          <option value="title">По названию</option>
          <option value="score">По рейтингу</option>
        </select>
        <div class="relative">
          <img class="w-6 absolute left-2 top-1.5" src="/search.png" alt="" />
          <input
            v-model="searchQuery"
            class="border rounded-md py-1 pl-10 pr-4 outline-none text-[#DAE5FF] focus:border-gray-400"
            placeholder="Search..."
          />
        </div>
      </div>
    </div>
    <div class="gap-10 p-10 overflow-y-auto h-full grid grid-cols-4 mx-20">
      <AnimeCard
        v-for="anime in sortedAndFilteredAnime"
        :key="anime.mal_id"
        :anime="anime"
        :isfavorite="false"
      />
    </div>
  </div>
  <Saved v-if="isSavedVisible" @close="toggleSavedVisibility" />
</template>

<style scoped></style>
