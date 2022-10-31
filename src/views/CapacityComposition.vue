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
import { ref, computed, onBeforeMount, onMounted } from 'vue'
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
    return { capacity, increaseCapacity, attending, spacesLeft }
  }
}
</script>
