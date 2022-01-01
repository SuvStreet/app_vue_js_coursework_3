<template>
  <form class="card" @submit.prevent="createTask">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model.trim="validTitle" />
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="validDate" />
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model.trim="validDescription"></textarea>
    </div>

    <button class="btn primary">Создать</button>
  </form>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const store = useStore()
    const router = useRouter()

    const dataInput = reactive({
      validTitle: '',
      validDate: '',
      validDescription: '',
    })

    function createTask() {
      if (Object.values(dataInput).every((value) => value.length > 0)) {
        const newTask = {
          title: dataInput.validTitle,
          date: dataInput.validDate,
          description: dataInput.validDescription,
          status: 'active',
        }
        store.dispatch('newTask', newTask)
        router.push('/')
      } else {
        store.commit('toast', {
          show: true,
          title: 'Обратите внимание!',
          text: 'Все поля должны быть заполнены!',
          type: 'info',
        })
      }
    }

    return {
      ...toRefs(dataInput),
      createTask,
    }
  },
}
</script>
