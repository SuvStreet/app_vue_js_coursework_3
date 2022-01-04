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

    <CardTask
      v-else
      v-for="dataTask in taskListBySort"
      :key="dataTask.idx"
      :dataTask="dataTask"
    />
  </template>
</template>

<script>
import { ref, watch } from 'vue'
import { useStore } from 'vuex'
import AppLoader from '../components/AppLoader.vue'
import TheSortTask from '../components/TheSortTask.vue'
import CardTask from '../components/CardTask.vue'

export default {
  setup() {
    const store = useStore()
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

    return {
      sortType,
      allTask,
      sortList,
      taskListBySort: taskList,
    }
  },
  components: { AppLoader, TheSortTask, CardTask },
}
</script>

<style scoped></style>
