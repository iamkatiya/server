<template>
  <section class="extra container">
    <div class="extra__additional additional">
      <div class="additional__image">
        <img
          alt="additional advantages"
          src="https://cdn.pixabay.com/photo/2015/07/10/17/27/sparkler-839831_1280.jpg"
        >
      </div>
      <div class="additional__content">
        <b>Дополнительные преимущества</b>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
          <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</li>
          <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</li>
        </ul>
      </div>
    </div>
    <div class="extra__reviews review">
      <div class="review__image">
        <img
          alt="reviews"
          src="https://cdn.pixabay.com/photo/2018/12/13/14/24/fair-3872942_1280.jpg"
        >
      </div>
      <div class="review__content">
        <b>Отзывы</b>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped>
    .extra {
        margin-top: 4em;
        margin-bottom: 4em;
        &__additional {
             display: flex;
             width: 50%;
             margin: 0 20px;
        }
        &__reviews {
            display: flex;
            width: 50%;
            margin: 0 20px;
        }
        &.container {
          padding-left: 0;
          padding-right: 0;
        }
    }
    .additional,
    .review {
        &__image {
            width: 300px;
            height: 300px;
            flex: 0 0 300px;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        &__content {
            padding-left: 20px;
            b {
                font-size: 1.25em;
                font-weight: bold;
            }
            p {
                line-height: 110%;
            }
        }
    }
    .review {
        &__content p {
            margin-top: 16px;
        }
    }
    ul {
        list-style: none;
        margin-left: 0;
        padding-left: 1.5em;
    }
    li {
        margin-bottom: 1em;
    }
    ul > li:before {
        display: inline-block;
        content: "—";
        width: 1.5em;
        margin-left: -1.5em;
    }
    @media (max-width: 1500px) {
        .extra {
            &.container {
                flex-wrap: wrap;
            }
            &__additional {
                width: 100%;
                margin-right: 0;
                margin-bottom: 30px;
            }
            &__reviews {
                width: 100%;
                margin-left: 0;
            }
        }
    }
    @media (max-width: 991px) {
        .additional,
        .review {
            flex-wrap: wrap;
            &__image {
                margin: 0 auto 20px;
                width: 280px;
                height: 280px;
                flex: 0 0 280px;
            }
            &__content {
                width: 100%;
                padding-left: 0;
                b {
                    display: block;
                    text-align: center;
                }
            }
        }
    }
</style>
