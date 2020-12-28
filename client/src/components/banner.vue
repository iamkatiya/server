<template>
  <section class="banner container">
    <div class="banner__text about-content">
      <h2 class="about-content__head">
        Заголовок
      </h2>
      <div class="about-content__text">
        Задача организации, в особенности же начало повседневной работы по формированию позиции способствует подготовки и реализации соответствующий условий активизации. Задача организации, в особенности же рамки и место обучения кадров представляет собой интересный эксперимент проверки дальнейших направлений развития. Равным образом рамки и место обучения кадров влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Не следует, однако забывать, что сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании форм развития. Задача организации, в особенности же реализация намеченных плановых заданий способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям. Задача организации, в особенности же постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям.
      </div>
      <button
        class="about-content__btn"
        @click="showModal"
      >
        Нажми меня!
      </button>
    </div>
    <div class="banner__carousel">
      <carousel
        :items="1"
        :dots="false"
        :autoplay="true"
      >
        <div>
          <img
            alt="fir tree"
            src="https://cdn.pixabay.com/photo/2018/07/18/18/53/new-years-eve-3547030_1280.jpg"
          >
        </div>
        <div>
          <img
            alt="snow man"
            src="https://cdn.pixabay.com/photo/2018/12/26/22/12/christmas-background-3896551_1280.jpg"
          >
        </div>
        <div>
          <img
            alt="skates"
            src="https://cdn.pixabay.com/photo/2017/12/25/19/27/pendant-3038987_1280.jpg"
          >
        </div>
      </carousel>
    </div>
    <modal
      v-if="isVisibleModal"
      v-changeScroll
      @close="closeModal"
    />
  </section>
</template>

<script>
import carousel from 'vue-owl-carousel2'
import modal from './modal.vue'

export default {
  components: {
    carousel,
    modal
  },
  data () {
    return {
      isVisibleModal: false
    }
  },
  methods: {
    showModal () {
      this.isVisibleModal = true
    },
    closeModal () {
      this.isVisibleModal = false
    }
  }
}

</script>

<style lang="less">
    .banner {
      padding-top: 3em;
        &__text {
            width: 45%;
            padding-right: 2em;
            box-sizing: border-box;
        }
        &__carousel {;
            width: 55%;
            .owl-carousel.owl-loaded {
                display: flex;
                align-items: center;
                height: 500px;
            }
            .owl-nav {
                position: absolute;
                width: 100%;
                display: flex;
                justify-content: space-between;
            }
            .owl-item img {
                height: 500px;
                object-fit: cover;
            }
            .owl-theme .owl-nav [class*='owl-'], .banner__carousel .owl-theme .owl-nav [class*='owl-']:hover {
                background-color: transparent;
                color: transparent;
                background-image: url("../assets/arrow.svg");
                background-size: contain;
                background-repeat: no-repeat;
                filter: invert(1);
            }
            .owl-nav .owl-prev {
                transform: rotate(180deg);
            }
        }
    }
    @media (max-width: 1500px) {
        .banner {
            &.container {
                flex-wrap: wrap;
            }
            &__carousel {
                width: 100%;
                order: 1;
            }
            &__text {
                width: 100%;
                order: 2;
                padding-right: 0;
                margin-top: 20px;
            }
        }
    }
    @media (max-width: 991px) {
        .banner {
            .container {
                padding-left: 0;
                padding-right: 0;
            }
            &__text {
                padding-left: 15px;
                padding-right: 15px;
            }
        }
    }
    @media (max-width: 768px) {
        .banner__carousel {
            .owl-carousel.owl-loaded {
                height: 300px;
            }
            .owl-item img {
                height: 300px;
            }
        }
    }
</style>
