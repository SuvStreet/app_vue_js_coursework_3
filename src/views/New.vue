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

    <button class="btn primary" :disabled="isDisabled">Создать</button>
  </form>
</template>

<script>
import { computed, reactive, toRefs } from '@vue/reactivity'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const dataInput = reactive({
      validTitle: '',
      validDate: '',
      validDescription: '',
    })
    const store = useStore()
    const router = useRouter()

    const isDisabled = computed(() => {
      return !Object.values(dataInput).every((value) => value.length > 0)
    })

    // const isDisabled = ref(false)

    function createTask() {
      store.commit('newTask', {
        idx: store.state.taskList.length,
        title: dataInput.validTitle,
        date: dataInput.validDate,
        description: dataInput.validDescription,
        status: 'primary',
        activeTask: true,
      })
      router.push('/')
    }

    return {
      isDisabled,
      ...toRefs(dataInput),
      createTask,
    }
  },
}
</script>
