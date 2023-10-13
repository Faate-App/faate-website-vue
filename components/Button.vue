<script setup lang="ts">
  const { background, text } = defineProps(['background', 'text'])
</script>

<template>
  <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-accent hover:bg-black focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
    <slot></slot>
  </a>
</template>

<style scoped>

</style>