<template>
  <article class="flex flex-col max-w-3xl px-2 mx-auto space-y-6 mt-40">
    <div>
      <p class="text-6xl font-bold">{{ article.title }}</p>
    </div>
    <div>
      <p class="text-xl font-bold">{{ article.description }}</p>
    </div>
    <div><img :src="article.star" :alt="article.alt" class="w-32" /></div>
    <div>
      <div class="flex">
        <img src="/auteur.svg" alt="auteur" class="w-4 h-4 mr-1 mt-1" /><span
          class="font-bold mr-3"
          >{{ article.auteur }}</span
        >
        <img src="/calendar.svg" alt="date" class="w-4 mr-1" />
        <span class="font-bold">{{ formatDate(article.post_date) }}</span>
      </div>
      <div class="flex mt-1 align-middle">
        <img src="/tag_icon.svg" alt="icon_tags" class="w-5 mr-1" />
        <span v-for="(tag, id) in article.tags" :key="id">
          <nuxt-link :to="`/films/tag/${tags[tag].slug}`">
            <span class="tag pl-auto mr-3">{{ tags[tag].name }}</span>
          </nuxt-link>
        </span>
      </div>
      <div v-if="article.vod" class="flex w-36">
        <a :href="article.link_vod" class="flex items-center"
          ><span class="font-bold">Voir sur </span
          ><img class="w-20 h-12" :src="article.vod" alt=""
        /></a>
      </div>
    </div>

    <img
      :src="article.image"
      :alt="article.alt"
      class="w-full h-full rounded-sm object-fit"
    />
    <div class="intro">
      <p>
        <span class="font-bold color:#db161c"> Genre: </span>
        {{ article.genre }}
      </p>
      <p>
        <span class="font-bold color:#db161c"> Réalisateur: </span>
        {{ article.realisateur }}
      </p>
      <p>
        <span class="font-bold color:#db161c"> Distribution: </span>
        {{ article.distribution }}
      </p>
      <p>
        <span class="font-bold color:#db161c"> Année de sortie: </span>
        {{ article.annee }}
      </p>
    </div>
    <nuxt-content :document="article" class="pb-3" />
    <div class="comments">
      <Disqus />
    </div>
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
  color: brown;
}
.nuxt-content h4 {
  font-weight: bold;
  color: brown;
}
.nuxt-content p {
  margin-bottom: 20px;
  margin-top: 20px;
}

.nuxt-content div {
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
}

.nuxt-content iframe {
  position: absolute;
  top: 0;
  left: 0;
  margin-bottom: 20px;
  width: 100%;
  height: 100%;
}

.nuxt-content {
  border-color: var(--color);
}

.tag {
  @apply font-bold;
}

.nuxt-content blockquote {
  opacity: 0.6;
  font-style: italic;
  border-left: 4px solid;
  padding-left: 8px;
}

.intro span {
  color: #db161c;
}
</style>
