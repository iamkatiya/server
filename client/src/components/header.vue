<template>
  <header class="header">
    <div class="container">
      <router-link
        :to="{ name: 'index'}"
        class="header__logo logotype"
      >
        <img
          alt="wonder site"
          src="@/assets/logo.svg"
        >
        <h1>Wonder site</h1>
      </router-link>
      <div class="header__nav">
        <router-link :to="{ name: 'index'}">
          Главная
        </router-link>
        <router-link :to="{ name: 'about'}">
          О компании
        </router-link>
        <router-link :to="{ name: 'services'}">
          Услуги
        </router-link>
        <router-link :to="{ name: 'holidays'}">
          Праздники
        </router-link>
        <router-link :to="{ name: 'reviews'}">
          Отзывы
        </router-link>
      </div>
      <div
        class="header__burger"
        @click="burgerMenu =! burgerMenu"
      >
        <img
          alt="hamburger"
          src="@/assets/burger.svg"
        >
      </div>
      <div
        class="header__button"
        @click="isVisibleFeedback = true"
      >
        <img src="@/assets/phone.svg">
      </div>
      <button
        class="header__signIn"
        @click="isSignModal = true"
      >
        Войти
      </button>
    </div>
    <transition name="modal-fade">
      <div
        v-if="burgerMenu"
        class="header-nav__mobile"
      >
        <div class="container">
          <router-link :to="{ name: 'index'}">
            Главная
          </router-link>
          <router-link :to="{ name: 'about'}">
            О компании
          </router-link>
          <router-link :to="{ name: 'services'}">
            Услуги
          </router-link>
          <router-link :to="{ name: 'holidays'}">
            Праздники
          </router-link>
          <router-link :to="{ name: 'reviews'}">
            Отзывы
          </router-link>
          <router-link
            :to="{ name: 'appeals'}"
            class="feedback-form__appeals"
          >
            Посмотреть все обращения!
          </router-link>
        </div>
      </div>
    </transition>
    <modal-feedback
      v-if="isVisibleFeedback"
      @closeModal="isVisibleFeedback = false"
    />
    <modal-sign
      v-if="isSignModal"
      @closeModal="isSignModal = false"
    />
  </header>
</template>

<script>
import modalFeedback from './modal-feedback'
import modalSign from './modal-sign'

export default {
  components: {
    modalFeedback,
    modalSign
  },
  data () {
    return {
      burgerMenu: false,
      isVisibleFeedback: false,
      isSignModal: false
    }
  },
  created () {
    document.onkeydown = evt => {
      evt = evt || window.event
      if (evt.keyCode === 27) {
        this.isVisibleFeedback = false
        this.isSignModal = false
      }
    }
  }
}
</script>
<style lang="less" scoped>
    .header {
        background-color: #5b7a97;
        padding: 20px 0;
        position: relative;
        .container {
            align-items: center;
        }
        &__nav {
             display: flex;
             align-items: center;
             width: 100%;
             margin-left: 300px;
             justify-content: space-between;
            a {
                font-family: 'montserratligth', sans-serif;
                color: white;
                text-decoration: none;
                font-size: 1.3em;
                overflow: hidden;
                position: relative;
                &::before {
                    content: '';
                    position: absolute;
                    transition: 0.3s;
                    left: -100%;
                    bottom: 0;
                    width: 100%;
                    height: 1px;
                    background-color: rgba(249, 249, 249, 0.76);
                }
                &:hover::before {
                    left: 0;
                }
            }
         }
        &__burger {
            width: 40px;
            img {
                width: 100%;
                filter: invert(1);
            }
        }
        &__signIn {
          margin-left: 30px;
          padding: 10px 25px;
          font-size: 1.1em;
          border-radius: 8px;
          border: transparent;
          outline: none;
          background: rgba(255, 255, 255, 0.56);
          color: #2c3e50;
          font-family: "montserratligth", sans-serif;
          cursor: pointer;
          transition: 0.3s;
          &:hover {
            background-color: rgba(255, 255, 255, 0.32);
          }
        }
        &__button {
          display: flex;
          padding: 10px;
          margin-left: 105px;
          border-radius: 8px;
          font-size: 1.3em;
          background-color: rgba(255, 255, 255, 0.42);
          cursor: pointer;
          transition: 0.3s;
          box-sizing: border-box;
          max-width: 45px;
          max-height: 45px;
          width: 100%;
          height: 100%;
            &:hover {
                background-color: rgba(255, 255, 255, 0.32);
            }
            img {
                width: 100%;
              filter: invert(1);
            }
        }
    }
    @media (max-width: 1500px) {
        .header__nav {
            margin-left: 40px;
        }
        .header {
          &__button {
            padding: 10px;
            margin-left: 40px;
            border-radius: 5px;
            font-size: 1em;
          }
          .container {
            max-width: 1150px;
          }
        }
    }
    @media (min-width: 1251px) {
      .header__burger {
        display: none;
      }
      .header-nav__mobile {
        display: none;
      }
    }
    @media (max-width: 1250px) {
      .header {
        .container {
          max-width: 900px;
          justify-content: space-between;
          align-items: center;
          box-sizing: border-box;
        }
        &__nav {
          display: none;
        }
        &__button {
          display: none;
        }
      }
      .header-nav {
        &__mobile {
          position: absolute;
          background-color: white;
          padding: 20px 0 0;
          width: 100%;
          top: 100%;
          left: 0;
          z-index: 2;
          text-align: center;
          .container {
            flex-wrap: wrap;
          }
          a {
            font-family: 'montserratligth', sans-serif;
            color: #2c3e50;
            text-decoration: none;
            font-size: 1.2em;
            overflow: hidden;
            position: relative;
            width: 100%;
            margin-bottom: 20px;
          }
        }
      }
    }
    @media (max-width: 576px) {
      .header {
        &__signIn {
          margin-left: 0;
          padding: 5px 15px;
          order: 2;
        }
        &__logo {
          img {
            width: 35px;
            margin-right: 0;
          }
        }
        &__burger {
          width: 30px;
          order: 3;
        }
      }
    }
</style>
