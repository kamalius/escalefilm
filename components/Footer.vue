<template>
  <footer class="px-10 py-8body-font">
    <div
      class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col"
    >
      <div>
        <nuxt-link
          to="/"
          class="flex title-font font-medium items-center mb-4 md:mb-0"
        >
          <img src="/clapperboard.svg" alt="icon_escalefilm" class="w-6" />
          <span class="ml-3 text-xl">escale film</span>
        </nuxt-link>
      </div>
      <p
        class="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"
      >
        © 2020 escale film — fait avec
        <span class="text-xl text-red-700">♥</span>,
        <a href="https://fr.nuxtjs.org/">Nuxt</a> et
        <a href="https://tailwindcss.com/">Tailwind CSS</a>
      </p>
      <span
        class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"
      >
        <a href="https://www.facebook.com/kamal.escalefilm">
          <svg
            fill="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path
              d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
            ></path>
          </svg>
        </a>
        <a href="https://github.com/kamalius" class="ml-3">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 fill-current"
            data-v-7ac1059d=""
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.0364 2C5.92958 2 1 6.81593 1 12.7819C1 17.526 4.16376 21.5512 8.57831 22.9888C9.16692 23.0607 9.31407 22.7732 9.31407 22.4857V20.6168C6.22389 21.2637 5.5617 19.1792 5.5617 19.1792C5.04667 17.9573 4.31091 17.5979 4.31091 17.5979C3.28085 16.9509 4.38449 16.9509 4.38449 16.9509C5.48813 17.0228 6.07673 18.0291 6.07673 18.0291C7.03322 19.6824 8.65189 19.1792 9.31407 18.8917C9.38765 18.1729 9.68195 17.7416 10.0498 17.4541C7.62183 17.1666 5.04667 16.2322 5.04667 12.135C5.04667 10.9849 5.48813 9.97863 6.15031 9.25983C6.00316 8.97232 5.63528 7.89412 6.22389 6.38465C6.22389 6.38465 7.18037 6.09713 9.2405 7.46285C10.1234 7.24721 11.0799 7.10345 12.0364 7.10345C12.9929 7.10345 13.9494 7.24721 14.8323 7.46285C16.966 6.09713 17.8489 6.38465 17.8489 6.38465C18.4375 7.89412 18.0696 8.97232 17.9225 9.25983C18.6582 9.97863 19.0261 10.9849 19.0261 12.135C19.0261 16.304 16.4509 17.1666 14.0229 17.4541C14.3908 17.8135 14.7587 18.4604 14.7587 19.4667V22.4138C14.7587 22.7013 14.9794 23.0607 15.4944 22.9169C19.909 21.4794 22.9992 17.4541 22.9992 12.7101C23.0728 6.81593 18.1432 2 12.0364 2Z"
              fill="currentColor"
              data-v-7ac1059d=""
            ></path>
          </svg>
        </a>
      </span>
    </div>
  </footer>
</template>
