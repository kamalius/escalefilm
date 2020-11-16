<template>
  <div>
    <Nuxt />
    <div class="headiv"></div>
    <div
      class="headimage flex h-64 items-center justify-center mx-auto shadow bg-cover"
    >
      <div
        class="flex flex-col justify-center w-56 text-white italic font-normal"
      >
        <q>
          L'image n'est pas une quelconque idée exprimée par le réalisateur,
          mais tout un monde miroité dans une goutte d'eau, une simple goutte.
        </q>
        <cite>&mdash; Andreï Tarkovski</cite>
      </div>
    </div>
  </div>
</template>

<style scoped>
.headiv {
  height: 88px;
}

.headimage {
  background-image: url('https://images.unsplash.com/photo-1510932443911-6b3773dafb65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
  background-position: center;
}
</style>
