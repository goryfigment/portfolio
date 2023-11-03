<template>
  <header class="fixed z-50 w-full flex items-center justify-between p-5 text-xl text-primary select-none">
    
    <nuxt-link to="/" class="text-3xl pt-0.5 pr-5 pb-2 pl-1 -rotate-6 tracking-tightest dark:text-dim-100" @click="scrollToSection(0, true)">
      <b>><span class="animate-blink">_</span></b>
    </nuxt-link>

    <div class="relative w-[52px]">
      <label class="absolute w-full h-[26px] cursor-pointer -top-3 left-[-10px]">
        <input class="hidden peer" type="checkbox" name="Dark Mode" @change="toggleDarkMode" :checked="!darkMode">
        <span class="slider absolute w-full h-full rounded-full bg-[#28292c] duration-300
        before:content-[''] before:absolute before:top-[3px] before:left-[5px] before:duration-300 before:rounded-full before:bg-[#28292c] before:w-[20px] before:h-[20px] before:shadow-[inset_10px_-4px_0px_0px_rgba(216,219,224,1)]
        peer-checked:bg-[#e1e1e1] peer-checked:before:bg-[#ffb364] peer-checked:before:shadow-none peer-checked:before:translate-x-6"></span>
      </label>
    </div>
  </header>
</template>

<script setup>
const store = useStore()
const emits = defineEmits(['scrollToSection'])
let darkMode = computed(() => store.darkMode)
const toggleDarkMode = store.toggleDarkMode

function scrollToSection(id, force = false) {
  emits('scrollToSection', id, force)
}
</script>