<template>
  <main class="mx-7 lg:mx-6 mt-40 flex-grow">
    <div class="max-w-5xl mx-auto">
      <h1 class="font-bold text-3xl mt-0 mb-7 text-center pt-8">Tags:</h1>
      <div class="flex justify-center flex-wrap">
        <nuxt-link
          v-for="tag of tags"
          :key="tag.slug"
          :to="`/films/tag/${tag.slug}`"
          class="px-4 py-4"
        >
          <button
            class="transition duration-300 ease-in-out transform hover:-translate-y-1 font-bold py-1 px-2 rounded-full focus:outline-none"
          >
            <span class="diese">#</span> {{ tag.name }}
          </button>
        </nuxt-link>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const tags = await $content('tags', params.slug)
      .only(['name', 'description', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      tags,
    }
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

.diese {
  font-family: 'Gloria Hallelujah', cursive;
}
</style>
