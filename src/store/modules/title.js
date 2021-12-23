import apiService from "@/services/api";

// Init state
const state = {
  titles: [],
  title: {},
};

// Getters
const getters = {};

// Actions
const actions = {
  getListTitles: (context, params) => {
    return apiService.get("title.index", params).then((response) => {
      context.commit("GET_LIST_TITLES", response);
    });
  },
  getTitleInfo: (context, params) => {
    return apiService.get("title.detail", params).then((response) => {
      context.commit("GET_TITLE_INFO_SUCCESS", response);
    });
  },
  deleteTitleById: (context, params) => {
    return apiService.delete("title.detail", params);
  },
  createNewTitle: (context, params) => {
    return apiService.post("title.index", params);
  },
  updateTitle: (context, params) => {
    return apiService.put("title.detail", params);
  },
};

// Mutation
const mutations = {
  GET_LIST_TITLES(state, titles) {
    state.titles = titles;
  },
  GET_TITLE_INFO_SUCCESS(state, title) {
    state.title = title;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
