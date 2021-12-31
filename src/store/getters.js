export default {
  // получить все задачи
  allTask({ taskList }) {
    return taskList
  },
  // получить задачи по статусу
  sortTask(_, getters) {
    return (sortType) =>
      getters.allTask.filter((task) => task.status === sortType)
  },
  // получить все задачи со статусом active
  activeTask(_, getters) {
    return getters.allTask.filter((active) => active.status === 'active')
  },
  // подсчитать сколько задать со статусом active
  counterActiveTask(_, getters) {
    return getters.activeTask.length
  },
  // поиск задачи по idx
  changeTask(_, getters) {
    return (idx) => getters.allTask.find((task) => task.idx === idx)
  },
  // получить статус loader
  loader({ loader }) {
    return loader
  },
  // получить статус toast
  toast({ toast }) {
    return toast
  },
}
