<template>
  <button
    class="focus:outline-none relative flex transition-colors duration-300 items-center justify-center ease-linear"
    @click="toggle"
  >
    <span
      v-if="this.$colorMode.preference === 'light'"
      class="relative overflow-hidden inline-block w-5 h-5 items-center justify-center"
      ><img src="/moon-black.svg" alt="lightmode" class="hide w-5 h-5 absolute"
    /></span>

    <span
      v-if="this.$colorMode.preference === 'dark'"
      class="relative overflow-hidden inline-block w-5 h-5 items-center justify-center"
      ><img src="/icons8-sun.svg" alt="" class="show w-5 h-5 absolute"
    /></span>
  </button>
</template>

<script>
export default {
  methods: {
    toggle() {
      this.$colorMode.preference =
        this.$colorMode.value === 'light' ? 'dark' : 'light'
    },
  },
}
</script>
