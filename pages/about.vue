<template>
  <section class="bg-background h-auto" id="about-us">
    <div class="py-8 px-4 mx-auto lg:max-w-screen-xl text-center lg:py-16 lg:px-12">
      <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-headline md:text-5xl lg:text-6xl dark:text-white">About Us</h1>
      <p class="mb-8 text-lg font-normal text-paragraph lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Get to Know [Your Company Name]</p>
      <div class="text-left text-lg font-normal text-paragraph lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        <h2 class="mb-4 text-2xl font-bold">Our Story</h2>
        <p>Welcome to [Your Company Name] – your trusted partner in [Your Industry]. We take pride in providing top-quality [Your Products/Services] to our valued customers. Our journey began with a passion for [Your Mission or Purpose], and today, we stand as a leading name in the industry.</p>

        <h2 class="mt-8 mb-4 text-2xl font-bold">Our Commitment</h2>
        <p>At [Your Company Name], we are committed to [Your Core Values or Principles]. Our dedicated team works tirelessly to ensure that you receive the best possible [Your Products/Services] that meet and exceed your expectations. We believe in [Your Beliefs or Philosophy].</p>

        <h2 class="mt-8 mb-4 text-2xl font-bold">Why Choose Us</h2>
        <p>When you choose [Your Company Name], you are choosing excellence. Here are some reasons why our customers love us:</p>
        <ul class="list-disc list-inside">
          <li>[Highlight a key benefit or feature]</li>
          <li>[Highlight another key benefit or feature]</li>
          <li>[Highlight another key benefit or feature]</li>
        </ul>

        <h2 class="mt-8 mb-4 text-2xl font-bold">Our Team</h2>
        <p>Meet the talented individuals who drive [Your Company Name] forward. Our team comprises experts in [Your Industry] who are passionate about what they do. Together, we strive to innovate and deliver excellence.</p>

        <h2 class="mt-8 mb-4 text-2xl font-bold">Contact Us</h2>
        <p>If you have any questions or would like to learn more about [Your Company Name], please don't hesitate to reach out. We're here to assist you!</p>
      </div>
    </div>
  </section>
</template>

<script setup>
useHead({
  script: [
    { async: true,
      src: 'https://tally.so/widgets/embed.js',
    }
  ],
});
</script>
```