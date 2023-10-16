<template>
  <div class="relative">
    <div id="keyboard" :class="showChange ? 'rotate-[8deg]' : 'rotate-[4deg]'" class="flex absolute top-[140px] left-[-92px] w-[178.2px] h-[28.88px] bg-white shadow-[-16px_19px_19px_19px_rgba(95,95,95,1)] transition-all duration-500 ease-in-out max-sm:left-[-40px] max-sm:top-[170px] max-xs:left-[-10px] max-xs:top-[190px]">
      <div class="absolute left-[-11px] border-solid border-l-[12px] border-l-transparent border-b-[29px] border-b-white"></div>
      <div class="absolute w-[181.5px] mt-px z-[1]">
        <div class="bg-[#c8ced5] h-[2.64px] my-[3px] mx-auto w-[172.26px] ml-[3px]"></div>
        <div class="bg-[#c8ced5] h-[2.64px] my-[3px] mx-auto w-[176.55px] ml-0"></div>
        <div class="bg-[#c8ced5] h-[2.64px] my-[3px] mx-auto w-[181.5px] -ml-0.5"></div>
        <div class="bg-[#c8ced5] h-[2.64px] my-[3px] mx-auto w-[186.45px] -ml-1"></div>
      </div>
      <div class="absolute right-[-11px] border-solid border-r-[12px] border-r-transparent border-b-[29px] border-b-white"></div>
      <div class="bg-[#d3d7df] w-[202px] h-[3.3px] absolute bottom-[-3px] -left-3"></div>
    </div>

    <div>
      <h1 class="text-[32px] my-4 font-bold">
        <span>I'm Solomon</span>
      </h1>
      <p class="text-center">a <span>full</span> stack <span :class="showChange ? disco: ''">developer</span>.</p>
    </div>

    <div id="mouse" :class="showChange ? 'rotate-[-42deg]' : 'rotate-[-32deg]'" class="bg-white absolute right-[-65px] top-[-26px] w-[37px] h-[50px] shadow-[4px_18px_30px_15px_rgba(95,95,95,1)] rounded-t-[50%_30%] rounded-b-[50%_44%] transition-all duration-500 ease-in-out max-sm:right-[-30px] max-sm:top-[-50px] max-xs:right-[-10px] max-xs:top-[-80px]">
      <div class="bg-[#9da9be] absolute w-0.5 h-[13px] left-[calc(50%_-_1px)] top-[6px] rounded-[20px]"></div>
    </div>

  </div>
</template>

<script setup>
//Composables
const { disco } = useTailwindConfig()
//Data
const showChange = ref(false)

//Fire functions when page is loaded
onBeforeMount(async () => {
  //Do random things if user if looking at page for a while
  setTimeout(() => {
    showChange.value = true
  }, 5000)
})
</script>