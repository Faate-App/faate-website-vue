<!-- components/GlassHeader.vue -->
<template>
  <section class="justify-center flex items-center">
  <nav :class="{'w-4/5 top-3': changeHead, 'w-full top-0': !changeHead}"
      class="glass-header fixed z-20 ">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div class="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo">
        <span class="self-center text-2xl font-semibold whitespace-nowrap text-Headline ">Faate</span>
      </div>
      <!--
      <WhatsNew message="Rejoignez notre waitlist" reference="https://tally.so#tally-open=w2AxlL&tally-layout=modal&tally-width=372&tally-hide-title=1&tally-auto-close=10000" />
      -->
      <div class="items-right justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a href="/" class="block py-2 pl-3 pr-4 text-headline bg-blue-700 rounded md:bg-transparent md:p-0 md:dark:text-blue-500 hover:underline" aria-current="page">Home</a>
          </li>
          <li>
            <a href="/about" class="block py-2 pl-3 pr-4 text-headline bg-blue-700 rounded md:bg-transparent md:p-0 md:dark:text-blue-500 hover:underline">About</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </section>
</template>

<script setup>

import { ref, onMounted } from 'vue';
const changeHead = ref(false);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

function handleScroll() {
  // Update `changeBackground` based on scroll position
  if(typeof window !== "undefined"){
    changeHead.value = window.scrollY > 0;  // For example, change background at 100px scroll
  }
}
</script>

<style scoped>
.glass-header {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(4px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  /* Optional: Add additional styling or Tailwind classes */
}
</style>
