<template>
  <div class="form-control">
    <select id="type" name="select" v-model="valueSelect">
      <option value="allTask">Все задачи</option>
      <option value="active">Активные</option>
      <option value="pending">Выполняемые</option>
      <option value="cancelled">Отмененные</option>
      <option value="done">Завершённые</option>
    </select>
  </div>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  emits: ['valueSort'],
  setup(_, context) {
    const valueSelect = ref('allTask')
    
    watch(valueSelect, (value) => {
      context.emit('valueSort', value)
    })

    return {
      valueSelect,
    }
  },
}
</script>

<style></style>
