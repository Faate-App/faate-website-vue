<template>

  <section class="bg-background h-screen">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
      <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-headline md:text-5xl lg:text-6xl dark:text-white">We believe in a brighter dating future</h1>
      <p class="mb-8 text-lg font-normal text-paragraph lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Chez Datee nous travaillons à vous offrir une expérience plus fluide que les applications de rencontre
        traditionnelles. Notre solution vous promet un match personnalisé par nos soins par tranche de 2 semaines.</p>
      <div>
        <client-only placeholder="loading...">
          <iframe data-tally-src="https://tally.so/embed/w2AxlL?alignCenter=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy" width="100%" height="302"
                title="Website waitlist"></iframe>
        </client-only>
      </div>
      <NuxtLink to="/" class="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-accent hover:bg-blue-800 focus:ring-4 focus focus:ring-blue-900">
        Retour à l'acceuil
        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </NuxtLink>

    </div>
  </section>

</template>
<script setup>
if (typeof document !== 'undefined') {
  var d=document, w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}


  // Manipulating the DOM here
}




</script>