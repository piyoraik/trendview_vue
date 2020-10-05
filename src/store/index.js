import Vue from "vue";
import Vuex from "vuex";
import axios from "@/api/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    trends: [],
  },
  mutations: {
    FETCH_TRENDS(state, trends) {
      state.trends = trends;
    },
    SEARCH_TRENDS(state, trends) {
      state.trends = trends;
    },
  },
  actions: {
    async fetch_trends({ commit }) {
      await axios()
        .get("/trends")
        .then((res) => {
          commit("FETCH_TRENDS", res.data);
        })
        .catch((e) => console.log(e));
    },
    async search_trends({ commit }, search) {
      await axios()
        .get("/search", { params: { word: search } })
        .then((res) => {
          commit("SEARCH_TRENDS", res.data);
        })
        .catch((e) => console.log(e));
    },
  },
});
