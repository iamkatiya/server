<template>
  <footer class="footer">
    <div class="container">
      <router-link
        :to="{ name: 'index'}"
        class="footer__logo logotype"
      >
        <img
          alt="wonder site"
          src="@/assets/logo.svg"
        >
        <h1>Wonder site</h1>
      </router-link>
      <div class="footer__nav contacts">
        <div class="contacts__head">
          Наш адрес:
        </div>
        <div class="contacts__info">
          г. Москва, ул. Ижевская, д.38
        </div>
      </div>
      <div class="footer__nav contacts">
        <div class="contacts__head">
          Контакты:
        </div>
        <a
          href="#"
          class="contacts__info"
        >Телефон: +7 (888) 123 45 67</a>
        <a
          href="#"
          class="contacts__info"
        >Telegram: @example</a>
      </div>
    </div>
  </footer>
</template>

<style>
.footer {
    background-color: #2c3e50;
    padding: 30px 0 20px;
}
.footer .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.contacts__head {
    font-size: 1.5em;
    color: white;
    margin-bottom: 16px;
}
.contacts__info {
    display: block;
    color: white;
    text-decoration: none;
}
.contacts a {
    transition: 0.3s;
    margin-bottom: 10px;
}
.contacts a:hover {
    color: #6d8fb0;
}
@media (max-width: 991px) {
    .footer .container {
        flex-wrap: wrap;
        justify-content: flex-start;
    }
    .footer__logo {
        flex: 100%;
        width: 100%;
        margin-bottom: 20px;
    }
    .footer__nav {
        margin-right: 50px;
    }
}
@media (max-width: 768px) {
    .footer__nav {
        flex: 100%;
        width: 100%;
        margin-bottom: 30px;
        text-align: center;
        margin-right: 0;
    }
}
</style>
