import { createStore } from 'vuex'
// import Task from './modules/Task'

const dateNow = (date) => {
  const now = new Date()
  const d = new Date(date)
  d.setHours(23, 59, 59, 999)
  const day = d.getDate()
  const month = d.getMonth() + 1
  const year = d.getFullYear()

  console.log(`now`, now)
  console.log(`d`, d)

  const value = now < d

  if (value) {
    return {
      date: `${day}.${month}.${year}`,
      status: 'active',
    }
  } else {
    return {
      date: `${day}.${month}.${year}`,
      status: 'cancelled',
    }
  }

  // console.log(`value`, value)
  // console.log(`date`, date)
}

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
    newTask(state, payload) {
      const timeNow = new Date()
      const date = new Date(payload.date)
      date.setHours(23, 59, 59, 999)

      const value = timeNow < date

      const day = date.getDate()
      const month = date.getMonth() + 1
      const year = date.getFullYear()

      ;(payload.date = `${day}.${month}.${year}`),
        value ? (payload.status = 'active') : (payload.status = 'cancelled')

      state.taskList.push(payload)

      console.log(`state in newTask`, state)
    },
  },
  getters: {
    counterActiveTask({ taskList }) {
      return taskList.filter((active) => active.status === 'active').length
    },
  },
  // modules: {
  //   task: Task,
  // },
  // getters: {
  //   taskAddList(state) {
  //     return state.taskList = state
  //   }
  // }
})

// TODO: вывести список активных задач на экран

// активен - active
// отменён - cancelled
// выполняется - pending
// завершён -done
