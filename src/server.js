import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;

export default {
  async post(url, task) {
    const { data } = await axios.post(`${url}.json`, task)
    return data.name
  },

  async get(url) {
    const { data } = await axios.get(`${url}.json`)
    return data
  },

  async put(url, task, idx) {
    const { data } = await axios.put(`${url}/${idx}.json`, task)
    return data
  },
}
