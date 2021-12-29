<template>
  <div class="card" v-if="task">
    <h2>{{ title }}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="status" /></p>
    <p><strong>Дэдлайн</strong>: {{ date }}</p>
    <p><strong>Описание</strong>: {{ description }}</p>
    <div>
      <button class="btn">Взять в работу</button>
      <button class="btn primary">Завершить</button>
      <button class="btn danger">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{ $route.params.taskId }}</strong> нет.
  </h3>
</template>

<script>
import { useStore } from 'vuex'
import AppStatus from '../components/AppStatus'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const store = useStore()
    const route = useRoute()

    const task = store.state.taskList.find(
      (task) => task.idx === Number(route.params.taskId)
    )

    const { title, status, date, description } = task ?? false

    return {
      title,
      status,
      date,
      description,
      task,
    }
  },
  components: { AppStatus },
}
</script>

<style scoped></style>
