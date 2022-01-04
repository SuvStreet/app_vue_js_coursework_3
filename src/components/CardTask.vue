<template>
  <div class="card">
    <h2 class="card-title">
      {{ title }}
      <AppStatus :type="status" />
    </h2>
    <p>
      <strong>
        <small>
          {{ new Date(date).toLocaleDateString() }}
        </small>
      </strong>
    </p>
    <button class="btn primary" @click="open(idx)">Посмотреть</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import AppStatus from './AppStatus.vue'

export default {
  props: ['dataTask'],
  setup(props) {
    const router = useRouter()
    const { date, idx, title, status } = props.dataTask

    const open = (taskId) => {
      router.push('/task/' + taskId)
    }

    return {
      date,
      idx,
      title,
      status,
      open,
    }
  },
  components: { AppStatus },
}
</script>

<style></style>
