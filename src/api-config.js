const API_CONFIG = {
  BASE_URL: "https://api-admin.javis.io/api",

  auth: {
    login: "/auth",
    sendEmail: "/auth/password-reminder",
    resetPass: "/auth/password-reminder/change-password",
    changePass: "/auth/change-password",
    loginAdmin: "/auth/admin-login",
  },
  user: {
    index: "/user",
    detail: "/user/:id",
  },
};
export default API_CONFIG;
