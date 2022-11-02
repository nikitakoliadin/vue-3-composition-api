import { ref, watch } from 'vue'
import eventApi from '@/api/events'

export default function useSearch() {
  const searchInput = ref('')
  const loading = ref(false)
  const error = ref(null)
  const results = ref(0)

  async function loadData(search) {
    loading.value = true
    error.value = null
    results.value = 0
    try {
      results.value = eventApi.getEventCount(search.value)
    } catch (e) {
      error.value = e
    } finally {
      loading.value = false
    }
  }

  watch(
    searchInput,
    () => {
      if (searchInput.value !== '') {
        loadData(searchInput)
      } else {
        results.value = 0
      }
    },
    { immediate: true }
  )

  return { searchInput, loading, error, results }
}
