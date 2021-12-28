<template>
  <div class="flex flex-col h-screen">
    <header
      class="bg-opacity-100 px-6 py-5 z-50 fixed w-full top-0 transition-all ease-in-out duration-500 nice-shadow"
    >
      <div class="mx-auto flex items-center justify-between">
        <div class="mr-3 items-center">
          <nuxt-link
            to="/"
            class="flex title-font font-medium items-center mr-3 md:mb-0"
          >
            <img src="/clapperboard.svg" alt="icon_escalefilm" class="w-12" />
            <span
              class="hidden sm:block titre font-medium italic ml-3 mr-3 text-4xl"
              >escale film</span
            >
          </nuxt-link>
        </div>
        <div class="hidden lg:block">
          <div class="flex flex-wrap items-center">
            <div class="mr-5"><DarkMode /></div>
            <div class="items-end">
              <nav
                class="md:ml-auto flex flex-wrap items-center text-base justify-end"
              >
                <nuxt-link to="/tags" class="mr-5 font-bold">Tags</nuxt-link>
                <nuxt-link to="/kamal" class="font-bold mr-5"
                  >A propos</nuxt-link
                >
                <div class="flex mr-5"><Sociaux /></div>

                <div><AppSearchInput /></div>
              </nav>
            </div>
          </div>
        </div>
        <div class="block lg:hidden items-center">
          <div class="flex flex-wrap items-center">
            <div class="mr-5"><DarkMode /></div>
            <button
              class="focus:outline-none"
              aria-label="open menu"
              @click="toggle"
            >
              <ul v-if="!isOpen" class="hamburger">
                <li class="rounded-full" />
                <li class="rounded-full" />
                <li class="rounded-full" />
              </ul>
              <span
                v-if="isOpen"
                aria-label="close menu"
                class="font-bold text-2xl"
              >
                X
              </span>
            </button>
          </div>
        </div>
      </div>
      <div v-show="isOpen" class="block lg:hidden w-full h-full">
        <div class="w-auto inline-block h-full">
          <nav>
            <ul class="block lg:flex">
              <li>
                <nuxt-link to="/tags" class="font-bold" aria-label="close menu"
                  >Tags</nuxt-link
                >
              </li>
              <li class="my-1">
                <nuxt-link to="/kamal" class="font-bold">A propos</nuxt-link>
              </li>
              <li class="flex mr-5 mb-2"><Sociaux /></li>
              <li>
                <AppSearchInput />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <Nuxt />
    <Footer />
    <script src="https://unpkg.com/vanilla-back-to-top@7.2.1/dist/vanilla-back-to-top.min.js"></script>
    <script>
      addBackToTop({
        diameter: 48,
        backgroundColor: '#db161c',
        textColor: '#fff',
        scrollDuration: 400,
      })
    </script>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style scoped>
header {
  background-color: var(--bg);
}

.hamburger li {
  width: 28px;
  height: 4px;
  margin: 5px 0;
  background-color: var(--color);
}

.titre {
  font-family: 'Special Elite', cursive;
}
</style>
