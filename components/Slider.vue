<template>
  <div class="slider">
    <div class="slides flex">
      <div class="slide">
        <img
          src="https://res.cloudinary.com/escalefilm/image/upload/v1627916138/Dune_njrael.jpg"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://res.cloudinary.com/escalefilm/image/upload/v1622311408/katanga_s4rxpg.jpg"
          alt=""
        />
      </div>
      <div class="slide">
        <img
          src="https://res.cloudinary.com/escalefilm/image/upload/v1615734697/13Assassins_trenxq.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.slider {
  width: 500px;
  overflow: hidden;
  margin: 150px auto;
  margin-top: 102px;
}
.slides {
  width: calc(500px * 3);
  animation: glisse 10s infinite;
}
.slide {
  width: 100vw;
}

@keyframes glisse {
  0% {
    transform: translateX(0);
  }
  33% {
    transform: translateX(-500px);
  }
  66% {
    transform: translateX(-1000px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
