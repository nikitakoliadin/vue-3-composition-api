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
import useEventSpace from '@/use/event-space'
import useMapping from '@/use/mapping'
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
    return { capacity, attending, spacesLeft, increaseCapacity, map, embedId }
  }
}
</script>
