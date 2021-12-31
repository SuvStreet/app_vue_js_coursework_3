export default {
  // получить все задачи
  taskList({ taskList }) {
    return taskList
  },
  // получить все задачи со статусом active
  activeTask({ taskList }) {
    return taskList.filter((active) => active.status === 'active')
  },
  // подсчитать сколько задать со статусом active
  counterActiveTask(_, getters) {
    return getters.activeTask.length
  },
  // поиск задачи по idx
  changeTask(_, getters) {
    return (idx) => getters.taskList.find((task) => task.idx === idx)
  },
  // получить статус loader
  loader({ loader }) {
    return loader
  },
  // получить статус toast
  toast({ toast }) {
    return toast
  }
}
