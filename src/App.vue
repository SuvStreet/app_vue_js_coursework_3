<template>
  <the-navbar></the-navbar>
  <app-loader v-if="$store.getters.loader" />
  <div v-else class="container with-nav">
    <router-view />
  </div>
  <app-toast />
</template>

<script>
import TheNavbar from './components/TheNavbar.vue'
import AppLoader from './components/AppLoader.vue'
import AppToast from './components/AppToast.vue'
import { onMounted } from 'vue'
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
    AppLoader,
    AppToast,
  },
}
</script>

<style></style>
