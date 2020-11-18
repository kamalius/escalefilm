<template>
  <div class="mt-48 mb-auto">
    <div class="mx-auto text-center">
      <h3 class="mb-4 font-bold text-2xl">{{ tag.name }}:</h3>
    </div>
    <div class="container px-5 py-12 mx-auto">
      <div class="flex flex-wrap -mx-3 xl:-mx-6">
        <div
          v-for="article of articles"
          :key="article.slug"
          class="w-full sm:w-1/2 xl:w-1/3 px-3 xl:px-6 py-6"
        >
          <nuxt-link
            :to="{ name: 'films-slug', params: { slug: article.slug } }"
          >
            <div
              class="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white"
            >
              <img :src="article.image" class="block h-auto w-full" />
              <div class="flex-1 p-6 flex flex-col justify-between">
                <h2 class="title-font text-lg font-bold mb-1 text-gray-900">
                  {{ article.title }}
                </h2>
                <p class="leading-relaxed text-gray-900">
                  {{ article.description }}
                </p>
                <div>
                  <img
                    :src="article.star"
                    :alt="article.alt"
                    class="w-20 mt-3"
                  />
                </div>

                <div class="mt-6">
                  <p class="text-gray-600">
                    posté le {{ formatDate(article.createdAt) }} par:
                    {{ article.auteur }}
                  </p>
                </div>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const tags = await $content('tags')
      .where({ slug: { $contains: params.tag } })
      .limit(1)
      .fetch()
    const tag = tags.length > 0 ? tags[0] : {}
    const articles = await $content('articles', params.slug)
      .where({ tags: { $contains: tag.name } })
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      articles,
      tag,
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('fr', options)
    },
  },
}
</script>
