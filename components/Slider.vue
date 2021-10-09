<template>
  <div class="wz-slider">
    <figure>
      <img
        src="https://res.cloudinary.com/escalefilm/image/upload/v1633793541/1280x680_gettyimages-507246031_vegkqc.jpg"
      />
      <img
        src="https://res.cloudinary.com/escalefilm/image/upload/v1633793541/Taxi-Driver_ahkdlv.jpg"
      />
      <img
        src="https://res.cloudinary.com/escalefilm/image/upload/v1633793541/andrei-tarkovski-1_nfq8hb.jpg"
      />
      <img
        src="https://res.cloudinary.com/escalefilm/image/upload/v1633793541/2470482_wgidkr.jpg"
      />
      <img
        src="https://res.cloudinary.com/escalefilm/image/upload/v1633793541/kurosawa-akira_gmjwtd.jpg"
      />
    </figure>
  </div>
</template>

<style>
.wz-slider {
  width: 100%;
  max-height: 650px;
  margin: 80px auto;
  overflow: hidden;
}

.wz-slider figure img {
  padding: 5px;
  width: 20%;
  height: auto;
  float: left;
}
.wz-slider figure {
  position: relative;
  width: 500%;
  margin: 0;
  left: 0;
  animation: webzone 30s infinite linear;
}

@keyframes webzone {
  0% {
    left: 0%;
  }
  15% {
    left: 0%;
  }
  20% {
    left: -100%;
  }
  35% {
    left: -100%;
  }
  40% {
    left: -200%;
  }
  60% {
    left: -200%;
  }
  65% {
    left: -300%;
  }
  80% {
    left: -300%;
  }
  85% {
    left: -400%;
  }
  100% {
    left: -400%;
  }
}
</style>
