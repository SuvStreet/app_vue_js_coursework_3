<template>
  <form class="card">
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

export default {
  setup() {
    const dataInput = reactive({
      validTitle: '',
      validDate: '',
      validDescription: '',
    })

    const isDisabled = computed(() => {
      return !Object.values(dataInput).every((value) => value.length > 0)
    })

    return {
      isDisabled,
      ...toRefs(dataInput),
    }
  },
}
</script>
