<template>
  <CContainer class="d-flex content-center min-vh-100">
    <CRow>
      <CCol>
        <CCard class="p-4" style="width:450px;">
          <CCardBody>
            <ValidationObserver ref="formResetPass" v-slot="{ handleSubmit }">
              <form @submit.prevent="handleSubmit(handleResetPassword)">
                <h1>Smart Farm</h1>
                <p class="text-muted">Quên mật khẩu</p>
                <ValidationProvider
                  name="E-mail"
                  rules="required|email"
                  v-slot="{ errors }"
                >
                  <div class="mb-0 pt-0">
                    <CInput
                      size="lg"
                      placeholder="E-mail"
                      autocomplete="email"
                      v-model="email"
                      class="mb-0"
                    >
                      <template #prepend-content>
                        <CIcon name="cil-user" />
                      </template>
                    </CInput>
                    <ErrorMessage :error="errors[0]" />
                  </div>
                </ValidationProvider>

                <ValidationProvider
                  name="newPassword"
                  vid="pass"
                  rules="required|min:6"
                  v-slot="{ errors }"
                >
                  <div class="mb-0 pt-3">
                    <CInput
                      size="lg"
                      placeholder="Nhập mật khẩu mới"
                      type="password"
                      v-model="password"
                      class="mb-0"
                    >
                      <template #prepend-content>
                        <CIcon name="cil-lock-locked" />
                      </template>
                    </CInput>
                    <ErrorMessage :error="errors[0]" />
                  </div>
                </ValidationProvider>

                <ValidationProvider
                  name="confirm password"
                  rules="required|confirmed:pass"
                  v-slot="{ errors }"
                >
                  <div class="mb-1 pt-3">
                    <CInput
                      size="lg"
                      placeholder="Nhập lại mật khẩu mới"
                      type="password"
                      v-model="confirmPassword"
                      class="mb-0"
                    >
                      <template #prepend-content>
                        <CIcon name="cil-lock-locked" />
                      </template>
                    </CInput>
                    <ErrorMessage :error="errors[0]" class="pb-3" />
                  </div>
                </ValidationProvider>

                <CButton size="lg" color="primary" class="px-4" type="submit"
                  >Đổi mật khẩu</CButton
                >
              </form>
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
  name: "ForgotPassword",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    ...mapActions({
      sendEmail: "auth/actionSendEmail",
      resetPass: "auth/actionResetPass",
    }),
    onComplete(v) {
      this.code = v;
    },
    async handleResetPassword() {
      try {
        await this.resetPass({
          email: this.email,
          newPassword: this.password,
        });
        this.$toaster.success("Đổi mật khẩu thành công!");
        this.$router.push("/login");
      } catch (e) {
        this.$toaster.error("Đổi mật khẩu thất bại!");
      }
    },
    resetForm() {
      this.password = "";
      this.confirmPassword = "";
      this.$nextTick(() => {
        this.$refs.formResetPass.reset();
      });
    },
  },
};
</script>
