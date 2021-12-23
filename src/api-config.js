const API_CONFIG = {
  BASE_URL: "https://mockup-api.herokuapp.com",

  auth: {
    login: "/auth/signin",
    sendEmail: "/auth/password-reminder",
    resetPass: "/auth/password-reminder/change-password",
    changePass: "/auth/change-password",
    loginAdmin: "/auth/admin-login",
  },
  user: {
    index: "/user",
    detail: "/user/:id",
  },
  title: {
    index: "/api/v1/todos",
    detail: "/api/v1/todos/:id",
  },
};
export default API_CONFIG;
