import apiService from '@/services/api'
import _ from 'lodash'

const state = {
  currentUser: localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser'))
    : {},
  currentUserDetail: '',
  roleLogin: '',
}

const getters = {
  isAuthenticated: (state) => !!_.get(state, 'currentUser.email'),
  currentUser: (state) => state.currentUser,
  currentUserDetail: (state) => state.currentUserDetail,
}

const actions = {
  actionLogin: (context, params) => {
    return apiService.post('auth.login', params).then((response) => {
      context.commit('LOGIN_SUCCESS', response)
    })
  },
  actionsGetProfile: (context) => {
    return apiService.get('profile.detail').then((response) => {
      context.commit('GET_CURRENT_USER_DETAIL', response)
    })
  },
  actionLoginAdmin: (context, params) => {
    return apiService.post('auth.loginAdmin', params).then((response) => {
      context.commit('LOGIN_SUCCESS', response)
    })
  },
  actionResetPass: (context, params) => {
    return apiService.post('auth.resetPass', params)
  },
  actionSendEmail: (context, params) => {
    return apiService.post('auth.sendEmail', params)
  },
  actionChangePass: (context, params) => {
    return apiService.post('auth.changePass', params)
  },
  actionLogout: (context) => {
    return new Promise((resolve, reject) => {
      context.commit('LOGOUT_SUCCESS')
      resolve()
    })
  },
  getCurrentUserDetail: (context) => {
    return apiService
      .get('user.detail', {
        id: state.currentUser.userId,
      })
      .then((response) => {
        context.commit('UPDATE_CURRENT_USER_DETAIL_STATE', response)
      })
  },
  updateUserProfile: (context, params) => {
    return apiService.put('profile.detail', params)
  },
}

const mutations = {
  LOGIN_SUCCESS: (state, response) => {
    state.currentUser = response
    localStorage.setItem('currentUser', JSON.stringify(state.currentUser))
  },
  LOGOUT_SUCCESS: (state) => {
    state.currentUser = null
    localStorage.removeItem('currentUser')
  },
  UPDATE_CURRENT_USER_DETAIL_STATE: (state, response) => {
    state.currentUser = {
      ...state.currentUser,
      userDetail: response,
    }
    localStorage.setItem('currentUser', JSON.stringify(state.currentUser))
  },
  GET_CURRENT_USER_DETAIL: (state, response) => {
    state.currentUserDetail = response
    state.roleLogin = response.roleFlag
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
