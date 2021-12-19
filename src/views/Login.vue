<template>
  <CContainer class="d-flex content-center min-vh-100">
    <CRow>
      <CCol>
        <CCard class="p-4">
          <CCardBody>
            <ValidationObserver v-slot="{ handleSubmit }">
              <CForm @submit.prevent="handleSubmit(login)">
                <h1>Smart Farm Login</h1>
                <p class="text-muted">Đăng nhập vào tài khoản</p>
                <ValidationProvider
                  name="E-mail"
                  rules="required|email"
                  v-slot="{ errors }"
                >
                  <div class="mb-3">
                    <CInput
                      placeholder="E-mail"
                      autocomplete="email"
                      v-model="email"
                      class="mb-0"
                    >
                      <template #prepend-content
                        ><i class="fas fa-user"></i
                      ></template>
                    </CInput>
                    <ErrorMessage :error="errors[0]" />
                  </div>
                </ValidationProvider>
                <ValidationProvider
                  name="Password"
                  rules="required|min:6"
                  v-slot="{ errors }"
                >
                  <div class="mb-3">
                    <CInput
                      placeholder="Mật khẩu"
                      type="password"
                      autocomplete="curent-password"
                      v-model="password"
                      class="mb-0"
                    >
                      <template #prepend-content
                        ><i class="fas fa-lock"></i
                      ></template>
                    </CInput>
                    <ErrorMessage :error="errors[0]" />
                  </div>
                </ValidationProvider>
                <CRow>
                  <CCol col="6" class="text-left">
                    <CButton color="primary" class="px-4" type="submit"
                      >Đăng nhập</CButton
                    >
                  </CCol>
                  <CCol col="6" class="text-right">
                    <CButton
                      color="link"
                      @click="goToForgotPassword"
                      class="px-0"
                      >Quên mật khẩu?</CButton
                    >
                  </CCol>
                </CRow>
              </CForm>
            </ValidationObserver>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </CContainer>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions({
      actionLogin: "auth/actionLogin",
    }),
    async login() {
      try {
        await this.actionLogin({
          email: this.email,
          password: this.password,
        });
        this.$router.push("/");
        this.$toaster.success("Đăng nhập thành công!");
      } catch (error) {
        this.$toaster.error("Đăng nhập không thành công!");
      }
    },
    goToForgotPassword() {
      this.$router.push("/forgotPassword");
    },
  },
};
</script>
