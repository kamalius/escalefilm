<template>
  <article class="flex flex-col max-w-5xl px-2 mx-auto space-y-6 mt-40">
    <div>
      <p class="text-6xl font-bold">{{ article.title }}</p>
    </div>
    <div>
      <p class="text-xl font-bold">{{ article.description }}</p>
    </div>
    <div><img :src="article.star" :alt="article.alt" class="w-32" /></div>
    <div>
      <p>
        Posté par: <span class="font-bold">{{ article.auteur }}</span> le:
        <span class="font-bold">{{ formatDate(article.createdAt) }}</span>
      </p>
      <div class="mt-5">
        Tags:
        <span v-for="(tag, id) in article.tags" :key="id">
          <nuxt-link :to="`/films/tag/${tags[tag].slug}`">
            <span class="tag pl-auto"> &#35;{{ tags[tag].name }} </span>
          </nuxt-link>
        </span>
      </div>
    </div>

    <img
      :src="article.image"
      :alt="article.alt"
      class="w-full h-full rounded-sm object-fit"
    />
    <nuxt-content :document="article" class="border-b-2" />
    <prev-next :prev="prev" :next="next" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    const tagsList = await $content('tags')
      .only(['name', 'slug'])
      .where({ name: { $containsAny: article.tags } })
      .fetch()
    const tags = Object.assign({}, ...tagsList.map((s) => ({ [s.name]: s })))
    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return { article, tags, prev, next }
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
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
  margin-top: 20px;
}

.nuxt-content div {
  display: flex;
  align-items: center;
  justify-content: center;
}

.nuxt-content iframe {
  margin-bottom: 20px;
  width: 500px;
  height: 300px;
}

.nuxt-content {
  border-color: var(--color);
}

.tag {
  @apply font-bold;
}
</style>
