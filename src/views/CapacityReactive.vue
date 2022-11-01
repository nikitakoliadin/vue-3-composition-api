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
import {
  reactive,
  computed,
  toRefs,
  onBeforeMount,
  onMounted,
  watch,
  ref
} from 'vue'
import eventApi from '@/api/events'
export default {
  setup() {
    const event = reactive({
      capacity: 3,
      attending: ['Tim', 'Bob', 'Joe'],
      spacesLeft: computed(() => {
        return event.capacity - event.attending.length
      })
    })

    function increaseCapacity() {
      event.capacity++
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
    return { ...toRefs(event), increaseCapacity, searchInput, results }
  }
}
</script>
