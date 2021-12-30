<template>
  <h1 class="text-white center" v-if="visible">Задач пока нет</h1>
  <template v-else>
    <h3 class="text-white">
      Всего активных задач: {{ $store.getters.counterActiveTask }}
    </h3>
    <div
      class="card"
      v-for="{ title, date, status, idx } in taskList"
      :key="idx"
    >
      <h2 class="card-title">
        {{ title }}
        <AppStatus :type="status" />
      </h2>
      <p>
        <strong>
          <small>
            {{ new Date(date).toLocaleDateString() }}
          </small>
        </strong>
      </p>
      <button class="btn primary" @click="open(idx)">Посмотреть</button>
    </div>
  </template>
</template>

<script>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import AppStatus from '../components/AppStatus'

export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    
    const open = (taskId) => {
      router.push('/task/' + taskId)
    }

    return {
      visible: store.state.taskList.length === 0,
      taskList: store.state.taskList,
      open,
    }
  },
  components: { AppStatus },
}
</script>
