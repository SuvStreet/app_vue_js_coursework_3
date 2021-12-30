import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      taskList: [
        {
          idx: 0,
          title: 'Корм',
          date: '2022-12-17',
          description: 'Покупка корма',
          status: 'active',
        },
        {
          idx: 1,
          title: 'Корм1',
          date: '2022-12-18',
          description: 'Покупка корма1',
          status: 'cancelled',
        },
        {
          idx: 2,
          title: 'Корм2',
          date: '2022-12-19',
          description: 'Покупка корма2',
          status: 'pending',
        },
        {
          idx: 3,
          title: 'Корм3',
          date: '2022-12-30',
          description: 'Покупка корма3',
          status: 'done',
        },
      ],
    }
  },
  mutations: {
    newTask(state, task) {
      if (new Date(task.date) < new Date()) {
        task.status = 'cancelled'
      }
      state.taskList.push(task)
    },
    updateTask(state, task) {
      state.taskList[task.idx].status = task.status
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
