import { createStore } from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default createStore({
  state() {
    return {
      taskList: [],
      loader: false,
      toast: {
        show: false,
        title: '',
        text: '',
        type: '',
      }
    }
  },
  mutations,
  actions,
  getters,
})

// активен - active
// отменён - cancelled
// выполняется - pending
// завершён -done
