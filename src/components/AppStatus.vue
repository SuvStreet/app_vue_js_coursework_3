<template>
  <span class="badge" :class="[type]">{{ type }}</span>
</template>

<script>

export default {
  props: ['type']
}
</script>

<style></style>
