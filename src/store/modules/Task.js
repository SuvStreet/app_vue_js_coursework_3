export default {
  state() {
    return {
      task: {},
    }
  },
  getters: {
    showTask(state) {
      return state
    },
  },

  //   newTask(state, payload) {
  //     const d = new Date(payload.date)
  //     const day = d.getDate()
  //     const month = d.getMonth() + 1
  //     const year = d.getFullYear()
  //     payload.date = `${day}.${month}.${year}`

  //     state.task = payload

  //     console.log(`state.task`, state.task)
  //     console.log(`state`, state)
  //   },
  // },
  // getters: {
  //   task(state) {
  //     return state.valueTask
  //   },
  // }, // трансформация данных, если это нужно, помогает не напрямую изменять state
  actions: {}, // асинхрпонный вызов мутаций
  modules: {},
}



