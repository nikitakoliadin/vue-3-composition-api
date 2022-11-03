<template>
  <teleport to="#end-of-body" :disabled="!showText" v-if="showText">
    This should be at the end.
  </teleport>
  <teleport to="#end-of-body" :disabled="!showText2" v-if="showText2">
    This should be at the end too.
  </teleport>
  <div>
    This should be at the top.
  </div>
  <div id="app">
    <div id="flashMessage" v-if="GStore.flashMessage">
      {{ GStore.flashMessage }}
    </div>
    <div id="nav">
      <router-link :to="{ name: 'EventList' }">Events</router-link> |
      <router-link :to="{ name: 'About' }">About</router-link>
      <br />
      <router-link :to="{ name: 'CapacityRegular' }"
        >Capacity Regular</router-link
      >
      |
      <router-link :to="{ name: 'CapacityComposition' }"
        >Capacity Composition
      </router-link>
      |
      <router-link :to="{ name: 'CapacityReactive' }"
        >Capacity Reactive
      </router-link>
      |
      <router-link :to="{ name: 'CapacityCompositionModularized' }"
        >Capacity Composition Modularized
      </router-link>
      |
      <router-link :to="{ name: 'CapacityCompositionWithLoading' }"
        >Capacity Composition With Loading
      </router-link>
    </div>
    <router-view />
    <button @click="showText = !showText">
      Toggle showText
    </button>
    <button @click="showText2 = !showText2">
      Toggle showText2
    </button>
  </div>
</template>

<script>
export default {
  inject: ['GStore'],
  data() {
    return {
      showText: false,
      showText2: false
    }
  }
}
</script>

<style>
@keyframes yellowfade {
  from {
    background: yellow;
  }
  to {
    background: transparent;
  }
}

#flashMessage {
  animation-name: yellowfade;
  animation-duration: 3s;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

h4 {
  font-size: 20px;
}
</style>
