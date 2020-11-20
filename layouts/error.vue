<template>
  <div class="mt-48 mb-auto text-center">
    <p class="error">404</p>
    <h1 v-if="error.statusCode === 404" class="mb-8">Page introuvable</h1>
    <h1 v-else class="mb-8">Une erreur est apparue</h1>
    <nuxt-link to="/"> Retour en page d'accueil </nuxt-link>
  </div>
</template>
<script>
export default {
  props: {
    error: {
      type: String,
      default: 'error',
    },
  },
}
</script>
<style scoped>
.error {
  font-size: 120px;
}
</style>
