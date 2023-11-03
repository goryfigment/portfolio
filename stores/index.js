import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    darkMode: true,
  }),
  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode
    },
  },
  persist: true,
})