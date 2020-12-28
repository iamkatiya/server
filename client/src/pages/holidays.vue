<template>
  <div>
    <header-nav />
    <div class="holidays container">
      <h2 class="holidays__head">
        Список праздников
      </h2>
      <div class="holidays__filters filter">
        <div class="filter__head">
          Фильтр праздников:
        </div>
        <div class="filter__item">
          <label for="holiday-item">по названию</label>
          <input
            id="holiday-item"
            v-model="filterValue"
            @change="filter"
            @keyup="filter"
          >
        </div>
        <div class="filter__item">
          <label for="holiday-date-before">по дате</label>
          <date-picker
            id="holiday-date-before"
            v-model="filterDate"
            value-type="format"
            :range="true"
            @change="filter"
          />
        </div>
      </div>
      <div class="holidays__filters sort">
        <div class="sort__head">
          Сортировка праздников:
        </div>
        <div
          class="sort__value"
          @click="sortDropdown =! sortDropdown"
        >
          Отсортировано {{ sortValue }}
          <div
            v-if="sortDropdown"
            class="sort__dropdown"
          >
            <div
              class="sort__item"
              @click="upSort"
            >
              по возрастанию даты
            </div>
            <div
              class="sort__item"
              @click="downSort"
            >
              по убыванию даты
            </div>
            <div
              class="sort__item"
              @click="breakSort"
            >
              по умолчанию
            </div>
          </div>
        </div>
      </div>
      <div class="holidays__wrap">
        <div
          v-if="isEmptyResults"
          class="holidays__empty"
        >
          К сожалению, по вашему запросу ничего не найдено
        </div>
        <div
          v-for="(item, itemIndex) in paginationFunc"
          v-else
          :key="itemIndex"
          class="holidays__item"
        >
          <div class="holidays__name holidays__text">
            {{ item.holidayName }}
          </div>
          <div class="holidays__text">
            {{ item.about }}
          </div>
          <div class="holidays__text holidays__date">
            Дата проведения:
            {{ new Date(item.date).getDate() + ' ' + months[(new Date(item.date).getMonth())] + ' ' + new
              Date(item.date).getFullYear() + ' года' }}
          </div>
        </div>
      </div>
      <b-pagination
        v-model="currentPage"
        :total-rows="filteredArr.length"
        :per-page="perPage"
        aria-controls="my-table"
      />
    </div>
    <footer-nav />
  </div>
</template>

<script>
import headerNav from '../components/header.vue'
import footerNav from '../components/footer.vue'
import DatePicker from 'vue2-datepicker'

export default {
  name: 'Holidays',
  components: {
    headerNav,
    footerNav,
    DatePicker
  },
  data () {
    return {
      filterValue: '',
      filterDate: null,
      filteredArr: [],
      date: '2019-10-09',
      perPage: 4,
      currentPage: 1,
      sortDropdown: false,
      sortValue: 'по умолчанию',
      months: 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'.split(',')
    }
  },
  computed: {
    isEmptyResults: function () {
      return this.filteredArr.length === 0
    },
    paginationFunc: function () {
      return this.filteredArr.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage)
    }
  },
  mounted () {
    this.$store.dispatch('getJson')
    this.filteredArr = this.$store.state.holidays.jsonData
  },
  methods: {
    filter () {
      this.filteredArr = this.$store.state.holidays.jsonData
      if (this.filterValue !== '') {
        this.filteredArr = this.filteredArr.filter(item => item.holidayName.toUpperCase().includes(this.filterValue.toUpperCase())
        )
      }
      if (this.filterDate !== null) {
        if (this.filterDate[0] !== null && this.filterDate[1] !== null) {
          this.filteredArr = this.filteredArr.filter(item => {
            return (Date.parse(item.date) >= Date.parse(this.filterDate[0]) && Date.parse(item.date) <= Date.parse(this.filterDate[1]))
          })
        }
      }
    },
    breakSort () {
      function compare (a, b) {
        if (a.index < b.index) return -1
        if (a.index > b.index) return 1
        return 0
      }
      this.sortValue = 'по умолчанию'
      this.filteredArr.sort(compare)
    },
    upSort () {
      function compare (a, b) {
        if (a.date < b.date) return -1
        if (a.date > b.date) return 1
        return 0
      }
      this.sortValue = 'по возрастанию даты'
      this.filteredArr.sort(compare)
    },
    downSort () {
      function compare (a, b) {
        if (a.date < b.date) return 1
        if (a.date > b.date) return -1
        return 0
      }

      this.sortValue = 'по убыванию даты'
      this.filteredArr.sort(compare)
    }
  }
}
</script>

<style lang="less">
  @import "../../node_modules/vue2-datepicker/index.css";
  /*@import '../../node_modules/bootstrap/scss/bootstrap.scss';*/
  /*@import '../../node_modules/bootstrap-vue/src/index.scss';*/

    h1 {
        font-size: 2em;
        margin-top: 0.67em;
        margin-bottom: 0.67em;
    }

    .header {
        .container {
            box-sizing: content-box;
        }
    }

    .logotype {
        height: 87px;
    }

    .holidays {
        flex-wrap: wrap;
        margin-top: 60px;
        margin-bottom: 60px;

        &__wrap {
            display: flex;
            flex-wrap: wrap;
            min-height: 70vh;
        }

        &__filters {
            width: 50%;
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 100px;
            padding: 10px;

            input {
                width: 300px;
                padding: 10px;
                border: 1px solid #2c3e50;
                border-radius: 4px;
                outline: none;
                box-sizing: border-box;
                height: 37px;
            }
        }

        &__item {
            display: flex;
            flex-wrap: wrap;
            background-color: #6d8fb0;
            padding: 25px 100px 25px 25px;
            margin: 10px 10px 30px;
            color: white;
            width: calc(50% - 20px);
            box-sizing: border-box;
            box-shadow: 0 4px 13px 0 rgba(0, 0, 0, 0.4);
            border-radius: 7px;
            font-size: 1.6em;
            background-size: 96px;
            background-repeat: no-repeat;
            background-position-x: right;
            background-image: url('../assets/snow.svg');
        }

        &__head {
            margin-bottom: 60px;
            width: 100%;
            text-align: center;
            font-size: 3em;
            color: #2c3e50;
            text-shadow: 1px 1px 2px rgba(109, 143, 176, 0.89), 0 0 1em rgba(91, 122, 151, 0.27);
        }

        &__text {
            display: flex;
            flex: 100%;
            margin-bottom: 20px;

            p {
                padding-right: 10px;
            }

            &:last-child {
                margin-bottom: 0;
            }
        }

        &__date {
            margin-top: auto;
        }

        &__name {
            font-family: 'Oleo', sans-serif;
            font-size: 2.7em;
        }
    }

    .filter {
        &__head {
            font-size: 2em;
            width: 100%;
        }

        &__item {
            width: 50%;

            label {
                margin-bottom: 5px;
                margin-top: 15px;
                width: 100%;
            }
        }
    }

    .sort {
        &__head {
            font-size: 2em;
            margin-bottom: 15px;
            width: 100%;
        }

        &__item {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            cursor: pointer;
            transition: 0.3s;
            font-size: 1em;

            &:last-child {
                margin-bottom: 0;
            }

            &:hover {
                filter: contrast(0.5);
            }

            img {
                width: 22px;
                height: 22px;
                margin-left: 10px;
            }
        }

        &__value {
            position: relative;
            padding: 5px 10px;
            height: 37px;
            margin-top: 28px;
            width: 370px;
            border: 1px solid #2c3e50;
            border-radius: 4px;
            outline: none;
            box-sizing: border-box;
            background-image: url("../assets/arrow-dropdown.svg");
            background-repeat: no-repeat;
            background-position: 97% 50%;
            background-size: 17px;
            cursor: pointer;
            transition: 0.3s;
        }

        &__dropdown {
            position: absolute;
            left: 0;
            right: 0;
            top: 100%;
            background-color: rgba(196, 196, 196, 0.54);
            padding: 10px;
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
        }
    }

    .revert-arrow {
        transform: rotate(180deg);
    }

    .mx-datepicker {
        width: 300px;

        input {
            height: 37px;
            padding: 10px;
        }
    }

    .mx-input {
        height: 37px;
        padding: 10px;
    }

    .pagination {
        width: 100%;
        text-align: center;
        justify-content: center;
    }

    .page-item {
        &.active {
            .page-link {
                background-color: #6d8fb0;
                border-color: #6d8fb0;
            }
        }
    }

    .page-link {
        color: #2c3e50;
    }

    .container {
        max-width: 1400px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
    }

    @media (max-width: 1500px) {
        .holidays {
            &__item {
                margin-right: 0;
            }

            &__filters {
              input {
                width: 100%;
              }
            }
        }
        .filter {
            &__item {
                width: calc(50% - 20px);
                margin-right: 10px;
            }
        }
    }

    @media (max-width: 1200px) {
        .holidays {
          &__filters {
            width: 100%;
            input {
              width: 100%;
              max-width: 370px;
            }
          }
        }
        .filter {
          &__item {
            width: 100%;
          }
        }
        .mx-datepicker {
          width: 100%;
          max-width: 370px;
        }
    }

    @media (max-width: 991px) {
        .holidays {
            &__text {
                flex-wrap: wrap;

                p {
                    width: 100%;
                    margin-bottom: 5px;
                }
            }

            &__name {
                font-size: 1.7em;
            }

            &__item {
                width: 100%;
                background-size: 50px;
                padding-right: 25px;
                margin-left: 0;
            }

            &__head {
                font-size: 2em;
            }
        }
    }

    @media (max-width: 576px) {
        .holidays {
            &__filters {
                padding: 0;

                input {
                    width: 100%;
                    max-width: none;
                }
            }
        }
        .filter {
            &__head {
                font-size: 1.6em;
            }
            &__item {
              margin-right: 0;
            }
        }
        .sort {
            &__head {
                font-size: 1.6em;
            }

            &__value {
                font-size: 0.8em;
                padding: 8px 10px;
                width: 100%;
            }
        }
        .mx-icon-calendar, .mx-icon-clear {
            right: 20px;
        }
        .mx-datepicker {
          max-width: none;
        }
    }

</style>
