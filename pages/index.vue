<template>
  <div :class="{'dark': darkMode}">
    <div class="bg-white text-primary dark:bg-dim-950 dark:text-darkPrimary transition-main">
      <Header @scrollToSection="scrollToSection" />

      <Head>
        <Title>Dev - Solomon Padilla</Title>
        <Meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <Meta name="description" content="Phoenix-Based Full Stack Web Developer." />
        <Meta name="keywords" content="Phoenix, Scottsdale, Peoria, Glendale, Full Stack Developer, Front-End Web Developer, Back-End Developer, Solomon Padilla, Django, Python, JavaScript, HTML5, HTML, CSS3, CSS, MySQL, Vue, VueJS, TailWind, Nuxt, NuxtJS" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <main>
        <section>
          <SectionHome />
        </section>
        <section>
          <SectionMccStats />
        </section>
        <section>
          <SectionOmnislash />
        </section>
        <section>
          <SectionContact />
        </section>

        <div class="fixed right-0 bottom-20 rotate-[-90deg] select-none transition-main text-dim-700 hover:text-dim-950 dark:text-dim-400 dark:hover:text-dim-200 max-sm:right-[-20px]">
          <span v-if="activeSection < offsets.length - 1" class="p-1 cursor-pointer" @click="scrollToSection(activeSection + 1, true)">
            <Icon name="grommet-icons:form-previous" /> Scroll Down
          </span>
          <span v-else class="p-1 cursor-pointer" @click="scrollToSection(0, true)">
            Scroll To Top <Icon name="grommet-icons:form-next" />
          </span>
        </div>
      </main>
    </div>
  </div>
</template>

<style>
body {
  overflow: hidden;
}

section {
  @apply h-screen flex flex-col items-center justify-center max-w-[calc(100vw-50px)] mx-auto;
}
</style>

<script setup>
const store = useStore()
let darkMode = computed(() => store.darkMode)
let inMove = false
const moveDelay = 400
let activeSection = ref(0)
let offsets = ref([])
let loadComponents = ref(false)
let touchStartY = 0

//Adds seo en language to the html element
useHead({
  htmlAttrs: {
    lang: 'en'
  }
})

onMounted(() => {
  calculateSectionOffsets()
  window.addEventListener('DOMMouseScroll', handleMouseWheelDOM);  // Mozilla Firefox
  window.addEventListener('mousewheel', handleMouseWheel, { passive: false }); // Other browsers
  window.addEventListener('touchstart', touchStart, { passive: false }); // mobile devices
  window.addEventListener('touchmove', touchMove, { passive: false }); // mobile devices
})

onBeforeUnmount(() => {
  window.removeEventListener('DOMMouseScroll', handleMouseWheelDOM); // Mozilla Firefox
  window.removeEventListener('mousewheel', handleMouseWheel, { passive: false });  // Other browsers
  window.removeEventListener('touchstart', touchStart); // mobile devices
  window.removeEventListener('touchmove', touchMove); // mobile devices
})


 /**
 * Toggles dark/light theme
 */
function toggleDarkMode() {
  darkMode.value = !darkMode.value
}

 /**
 * Calculates the absolute offsets of each section on the page and pushes it into the offsets array
 */
function calculateSectionOffsets() {
  let sections = document.getElementsByTagName('section')
  let length = sections.length
  
  for(let i = 0; i < length; i++) {
    let sectionOffset = sections[i].offsetTop
    offsets.value.push(sectionOffset)
  }
}

/**
 * Handle the 'mousewheel' event for other browsers
 */
function handleMouseWheel(e) {
  if (e.wheelDelta < 30 && !inMove)
    moveUp()
  else if (e.wheelDelta > 30 && !inMove)
    moveDown()

  e.preventDefault()
  return false
}

/**
 * Handle the 'DOMMouseScroll' event for Firefox
*/
function handleMouseWheelDOM(e) {
  if (e.detail > 0 && !inMove) {
    moveUp()
  } else if (e.detail < 0 && !inMove) {
    moveDown()
  }
  
  return false
}

function moveDown() {
  inMove = true
  activeSection.value--
    
  if(activeSection.value < 0) 
    activeSection.value = 0
    
  scrollToSection(activeSection.value, true)
}

function moveUp() {
  inMove = true
  activeSection.value++
    
  if(activeSection.value > offsets.value.length - 1) 
    activeSection.value = offsets.value.length - 1
    
  scrollToSection(activeSection.value, true)
}

/**
 * Scrolls to the passed section id if the section exists and the delay is over
*/
function scrollToSection(id, force = false) {
  if(inMove && !force) 
    return false
  
  activeSection.value = id
  inMove = true
  // if(!hasBeenSeen.value.includes(id)) {
  //   hasBeenSeen.value.push(id)
  // }

  loadComponents.value = true
  
  // get section and scroll into view if it exists
  let section = document.getElementsByTagName('section')[id]
  if(section) {
    document.getElementsByTagName('section')[id].scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest', 'scroll-behavior': '(0.88,0,0.265,1)' })
  }
  
  setTimeout(() => {
    inMove = false
  }, moveDelay)
}

/**
 * Handles the 'touchstart' event on mobile devices
*/
function touchStart(e) {
  e.preventDefault()

  const clickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window
  })
  
  e.target.dispatchEvent(clickEvent)
  touchStartY = e.touches[0].clientY
}

/**
 * Handles the 'touchmove' event on mobile devices
*/
function touchMove(e) {
  if(inMove) 
    return false
  e.preventDefault()
  
  const currentY = e.touches[0].clientY
  
  if(touchStartY < currentY)
    moveDown()
  else
    moveUp()
  
  touchStartY = 0
  return false
}
</script>
