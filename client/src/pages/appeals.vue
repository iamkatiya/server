<template>
  <div>
    <header-nav />
    <div class="appeals__wrap">
      <div
        v-if="appeals.length === 0"
        class="appeals__empty container"
      >
        Обращений пока нет...
      </div>
      <div
        v-else
        class="appeals container"
      >
        <div
          v-for="(item, itemIndex) in appeals"
          :key="itemIndex"
          class="appeals__item"
        >
          <div class="appeals__name">
            <p>Имя: </p>
            {{ item.name }}
          </div>
          <div class="appeals__text">
            <p>Текст обращения: </p>
            {{ item.text }}
          </div>
          <div class="appeals__text">
            <p>Электронная почта: </p>
            {{ item.email }}
          </div>
          <div class="appeals__text">
            <p>Телефон: </p>
            {{ item.phone }}
          </div>
          <div class="appeals__communication communication">
            <div class="communication__head">
              Способ связи:
            </div>
            <div class="communication__array">
              <div
                v-for="(communication, communicationIndex) in item.communication"
                :key="communicationIndex"
              >
                {{ communication }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer-nav />
  </div>
</template>

<script>
import headerNav from '../components/header.vue'
import footerNav from '../components/footer.vue'

export default {
  name: 'Appeals',
  components: {
    headerNav,
    footerNav
  },
  data () {
    return {
      appeals: this.$store.state.appeals.formResults
    }
  }
}
</script>

<style lang="less" scoped>
.appeals {
    padding: 60px 0;
    flex-wrap: wrap;
    &__wrap {
        min-height: 74vh;
        margin-top: 60px;
    }
    &__item {
        width: 51%;
        margin: 20px auto;
        border-bottom: 1px solid rgba(44, 62, 80, 0.36);
        padding: 10px 0;
     }
    &__name {
        display: flex;
        p {
            width: 220px;
        }
    }
    &__text {
        display: flex;
        p {
            width: 220px;
        }
    }
    &__communication {
        display: flex;
    }
}
.communication {
    &__head {
        width: 220px;
    }
}
@media (max-width: 991px) {
  .appeals {
    &__item {
      width: 100%;
      padding: 15px;
    }
    &__wrap {
      margin-top: 0;
    }
  }
}
</style>
