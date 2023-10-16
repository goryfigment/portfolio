<template>
  <div class="relative font-raj overflow-hidden max-w-full">
    <div class="absolute z-10 w-full text-xs font-bold bg-[#070707] p-0.5">
      <nuxt-link to="https://www.mccstats.site/" target="_blank" rel="noopener noreferrer">MCC<span class="text-[#00ff66]">STATS</span></nuxt-link>
    </div>
    <div class="absolute top-20 left-6 z-10">
      <nuxt-link to="https://www.mccstats.site/" target="_blank" rel="noopener noreferrer"><strong class="text-2xl font-bold">MCCSTATS<span class="text-[#00ff66]">.COM</span></strong></nuxt-link>
      <p class="text-[9px] font-roboto mb-1.5">Stats & Leaderboards for Halo MCC</p>

      <div class="flex items-center bg-white text-[10px]">
        <span class="text-[#a1a1a1] text-[9px] hover:text-[#6c6c6c] p-1.5 cursor-pointer transition-all duration-150 ease-out">
          <Icon name="fa-solid:search" />
        </span>
        <input v-model="mccStatsText" class="h-[26px] w-36 font-raj bg-transparent outline-none font-bold text-[#343434] placeholder-[#a1a1a1]" placeholder="Search" @keyup.enter="navigateToExternal('https://www.mccstats.site/profile/' + mccStatsText)">

        <button class="bg-[#008400] text-white w-8 h-4 font-bold text-[8px] mr-1.5 transition-all duration-150 ease-out hover:brightness-110" @click="navigateToExternal('https://www.mccstats.site/profile/' + mccStatsText)">Enter</button>
      </div>

      <div class="flex items-center">
        <nuxt-link to="https://www.mccstats.site/leaderboards/most-50s" target="_blank" rel="noopener noreferrer" class="text-[#ffd700] p-1 transition-all duration-150 ease-out hover:brightness-125" aria-label="Mccstats Leaderboards">
          <Icon name="fa-solid:trophy" />
        </nuxt-link>

        <nuxt-link to="https://www.mccstats.site/donate" target="_blank" rel="noopener noreferrer" class="text-[#29df27] p-1 transition-all duration-150 ease-out hover:brightness-125" aria-label="Mccstats Donate Page">
          <Icon name="fa-solid:dollar-sign" />
        </nuxt-link>

        <nuxt-link to="https://discord.com/" target="_blank" rel="noopener noreferrer" class="text-[#7289da] p-1 transition-all duration-150 ease-out hover:brightness-125" aria-label="Mccstats Discord Link">
          <Icon name="fa-brands:discord" />
        </nuxt-link>

        <nuxt-link to="https://twitter.com/MccStats" target="_blank" rel="noopener noreferrer" class="text-[#1da1f2] p-1 transition-all duration-150 ease-out hover:brightness-125" aria-label="Mccstats Twitter Page">
          <Icon name="fa-brands:twitter" />
        </nuxt-link>
      </div>
    </div>
    <video class="h-96 max-w-2xl" crossorigin="anonymous" preload="auto" loop autoplay muted src="@/assets/projects/mccstats/compressed.mp4"></video>
    <!-- <img class="h-96 max-w-2xl" src="@/assets/projects/mccstats/vg-gif.gif" alt="Mccstats Video" /> -->
  </div>

  <h2 class="text-[32px] my-4 font-sans font-bold">
    <nuxt-link to="https://www.mccstats.site/" target="_blank" rel="noopener noreferrer">MCCSTATS<span class="text-[#00ff66]">.COM</span></nuxt-link>
  </h2>

  <p class="text-center">A website providing leaderboards and player stats for Halo: Master Chief Collection.</p>

  <div class="flex flex-col items-center my-2">
    <strong>Built with:</strong> 
    <ul class="flex flex-wrap gap-2 text-center justify-center">
      <li><Icon name="devicon:html5" /> Html5,</li>
      <li><Icon name="devicon:css3" /> CSS3,</li>
      <li><Icon name="logos:javascript" /> Javascript,</li>
      <li><Icon name="devicon:python" /> Python,</li>
      <li><Icon name="vscode-icons:file-type-django" /> Django,</li>
      <li><Icon name="logos:mysql" /> MySql</li>
    </ul>
  </div>

  <div class="flex mt-4 gap-10">
    <nuxt-link to="https://www.mccstats.site/" target="_blank" rel="noopener noreferrer">
      <UIButton>View Live</UIButton>
    </nuxt-link>
    <nuxt-link to="https://github.com/goryfigment/halo" target="_blank" rel="noopener noreferrer">
      <UIButton>View Code</UIButton>
    </nuxt-link>
  </div>
</template>

<script setup>
const mccStatsText = ref('')

//Methods
function navigateToExternal(url) {
  window.open(url, '_blank')
}
</script>