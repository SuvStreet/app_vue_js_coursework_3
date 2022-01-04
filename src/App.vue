<template>
  <the-navbar @toggleMenu="toggleMenu"></the-navbar>
  <app-loader v-if="$store.getters.loader" />
  <div v-else :class="['container with-nav', toggleClass]">
    
    <router-view />
  </div>
  <app-toast />
</template>

<script>
import TheNavbar from './components/TheNavbar.vue'
import AppLoader from './components/AppLoader.vue'
import AppToast from './components/AppToast.vue'
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const toggleClass = ref('')

    onMounted(() => {
      store.dispatch('loadingAllTasks')
    })

    function toggleMenu(value) {
      toggleClass.value = value
    }

    return {
      toggleClass,
      toggleMenu,
    }
  },
  components: {
    TheNavbar,
    AppLoader,
    AppToast,
  },
}
</script>

<style></style>
