import axios from 'axios'

const _apiBase = process.env.VUE_APP_BASE_URL

export default {
  async post(url, task) {
    const { data } = await axios.post(`${_apiBase}${url}.json`, task)
    return data.name
  },

  async get(url) {
    const { data } = await axios.get(`${_apiBase}${url}.json`)

    if (data) {
      const formattedTasks = Object.keys(data).map((key) => {
        return {
          idx: key,
          ...data[key],
        }
      })
      return formattedTasks
    }
  },

  async put(url, task, idx) {
    const { data } = await axios.put(`${_apiBase}${url}/${idx}.json`, task)
    return data
  },
}
