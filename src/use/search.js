import { ref, watch } from 'vue'
import eventApi from '@/api/events'

export default function useSearch() {
  const searchInput = ref('')
  const results = ref(0)

  watch(
    searchInput,
    () => {
      results.value = eventApi.getEventCount(searchInput.value)
    },
    { immediate: true }
  )

  return { searchInput, results }
}
