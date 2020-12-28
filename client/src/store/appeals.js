const appeals = {
  state: {
    formResults: []
  },
  mutations: {
    newFormResult (state, result) {
      state.formResults.push(result)
    }
  }
}

export default appeals
