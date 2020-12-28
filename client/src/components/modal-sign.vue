<template>
  <transition name="modal-fade">
    <div
      class="feedback-form"
    >
      <form
        v-if="loginForm"
        class="feedback-form__window feedback-form__sign"
      >
        <div class="feedback-form__title sign-form__title">
          Вход в систему
        </div>
        <div class="feedback-form__item">
          <label for="loginInput">
            Логин или email
          </label>
          <input
            id="loginInput"
            type="text"
            placeholder="example@mail.ru"
            trim
          >
        </div>
        <div class="feedback-form__item">
          <label for="passwordInput">
            Пароль
          </label>
          <input
            id="passwordInput"
            v-model="loginPassword"
            :type="eyeActive ? 'password' : 'text'"
            placeholder="•••••••••"
            trim
          >
          <div
            class="feedback-form__password auth-password"
            @click="eyeActive = !eyeActive"
          >
            <img
              v-if="eyeActive"
              src="@/assets/eye.svg"
            >
            <img
              v-else
              src="@/assets/eye-disable.svg"
            >
          </div>
        </div>
        <button
          type="submit"
          class="feedback-form__btn about-content__btn"
        >
          Войти
        </button>
        <div class="feedback-form__need-acc">
          Нужен аккаунт?
          <span
            @click="loginForm = false"
          >
            Создайте его здесь
          </span>
        </div>
        <div
          class="modal-content__close"
          @click="closeSignModal"
        >
          <img
            class="modal-content__close"
            src="@/assets/close.svg"
          >
        </div>
      </form>
      <form
        v-else
        class="feedback-form__window feedback-form__sign"
      >
        <div class="feedback-form__title">
          Регистрация
        </div>
        <div class="feedback-form__item">
          <label for="loginFirstName">
            Ваше имя
          </label>
          <input
            id="loginFirstName"
            type="text"
            placeholder="Иван"
            trim
          >
        </div>
        <div class="feedback-form__item">
          <label for="loginLastName">
            Ваша фамилия
          </label>
          <input
            id="loginLastName"
            type="text"
            placeholder="Иванов"
            trim
          >
        </div>
        <div class="feedback-form__item">
          <label for="loginEmail">
            Электронная почта
          </label>
          <input
            id="loginEmail"
            type="email"
            placeholder="example@mail.ru"
            trim
          >
        </div>
        <div class="feedback-form__item create-pass">
          <label for="loginPass">
            Придумайте пароль
          </label>
          <input
            id="loginPass"
            v-model="createPassword"
            :type="eyeActive ? 'password' : 'text'"
            placeholder="Не менее 6 символов"
            trim
          >
          <div
            class="feedback-form__password"
            @click="eyeActive = !eyeActive"
          >
            <img
              v-if="eyeActive"
              src="@/assets/eye.svg"
            >
            <img
              v-else
              src="@/assets/eye-disable.svg"
            >
          </div>
          <div
            class="feedback-form__generate"
            @click="generatePass"
          >
            Сгенерировать
          </div>
        </div>
        <button
          type="submit"
          class="feedback-form__btn about-content__btn"
        >
          Зарегистрироваться
        </button>
        <div class="feedback-form__need-acc">
          Уже есть аккаунт?
          <span
            @click="loginForm = true"
          >
            Войдите здесь
          </span>
        </div>
        <div
          class="modal-content__close"
          @click="closeSignModal"
        >
          <img
            class="modal-content__close"
            src="@/assets/close.svg"
          >
        </div>
      </form>
    </div>
  </transition>
</template>
<script>
import {required} from 'vuelidate/lib/validators'

export default {
  name: 'ModalFeedback',
  data () {
    return {
      loginForm: true,
      eyeActive: true,
      createPassword: '',
      loginPassword: ''
    }
  },
  validations: {
    handling: {
      login: {
        required
      },
      password: {
        required
      }
    }
  },
  methods: {
    closeSignModal () {
      this.$emit('closeModal')
    },
    generatePass () {
      var generator = require('generate-password')
      this.createPassword = generator.generate({
        length: 10,
        numbers: true
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .create-pass {
    display: flex;
    flex-wrap: wrap;
    input {
      width: 75%;
    }
    label {
      width: 100%;
    }
  }
  @media (max-width: 1650px) {
    .create-pass {
      input {
        width: 100%;
      }
    }
  }
</style>
