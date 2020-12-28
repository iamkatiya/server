<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
  @font-face {
    font-family: "Oleo";
    src: url("./fonts/Oleoscript.ttf") format("truetype");
  }
  @font-face {
    font-family: "montserratligth";
    src: url("./fonts/montserratligth.ttf") format("truetype");
  }
  #app {
    font-family: "montserratligth", sans-serif;
  }
  body {
    margin: 0;
  }
  p {
    margin-top: 0;
  }
  .container {
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
  }
  .logotype {
    font-family: 'Oleo', sans-serif;
    color: white;
    display: flex;
    white-space: nowrap;
    align-items: center;
    text-decoration: none;
    &:hover {
      color: white;
      text-decoration: none;
    }
  }
  .logotype img {
    width: 60px;
    margin-right: 15px;
  }
  .modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease
  }
  .modal-content__close {
    position: absolute;
    cursor: pointer;
    width: 35px;
    right: 10px;
    top: 10px
  }
  .about-content {
    &__head {
      font-size: 2.7em;
      margin-bottom: 0.25em;
      margin-top: 0;
    }
    &__btn {
      display: block;
      padding: 15px 35px;
      margin: 45px auto 0;
      border: 1px solid white;
      outline: none;
      background: linear-gradient(to left, #5b7a97, #6a6aa6);
      border-radius: 0.5em;
      color: white;
      font-family: 'montserratligth', sans-serif;
      transition: 0.3s;
      cursor: pointer;
      &:hover {
        filter: hue-rotate(45deg);
      }
    }
    &__text {
      line-height: 1.43em;
    }
  }
  @media (max-width: 1500px) {
    .container {
      max-width: 900px;
    }
  }
  @media (max-width: 950px) {
    .container {
      max-width: 100%;
      padding-left: 15px;
      padding-right: 15px;
    }
    .header__logo img {
      width: 45px;
      font-size: 20px;
    }
    .header__logo h1 {
      font-size: 20px;
    }
  }
  @media (max-width: 768px) {
    .logotype {
      justify-content: center;
      img {
        width: 50px;
      }
    }
  }

</style>
