<template>
  <div class="flex justify-between">
    <nuxt-link
      v-if="prev"
      :to="{ name: 'films-slug', params: { slug: prev.slug } }"
      class="font-bold"
    >
      <button class="font-bold px-1 rounded focus:outline-none">
        &larr; {{ prev.title }}
      </button>
    </nuxt-link>
    <span v-else>&nbsp;</span>
    <nuxt-link
      v-if="next"
      :to="{ name: 'films-slug', params: { slug: next.slug } }"
      class="font-bold"
      ><button class="font-bold px-1 rounded focus:outline-none">
        {{ next.title }} &rarr;
      </button>
    </nuxt-link>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
}
</script>

<style scoped>
button {
  color: var(--bg);
  background-color: var(--color);
}

button:hover {
  background-color: #9b0612;
}
</style>
