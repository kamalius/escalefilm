<template>
  <div>
    <Banner />
    <div class="container mt-20 px-5 mx-auto">
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
    const articles = await $content('articles', params.slug)
      .only([
        'title',
        'description',
        'image',
        'slug',
        'auteur',
        'star',
        'createdAt',
      ])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles,
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

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
