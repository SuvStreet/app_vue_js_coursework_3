<template>
  <h1 class="text-white center" v-if="visible">Задач пока нет</h1>
  <template v-else>
    <h3 class="text-white">Всего активных задач: {{ $store.getters.counterActiveTask }}</h3>
    <div class="card" v-for="{ title, date, status, idx } in taskList" :key="idx">
      <h2 class="card-title">
        {{ title }}
        <AppStatus :type="status" />
      </h2>
      <p>
        <strong>
          <small>
            {{ date }}
          </small>
        </strong>
      </p>
      <router-link :to="'/task/' + idx">
        <button class="btn primary">Посмотреть</button>
      </router-link>
    </div>
  </template>
</template>

<script>
import { computed, watch } from '@vue/runtime-core'
import { useStore } from 'vuex'
import AppStatus from '../components/AppStatus'

export default {
  setup() {
    const store = useStore()

    return {
      visible: store.state.taskList.length === 0,
      taskList: store.state.taskList,
    }
  },
  components: { AppStatus },
}
</script>
