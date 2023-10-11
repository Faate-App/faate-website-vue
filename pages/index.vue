<template>
  <div class="flex items-center justify-center h-screen bg-gray-50">
    <div>
      <h1 class="mb-6 text-4xl">Flowbite + Nuxt.js + Tailwind CSS Starter</h1>
      <div class="w-auto mb-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      </div>
      <p class="mb-8">Learn more about <a href="https://flowbite.com/docs/getting-started/nuxt-js/" class="text-blue-600 hover:underline">Flowbite + Nuxt.js here</a>.</p>
      <Modal :modalInfo="{
        title: 'Modal title',
        body: 'Modal body text goes here.',
        buttonTitle: 'Open modal',
        acceptLabel: 'Tamer',
        declineLabel: 'Decline'
      }" />

      <Card />
    </div>
  </div>
</template>

<script setup>
</script>