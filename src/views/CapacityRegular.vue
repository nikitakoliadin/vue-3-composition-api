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
export default {
  data() {
    return {
      capacity: 3,
      attending: ['Tim', 'Bob', 'Joe']
    }
  },
  methods: {
    increaseCapacity() {
      this.capacity++
    }
  },
  computed: {
    spacesLeft() {
      return this.capacity - this.attending.length
    }
  },
  beforeMount() {
    console.log('Before Mount!')
  },
  mounted() {
    console.log('Mounted!')
  }
}
</script>
