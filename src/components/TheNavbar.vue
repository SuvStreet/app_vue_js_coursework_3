<template>
  <div class="header__burger" @click="toggleMenu">
    <burger-menu :activeClass="activeClass" />
  </div>
  <nav :class="['navbar', activeClass]">
    <h3>
      <router-link class="logo" to="/">Freelance</router-link>
    </h3>

    <ul :class="['navbar-menu', activeClass]">
      <li>
        <router-link to="/" @click="toggleMenu">Все задачи</router-link>
      </li>
      <li>
        <router-link to="/new_task" @click="toggleMenu">Создать</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { ref } from '@vue/runtime-core'
import BurgerMenu from './BurgerMenu.vue'

export default {
  emits: ['toggleMenu'],
  setup(_, { emit }) {
    const activeClass = ref('')

    function toggleMenu() {
      activeClass.value = activeClass.value ? '' : 'active'
      emit('toggleMenu', activeClass.value)
    }

    return {
      toggleMenu,
      activeClass,
    }
  },
  components: { BurgerMenu },
}
</script>

<style scoped></style>
