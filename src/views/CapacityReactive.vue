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
  </div>
</template>

<script>
import { reactive, computed, toRefs, onBeforeMount, onMounted } from 'vue'
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
    return { ...toRefs(event), increaseCapacity }
  }
}
</script>
