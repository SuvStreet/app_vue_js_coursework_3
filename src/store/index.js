import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state() {
    return {
      taskList: [],
    }
  },
  mutations: {
    loadingAllTasks(state, tasks) {
      state.taskList = tasks
    },
    newTask(state, task) {
      state.taskList.push(task)
    },
    updateTask(state, task) {
      state.taskList.find((t) => t.idx === task.idx).status = task.status
    },
  },
  actions: {
    async newTask({ commit }, task) {
      if (new Date(task.date).setHours(23, 59, 59, 999) < new Date()) {
        task.status = 'cancelled'
      }
      const { data } = await axios.post(
        'https://freelance-coursework3-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
        task
      )

      commit('newTask', { ...task, idx: data.name })
    },
    async loadingAllTasks({ commit }) {
      const { data } = await axios.get(
        'https://freelance-coursework3-default-rtdb.europe-west1.firebasedatabase.app/tasks.json'
      )

      if (data) {
        const tasks = Object.keys(data).map((key) => {
          return {
            idx: key,
            ...data[key],
          }
        })
        commit('loadingAllTasks', tasks)
      }
    },
    async updateTask({ commit, getters }, task) {
      const { data } = await axios.put(
        `https://freelance-coursework3-default-rtdb.europe-west1.firebasedatabase.app/tasks/${task.idx}.json`,
        task
      )
      commit('updateTask', data)
    },
  },
  getters: {
    taskList({ taskList }) {
      return taskList
    },
    activeTask({ taskList }) {
      return taskList.filter((active) => active.status === 'active')
    },
    counterActiveTask(_, getters) {
      return getters.activeTask.length
    },
    changeTask(_, getters) {
      return (idx) => getters.taskList.find((task) => task.idx === idx)
    },
  },
})

// активен - active
// отменён - cancelled
// выполняется - pending
// завершён -done
