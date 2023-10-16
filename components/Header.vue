<template>
  <header class="fixed z-50 w-full flex items-center justify-between p-5 text-xl text-primary select-none">
    
    <nuxt-link to="/" class="text-3xl text-dim-100 pt-0.5 pr-5 pb-2 pl-1 -rotate-6 tracking-tightest shadow-lg transition duration-500 ease-out" @click="scrollToSection(0, true)">
      <b>><span class="animate-blink">_</span></b>
    </nuxt-link>
    
    <ul class="flex">
      <!-- <li @click="scrollToSection(1, true)">Work</li> -->
      <li @click="scrollToSection(3, true)">Contact</li>
    </ul>
  </header>
</template>

<style scoped>
li {
  @apply cursor-pointer transition duration-500 ease-out hover:text-dim-400 px-2.5;
}
</style>

<script setup>
const emits = defineEmits(['scrollToSection'])

function scrollToSection(id, force = false) {
  emits('scrollToSection', id, force)
}
</script>