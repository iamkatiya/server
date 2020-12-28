<template>
  <transition name="modal-fade">
    <div class="modal">
      <div class="modal__window modal-content">
        <div class="modal-content__text">
          Вы открыли модальное окно!
        </div>
        <div
          class="modal-content__close"
          @click="close"
        >
          <img
            class="modal-content__close"
            src="@/assets/close.svg"
          >
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'Modal',
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>
<style lang="less" scoped>
    .modal {
        display: flex;
        z-index: 1;
        position: fixed;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        top: 0;
        left: 0;
        &__window {
            display: flex;
            position: relative;
            flex-wrap: wrap;
            z-index: 1;
            padding: 1rem;
            width: 300px;
            height: 250px;
            justify-content: center;
            align-items: center;
            background: #fff;
            margin: 1rem auto;
            border-radius: .3rem;
            box-shadow: 0 3px 7px 0 rgba(0, 0, 0, .2);
            box-sizing: border-box;
        }
        &-content__close {
            position: absolute;
            cursor: pointer;
            width: 35px;
            right: 10px;
            top: 10px
        }
    }
</style>
