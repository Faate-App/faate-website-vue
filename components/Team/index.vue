<script setup lang="ts">

</script>

<template>
  <section class="bg-background">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Team</h2>
        <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
      </div>
      <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
        <TeamMember avatarURL="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png">
          <template #full-name>Leonard Roussard</template>
          <template #description>Il sert a rien enfaite</template>
          <template #position>CEO</template>
        </TeamMember>

        <TeamMember avatarURL="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png">
          <template #full-name>Alex Szpakiewicz</template>
          <template #description>L'improvisation est ma passion</template>
          <template #position>CTO</template>
        </TeamMember>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>