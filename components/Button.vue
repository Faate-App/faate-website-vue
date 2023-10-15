<script setup lang="ts">
  const { background, text, reference } = defineProps(['background', 'text', 'reference'])
</script>

<template>
  <NuxtLink :to="{path: '/', hash: reference}" class="inline-flex justify-center items-center py-2 px-5 text-base font-medium text-center text-white rounded-lg bg-accent hover:bg-tertiary focus:ring-4 focus:ring-primary-300">
    <slot></slot>
  </NuxtLink>
</template>

<style scoped>

</style>