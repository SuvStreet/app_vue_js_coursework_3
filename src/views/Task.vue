<template>
  <div class="card" v-if="task">
    <h2>{{ task.title }}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="task.status" /></p>
    <p>
      <strong>Дэдлайн</strong>: {{ new Date(task.date).toLocaleDateString() }}
    </p>
    <p><strong>Описание</strong>: {{ task.description }}</p>
    <div>
      <button class="btn" @click="updateStatus('pending')">
        Взять в работу
      </button>
      <button class="btn primary" @click="updateStatus('done')">
        Завершить
      </button>
      <button class="btn danger" @click="updateStatus('cancelled')">
        Отменить
      </button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{ taskId }}</strong> нет.
  </h3>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import AppStatus from '../components/AppStatus.vue'

export default {
  props: ['taskId'],
  setup(props) {
    const store = useStore()
    const taskId = props.taskId

    const task = computed(() => store.getters.changeTask(taskId))

    const updateStatus = (status) => {
      if (status !== task.value.status) {
        const updatedTask = { ...task.value, status }
        store.dispatch('updateTask', updatedTask)
      }
      else {
        store.commit('toast', {
          show: true,
          title: 'Обратите внимание!',
          text: 'Задача уже в этом статусе!',
          type: 'info',
        })
      }
    }

    return {
      taskId,
      task,
      updateStatus,
    }
  },
  components: { AppStatus },
}
</script>

<style scoped></style>
