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
      <p>Number of events: {{ results }}</p>
    </div>
  </div>
</template>

<script>
import { ref, computed, onBeforeMount, onMounted, watch } from 'vue'
import eventApi from '@/api/events'
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
    const results = ref(0)

    watch(
      searchInput,
      () => {
        results.value = eventApi.getEventCount(searchInput.value)
      },
      { immediate: true }
    )

    return {
      capacity,
      increaseCapacity,
      attending,
      spacesLeft,
      searchInput,
      results
    }
  }
}
</script>
