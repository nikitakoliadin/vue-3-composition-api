<template>
  <div>
    <p>Spaces Left: {{ spacesLeft }} out of {{ capacity }}</p>
    <button @click="increaseCapacity()">Increase Capacity</button>
    <h2>Attending</h2>
    <ul>
      <li v-for="(name, index) in attending" :key="index">
        {{ name }}
      </li>
    </ul>
    Search for <input v-model="searchInput" />
    <div>
      <p>Loading: {{ loading }}</p>
      <p>Error: {{ error }}</p>
      <p>Number of events: {{ results }}</p>
    </div>
  </div>
</template>

<script>
import useEventSpace from '@/use/event-space'
import useMapping from '@/use/mapping'
import useSearch from '@/use/search'
import { onBeforeMount, onMounted } from 'vue'
export default {
  async setup() {
    onBeforeMount(() => {
      console.log('Before Mount!')
    })
    onMounted(() => {
      console.log('Mounted!')
    })

    const {
      capacity,
      attending,
      spacesLeft,
      increaseCapacity
    } = await useEventSpace()
    const { map, embedId } = await useMapping()
    const { searchInput, loading, error, results } = await useSearch()

    return {
      capacity,
      attending,
      spacesLeft,
      increaseCapacity,
      map,
      embedId,
      searchInput,
      loading,
      error,
      results
    }
  }
}
</script>
