<template>
  <div v-if="error">Uh oh .. {{ error }}</div>
  <Suspense v-else>
    <template #default>
      <Event />
    </template>
    <template #fallback>
      ...Loading
    </template>
  </Suspense>
</template>

<script>
import Event from '@/components/Event'
import { ref, onErrorCaptured } from 'vue'
export default {
  components: {
    Event
  },
  setup() {
    const error = ref(null)
    onErrorCaptured(e => {
      error.value = e
      return true
    })
    return { error }
  }
}
</script>
