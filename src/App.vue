<template>
  <router-view></router-view>
</template>

<script>
import axios from "axios";
import { mapState, mapActions } from "vuex";
import _ from "lodash";

export default {
  name: "App",
  computed: {
    ...mapState({
      currentUser: (state) => state.auth.currentUser,
    }),
  },
  mounted() {
    this.updateRequestHeader();
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log(error + "eror");
        const errorStatus = _.get(error, "response.status");
        if (errorStatus === 403) {
          this.$router.push("/");
        } else if (errorStatus === 422) {
          this.actionLogout().then(() => {
            this.$router.push("/login", () => {});
          });
        } else {
          _.get(error, "response.data.reason");
        }
        return Promise.reject(error.response);
      }
    );
  },
  watch: {
    currentUser() {
      this.updateRequestHeader();
    },
  },
  methods: {
    ...mapActions({
      actionLogout: "auth/actionLogout",
    }),
    updateRequestHeader() {
      axios.interceptors.request.use(
        (config) => {
          if (this.currentUser && this.currentUser.auth_token) {
            config.headers.Authorization = `Bearer ${this.currentUser.auth_token}`;
          }
          return config;
        },
        function(err) {
          return Promise.reject(err);
        }
      );
    },
  },
};
</script>

<style lang="scss">
// Import Main styles for this application
@import "assets/scss/style";
@import "~@fortawesome/fontawesome-free/css/all.css";
@import "~v-toaster/dist/v-toaster.css";
</style>
