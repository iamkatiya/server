<template>
  <section class="about-banner">
    <div class="container">
      <h1 class="about-banner__head">
        О нашей компании
      </h1>
    </div>
  </section>
</template>

<style lang="less" scoped>
.about-banner {
    height: 40em;
    padding-top: 10em;
    background-image: url("https://cdn.pixabay.com/photo/2018/12/26/22/12/christmas-background-3896551_1280.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    &__head {
        font-size: 5em;
        color: white;
        font-weight: 900;
    }
}
@media (max-width: 991px) {
  .about-banner {
    height: 28em;
    &__head {
      font-size: 2em;
    }
  }
}
</style>
