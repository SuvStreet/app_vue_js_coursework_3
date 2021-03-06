export default {
  // получить все задачи с базы данных
  loadingAllTasks(state, tasks) {
    state.taskList = tasks
  },
  // добавить новую задачу в store
  newTask(state, task) {
    state.taskList.push(task)
  },
  // обновить статус задачи в store
  updateTask(state, { idx, status }) {
    state.taskList.find((task) => task.idx === idx).status = status
  },
  // изменить статус loader
  loader(state, statusLoader) {
    state.loader = statusLoader
  },
  // изменить статус toast
  toast(state, { show, title, text, type }) {
    state.toast = {
      show,
      title,
      text,
      type,
    }
  }
}