<template>
  <h2 class="text-[32px] my-4 font-sans font-bold">
    <nuxt-link class="flex items-center gap-1" to="https://m2mnow.com" target="_blank" rel="noopener noreferrer">
      <div class="p-0.5 bg-black rounded-sm">
        <img width="25" src="/m2m/m2m-logo.png" alt="M2M Now Logo" data-not-lazy />
      </div>
      <span>M2M <span class="text-[#d08100] dark:text-[#ffcc79]">Now</span></span>
    </nuxt-link>
  </h2>

  <div class="relative font-raj">
    <nuxt-link to="https://m2mnow.com" target="_blank" rel="noopener noreferrer">
      <img class="rounded-md" width="685" alt="M2M Now" src="/m2m/m2m.png" data-not-lazy />
    </nuxt-link>
  </div>

  <p class="text-center mt-6 max-w-xl">A premium software tailored for members, offering streamlined management of memberships and event planning to foster community engagement.</p>

  <div class="flex flex-col items-center my-3">
    <strong>Frontend Built with:</strong> 
    <ul class="flex flex-wrap gap-2 text-center justify-center">
      <li><Icon name="devicon:vuejs" /> VueJs,</li>
      <li><Icon name="logos:nuxt-icon" /> Nuxt,</li>
      <li><Icon name="logos:pinia" /> Pinia,</li>
      <li><Icon name="devicon:typescript" /> Typescript,</li>
      <li><Icon name="devicon:css3" /> SASS</li>
    </ul>
  </div>
</template>