import { ref } from 'vue'

export default function useMapping() {
  const map = ref(4)
  const embedId = ref(5)
  return { map, embedId }
}
