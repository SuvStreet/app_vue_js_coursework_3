import server from '../server'

export default {
  // загрузить все задачи с базы данных
  async loadingAllTasks({ commit, getters }) {
    commit('loader', true)
    try {
      const tasks = await server.get('tasks')
      const formattedTasks = Object.keys(tasks).map((key) => {
        return {
          idx: key,
          ...tasks[key],
        }
      })
      commit('loadingAllTasks', formattedTasks)
    } catch (error) {
      commit('toast', {
        show: true,
        title: 'Ошибка!',
        text: `Задачь ещё нет, будте первыми кто её создаст!`,
        type: 'error',
      })
    }
    commit('loader', false)
  },
  // добавить новую задачу в базу данных
  async newTask({ commit }, task) {
    if (new Date(task.date).setHours(23, 59, 59, 999) < new Date()) {
      task.status = 'cancelled'
    }
    try {
      const idTask = await server.post('tasks', task)
      commit('newTask', { ...task, idx: idTask })
      commit('toast', {
        show: true,
        title: 'Успех!',
        text: `Задача ${idTask} успешно добавлена`,
        type: 'success',
      })
    } catch (error) {
      commit('toast', {
        show: true,
        title: 'Ошибка!',
        text: `Задача не была добавлена`,
        type: 'error',
      })
    }
  },
  // обновить статус задачи в базе данных
  async updateTask({ commit }, dataTask) {
    try {
      const task = await server.put('tasks', dataTask, dataTask.idx)
      commit('updateTask', task)

      commit('toast', {
        show: true,
        title: 'Успех!',
        text: `Статус изменён на "${dataTask.status}" успешно `,
        type: 'success',
      })
    } catch (error) {
      commit('toast', {
        show: true,
        title: 'Ошибка!',
        text: `Статус неизменён`,
        type: 'error',
      })
    }
  },
}
