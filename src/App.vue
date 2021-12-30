<template>
  <the-navbar></the-navbar>
  <app-loader v-if="isLoading" />
  <div v-else class="container with-nav">
    <router-view />
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue'
import AppLoader from './components/AppLoader.vue'
import { onMounted, ref, watch } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const isLoading = ref(false)

    onMounted(() => {
      store.dispatch('loadingAllTasks')
    })

    watch(() => store.getters.loader, (newValue) => {
      isLoading.value = newValue
    })

    return {
      isLoading
    }
  },
  components: {
    TheNavbar,
    AppLoader,
  },
}
</script>

<style></style>
