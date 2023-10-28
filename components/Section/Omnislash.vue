<template>
  <div class="relative font-raj">
    <nuxt-link to="https://omnislash.com/app" target="_blank" rel="noopener noreferrer">
      <NuxtImg class="max-h-96" height="384" width="779" src="/omnislash/omnislash.png" alt="Omnislash" placeholder />
    </nuxt-link>
  </div>

  <h2 class="text-[32px] my-4 font-sans font-bold">
    <nuxt-link class="flex items-center gap-1" to="https://omnislash.com/app" target="_blank" rel="noopener noreferrer">
      <img height="19" width="20" src="/omnislash/logo.png" alt="Omnislash Logo" />
      <span>Omnislash</span>
    </nuxt-link>
  </h2>

  <p class="text-center">A platform where gamers can explore and share their media, achievements, and stats using the Omnislash App.</p>

  <div class="flex flex-col items-center my-2">
    <strong>Frontend Built with:</strong> 
    <ul class="flex flex-wrap gap-2 text-center justify-center">
      <li><Icon name="devicon:vuejs" /> VueJs,</li>
      <li><Icon name="devicon:typescript" /> Typescript,</li>
      <li><Icon name="devicon:css3" /> SASS</li>
    </ul>
  </div>

  <div class="flex mt-4 gap-10">
    <nuxt-link to="https://omnislash.com/app" target="_blank" rel="noopener noreferrer">
      <UIButton>View Live</UIButton>
    </nuxt-link>
  </div>
</template>