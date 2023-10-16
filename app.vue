<template>
  <div class="bg-dim-950 text-primary" :class="{'dark': darkMode}">
    <div>
      <router-view />
    </div>
  </div>
</template>

<script setup>
const darkMode = ref(true)
</script>