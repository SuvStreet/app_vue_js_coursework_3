<template>
  <h1 class="text-white center" v-if="allTask.length === 0">Задач пока нет</h1>
  <template v-else>
    <div class="cardSort">
      <h3 class="text-white">
        Всего активных задач: {{ $store.getters.counterActiveTask }}
      </h3>
      <the-sort-task @valueSort="sortList"></the-sort-task>
    </div>
    <template v-if="taskListBySort.length === 0">
      <h3 class="text-white center">
        Задачи со статусом "{{ sortType }}" не найдено
      </h3>
    </template>
    <div
      class="card"
      v-else
      v-for="{ title, date, status, idx } in taskListBySort"
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
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import AppStatus from '../components/AppStatus.vue'
import AppLoader from '../components/AppLoader.vue'
import TheSortTask from '../components/TheSortTask.vue'

export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    const sortType = ref('allTask')
    const allTask = ref(store.getters.allTask)
    const taskList = ref(allTask.value)

    function sortList(value) {
      sortType.value = value
    }

    watch(sortType, (value) => {
      if (value !== 'allTask') {
        taskList.value = store.getters.sortTask(value)
      } else {
        taskList.value = store.getters.allTask
      }
    })

    const open = (taskId) => {
      router.push('/task/' + taskId)
    }

    return {
      sortType,
      allTask,
      sortList,
      taskListBySort: taskList,
      open,
    }
  },
  components: { AppStatus, AppLoader, TheSortTask },
}
</script>

<style scoped>
.cardSort {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
