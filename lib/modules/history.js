/* eslint-disable no-empty-pattern */
import history from "../history.js"

const state = {
  location: {
    pathname: "",
    search: "",
    hash: "",
    state: {},
    key: ""
  }
}

const getters = {

}

const actions = {
  push ({}, {path, transition}) {
    if (path !== history.location.pathname){
      history.push(path, {transition})
    }
  },
  replace ({}, {path, state}) {
    history.replace(path, {...state})
  },
  go ({}, {steps}) {
    history.go(steps)
  },
  goBack () {
    history.goBack()
    // dispatch("locationChange", history.location)
  },
  goForward () {
    history.goForward()
    // dispatch("locationChange", history.location)
  },
  init ({dispatch}) {
    dispatch("locationChange", history.location)
    history.listen((location) => {
      dispatch("locationChange", location)
    })
  },
  locationChange ({commit}, payload) {
    commit("setLocation", payload)
  }
}

const mutations = {
  setLocation (state, location) {
    state.location = {...location}
  }
}
//
export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}
