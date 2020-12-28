import axios from 'axios'

const holidays = {
  state: {
    jsonData: [],
    jsonError: ''
  },
  actions: {
    getJson ({commit}) {
      return axios
        .get('https://next.json-generator.com/api/json/get/41l9bOY3Y')
        .then(response => {
          commit('setJsonData', response.data)
        }).catch(error => {
          commit('setJsonError', error.message)
        })
    }
  },
  mutations: {
    setJsonData (state, result) {
      result.map((item) => {
        state.jsonData.push(item)
      })
    },
    setJsonError (state, result) {
      state.jsonError = result
    }
  }
}

export default holidays
