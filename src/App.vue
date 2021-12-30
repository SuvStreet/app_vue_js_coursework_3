<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <router-view />
  </div>
</template>

<script>
import { onMounted } from 'vue'
import TheNavbar from './components/TheNavbar.vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    onMounted(() => {
      store.dispatch('loadingAllTasks')
    })
  },
  components: {
    TheNavbar,
  },
}
</script>

<style></style>
