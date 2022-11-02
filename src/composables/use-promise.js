import { ref } from 'vue'

export default function usePromise(fn) {
  const loading = ref(false)
  const error = ref(null)
  const results = ref(0)

  const createPromise = async (...args) => {
    loading.value = true
    error.value = null
    results.value = 0
    try {
      results.value = await fn(...args)
    } catch (e) {
      error.value = e
    } finally {
      loading.value = false
    }
  }
  return { loading, error, results, createPromise }
}
