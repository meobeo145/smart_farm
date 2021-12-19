import apiService from "@/services/api";

// Init state
const state = {
  users: [],
  user: {},
};

// Getters
const getters = {};

// Actions
const actions = {
  getListUsers: (context, params) => {
    return apiService.get("user.index", params).then((response) => {
      context.commit("GET_LIST_USERS", response);
    });
  },
  getUserInfo: (context, params) => {
    return apiService.get("user.detail", params).then((response) => {
      context.commit("GET_USER_INFO_SUCCESS", response);
    });
  },
  deleteUserById: (context, params) => {
    return apiService.delete("user.detail", params);
  },
  createNewUser: (context, params) => {
    return apiService.post("user.index", params);
  },
  updateUser: (context, params) => {
    return apiService.put("user.index", params);
  },
};

// Mutation
const mutations = {
  GET_LIST_USERS(state, users) {
    state.users = users;
  },
  GET_USER_INFO_SUCCESS(state, user) {
    state.user = user;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
