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
import { ref, computed, onBeforeMount, onMounted, watch } from 'vue'
import eventApi from '@/api/events'
import usePromise from '@/composables/use-promise'
export default {
  setup() {
    const capacity = ref(3)
    const attending = ref(['Tim', 'Bob', 'Joe'])
    const spacesLeft = computed(() => {
      return capacity.value - attending.value.length
    })

    function increaseCapacity() {
      capacity.value++
    }

    onBeforeMount(() => {
      console.log('Before Mount!')
    })
    onMounted(() => {
      console.log('Mounted!')
    })

    const searchInput = ref('')
    const getEvents = usePromise(search => eventApi.getEventCount(search.value))

    watch(searchInput, () => {
      if (searchInput.value !== '') {
        getEvents.createPromise(searchInput)
      } else {
        getEvents.results.value = 0
      }
    })

    return {
      capacity,
      increaseCapacity,
      attending,
      spacesLeft,
      searchInput,
      ...getEvents
    }
  }
}
</script>
