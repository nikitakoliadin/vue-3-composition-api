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
import eventApi from '@/api/events'
export default {
  data() {
    return {
      capacity: 3,
      attending: ['Tim', 'Bob', 'Joe'],
      searchInput: '',
      loading: false,
      error: null,
      results: 0
    }
  },
  methods: {
    increaseCapacity() {
      this.capacity++
    },
    async loadData(search) {
      this.loading = true
      this.error = null
      this.results = 0
      try {
        this.results = await eventApi.getEventCount(search)
      } catch (e) {
        this.error = e
      } finally {
        this.loading = false
      }
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
        if (searchInput !== '') {
          this.loadData(searchInput)
        } else {
          this.results = 0
        }
      },
      immediate: true
    }
  }
}
</script>
