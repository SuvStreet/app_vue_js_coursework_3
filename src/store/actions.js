import server from '../server'

export default {
  // загрузить все задачи с базы данных
  async loadingAllTasks({ commit }) {
    commit('loader', true)
    const tasks = await server.get('tasks')
    commit('loadingAllTasks', tasks)
    commit('loader', false)
  },
  // добавить новую задачу в базу данных
  async newTask({ commit }, task) {
    if (new Date(task.date).setHours(23, 59, 59, 999) < new Date()) {
      task.status = 'cancelled'
    }
    commit('newTask', { ...task, idx: await server.post('tasks', task)})
  },
  // обновить статус задачи в базе данных
  async updateTask({ commit }, dataTask) {
    const task = await server.put('tasks', dataTask, dataTask.idx)
    commit('updateTask', task)
  },
}