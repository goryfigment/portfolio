<template>
  <h2 class="text-[32px] my-4 font-sans font-bold">
    <nuxt-link class="flex items-center gap-1" to="https://omnislash.com/info" target="_blank" rel="noopener noreferrer">
      <div class="p-0.5 bg-black rounded-sm">
        <img height="19" width="20" src="/omnislash/logo.png" alt="Omnislash Logo" data-not-lazy />
      </div>
      <span>Omnislash</span>
    </nuxt-link>
  </h2>

  <div class="relative font-raj">
    <nuxt-link to="https://omnislash.com/info" target="_blank" rel="noopener noreferrer">
      <img class="rounded-md" width="682" alt="Omnislash" src="/omnislash/omnislash.png" data-not-lazy />
    </nuxt-link>
  </div>

  <p class="text-center mt-6 max-w-xl">A platform where gamers can explore and share their media, achievements, and stats using the Omnislash App.</p>

  <div class="flex flex-col items-center my-3">
    <strong>Frontend Built with:</strong> 
    <ul class="flex flex-wrap gap-2 text-center justify-center">
      <li><Icon name="devicon:vuejs" /> VueJs,</li>
      <li><Icon name="vscode-icons:file-type-vueconfig" /> Vuex,</li>
      <li><Icon name="devicon:typescript" /> Typescript,</li>
      <li><Icon name="devicon:css3" /> SASS</li>
    </ul>
  </div>
</template>