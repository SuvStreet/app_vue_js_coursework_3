<template>
  <span :class="['badge', className]">{{ text }}</span>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  props: {
    type: {
      type: String,
      validator(value) {
        return ['active', 'done', 'cancelled', 'pending'].includes(value)
      },
    },
  },
  setup(props) {
    const classNameMap = {
      active: 'primary',
      done: 'primary',
      cancelled: 'danger',
      pending: 'warning',
    }

    const textMap = {
      active: 'Активен',
      done: 'Завершён',
      cancelled: 'Отменён',
      pending: 'Выполняется',
    }

    const className = ref(classNameMap[props.type])
    const text = ref(textMap[props.type])

    watch(props, (values) => {
      className.value = classNameMap[values.type]
      text.value = textMap[values.type]
    })

    return {
      className,
      text,
    }
  },
}
</script>

<style></style>
