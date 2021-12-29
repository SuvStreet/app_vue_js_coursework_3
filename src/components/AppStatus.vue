<template>
  <span class="badge" :class="[color]">{{ status }}</span>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  props: {
    type: {
      type: String,
      default: 'active',
      validator(value) {
        return ['active', 'done', 'cancelled', 'pending'].includes(value)
      },
    },
  },
  setup(props) {
    const color = ref('')
    const status = ref('')

    switch (props.type) {
      case 'active':
        color.value = 'primary'
        status.value = 'Активен'
        break
      case 'done':
        color.value = 'primary'
        status.value = 'Завершён'
        break
      case 'pending':
        color.value = 'warning'
        status.value = 'Выполняется'
        break
      default:
        color.value = 'danger'
        status.value = 'Отменён'
        break
    }

    return {
      color,
      status,
    }
  },
}
</script>

<style></style>
