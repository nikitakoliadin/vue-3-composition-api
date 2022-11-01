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
import eventApi from '@/api/events'
export default {
  data() {
    return {
      capacity: 3,
      attending: ['Tim', 'Bob', 'Joe'],
      searchInput: '',
      results: 0
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
  },
  watch: {
    searchInput: {
      handler(searchInput) {
        this.results = eventApi.getEventCount(searchInput)
      },
      immediate: true
    }
  }
}
</script>
