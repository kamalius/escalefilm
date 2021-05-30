<template>
  <div>
    <div class="relative">
      <div
        class="
          absolute
          inset-y-0
          left-0
          pl-3
          flex
          items-center
          pointer-events-none
        "
      >
        <IconSearch class="icon h-5 w-5" />
      </div>
      <input
        v-model="searchQuery"
        type="search"
        autocomplete="off"
        placeholder="cherchez un film"
        class="md:w-full rounded pl-10 border-none focus:outline-none"
      />

      <ul
        v-if="articles.length"
        class="mt-1 absolute w-full rounded border-none overflow-hidden"
      >
        <li v-for="article of articles" :key="article.slug">
          <nuxt-link
            :to="{ name: 'films-slug', params: { slug: article.slug } }"
          >
            {{ article.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      articles: [],
    }
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = []
        return
      }
      this.articles = await this.$content('articles')
        .limit(6)
        .search(searchQuery)
        .fetch()
    },
  },
}
</script>

<style scoped>
.icon {
  color: var(--color);
}

input {
  color: var(--color);
  background-color: var(--color-search);
}

input::placeholder {
  color: var(--color-placeholder);
}

ul {
  background-color: var(--color-search);
}
</style>
