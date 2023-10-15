<template>

  <section class="bg-background h-screen">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
      <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-headline md:text-5xl lg:text-6xl dark:text-white">We believe in a brighter dating future</h1>
      <p class="mb-8 text-lg font-normal text-paragraph lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Chez Datee nous travaillons à vous offrir une expérience plus fluide que les applications de rencontre
        traditionnelles. Notre solution vous promet un match personnalisé par nos soins par tranche de 2 semaines.</p>
      <client-only placeholder="loading...">
        <iframe data-tally-src="https://tally.so/embed/w2AxlL?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy" width="100%" height="302" frameborder="0" marginheight="0" marginwidth="0"
                title="Website waitlist"></iframe>
      </client-only>

    </div>
  </section>

</template>
<script setup>
if (typeof document !== 'undefined') {
  var d=document, w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}


  // Manipulating the DOM here
}




</script>