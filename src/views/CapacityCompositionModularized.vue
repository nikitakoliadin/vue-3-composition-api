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
  setup() {
    // return { ...useEventSpace(), ...useMapping() } // Bad
    const {
      capacity,
      attending,
      spacesLeft,
      increaseCapacity
    } = useEventSpace()
    const { map, embedId } = useMapping()
    const { searchInput, loading, error, results } = useSearch()

    onBeforeMount(() => {
      console.log('Before Mount!')
    })
    onMounted(() => {
      console.log('Mounted!')
    })
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
