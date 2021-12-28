import { createStore } from 'vuex'
import Task from './modules/Task'

export default createStore({
  state() {
    return {
      taskList: [
        {
          idx: 0,
          title: 'Корм',
          date: '17-12-2021',
          description: 'Покупка корма',
          status: 'primary',
          activeTask: true,
        },
        {
          idx: 1,
          title: 'Корм1',
          date: '18-12-2021',
          description: 'Покупка корма1',
          status: 'primary',
          activeTask: true,
        },
        {
          idx: 2,
          title: 'Корм2',
          date: '19-12-2021',
          description: 'Покупка корма2',
          status: 'primary',
          activeTask: true,
        },
      ],
    }
  },
  mutations: {
    newTask(state, payload) {
      const d = new Date(payload.date)
      const day = d.getDate()
      const month = d.getMonth() + 1
      const year = d.getFullYear()
      payload.date = `${day}.${month}.${year}`

      state.taskList.push(payload)
    },
    // statusTask(state, payload) {
    //   console.log(`state`, state)
    //   console.log(`payload`, payload)
    // },
    changeTask(state, { idx }) {
      state.task = state.taskList.find((task) => task.idx === idx) ?? false
    },
  },
  modules: {
    task: Task,
  },
  // getters: {
  //   taskAddList(state) {
  //     return state.taskList = state
  //   }
  // }
})

// TODO: вывести список активных задач на экран
