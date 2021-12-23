<template>
  <div>
    <CDropdown
      inNav
      class="c-header-nav-items"
      placement="bottom-end"
      add-menu-classes="pt-0"
    >
      <template #toggler>
        <CHeaderNavLink>
          <div class="c-avatar">
            <img src="img/avatars/6.jpg" class="c-avatar-img" />
          </div>
        </CHeaderNavLink>
      </template>
      <CDropdownHeader tag="div" class="text-center" color="light">
        <strong>Tài khoản</strong>
      </CDropdownHeader>
      <CDropdownItem @click="isShowChangePassword = true">
        <i class="fas fa-lock mr-2"></i>Đổi mật khẩu
      </CDropdownItem>
      <CDropdownItem @click="logout">
        <i class="fas fa-sign-out-alt mr-2"></i>Đăng xuất
      </CDropdownItem>
    </CDropdown>

    <CModal
      title="Thay đổi mật khẩu"
      color="success"
      :show.sync="isShowChangePassword"
      :no-close-on-backdrop="true"
    >
      <ValidationObserver v-slot="{ handleSubmit, reset }">
        <form
          @submit.prevent="
            handleSubmit(handleChangePassword);
            reset();
          "
        >
          <ValidationProvider
            name="old password"
            rules="required|min:6"
            v-slot="{ errors }"
          >
            <CInput
              label="Mật khẩu cũ"
              placeholder="Nhập mật khẩu cũ"
              :type="oldPasswordType"
              v-model="oldPassword"
              class="mb-0 pb-1"
            >
              <template #append-content>
                <div @click="hideOldPassword = !hideOldPassword">
                  <i :class="oldPasswordIcon" />
                </div>
              </template>
            </CInput>
            <ErrorMessage :error="errors[0]" />
          </ValidationProvider>

          <ValidationProvider
            name="newpassword"
            vid="pass"
            rules="required|min:6"
            v-slot="{ errors }"
          >
            <CInput
              label="Mật khẩu mới"
              placeholder="Nhập mật khẩu mới"
              :type="passwordType"
              v-model="password"
              class="mb-0 pb-1"
            >
              <template #append-content>
                <div @click="hidePassword = !hidePassword">
                  <i :class="passwordIcon" />
                </div>
              </template>
            </CInput>
            <ErrorMessage :error="errors[0]" />
          </ValidationProvider>

          <ValidationProvider
            name="confirm password"
            rules="required|confirmed:pass"
            v-slot="{ errors }"
          >
            <CInput
              label="Xác nhận mật khẩu"
              placeholder="Nhập lại mật khẩu mới"
              :type="confirmPasswordType"
              v-model="confirmPassword"
              class="mb-0 pb-1"
            >
              <template #append-content>
                <div @click="hideConfirmPassword = !hideConfirmPassword">
                  <i :class="confirmPasswordIcon" />
                </div>
              </template>
            </CInput>
            <ErrorMessage :error="errors[0]" class="pb-3" />
          </ValidationProvider>
          <div class="modal-footer pt-3 pb-0 pr-0">
            <CButton @click="handleCancelChangePassword" color="secondary"
              >Hủy</CButton
            >
            <CButton color="success" type="submit">Thay đổi</CButton>
          </div>
        </form>
      </ValidationObserver>
      <template #footer-wrapper>
        <div class="d-none"></div>
      </template>
    </CModal>
  </div>
</template>

<script>
import ErrorMessage from "@/components/ErrorMessage";
import { mapActions, mapState } from "vuex";

export default {
  name: "TheHeaderDropdownAccnt",
  components: {
    ErrorMessage,
  },
  data() {
    return {
      itemsCount: 42,
      oldPassword: "",
      password: "",
      confirmPassword: "",
      // email: "",
      hideOldPassword: true,
      hidePassword: true,
      hideConfirmPassword: true,
      isShowChangePassword: false,
    };
  },

  mounted() {
    // this.getUser();
  },

  computed: {
    ...mapState({
      // currentUser: (state) => state.auth.currentUser,
      // user: (state) => state.systemUser.user,
    }),
    oldPasswordType() {
      return this.hideOldPassword ? "password" : "text";
    },
    passwordType() {
      return this.hidePassword ? "password" : "text";
    },
    confirmPasswordType() {
      return this.hideConfirmPassword ? "password" : "text";
    },

    oldPasswordIcon() {
      return this.hideOldPassword ? "fas fa-eye-slash" : "fas fa-eye";
    },
    passwordIcon() {
      return this.hidePassword ? "fas fa-eye-slash" : "fas fa-eye";
    },
    confirmPasswordIcon() {
      return this.hideConfirmPassword ? "fas fa-eye-slash" : "fas fa-eye";
    },
  },

  methods: {
    ...mapActions({
      actionLogout: "auth/actionLogout",
      actionChangePass: "auth/actionChangePass",
      // getUserInfo: "systemUser/getUserInfo",
    }),
    // async getUser() {
    //   const id = this.currentUser.systemUserId;
    //   await this.getUserInfo({
    //     id: id,
    //   });
    // },
    async handleChangePassword() {
      if (this.oldPassword === this.password) {
        this.resetForm();
        this.$toaster.error(
          "Mật khẩu mới trùng với mật khẩu cũ. Xin nhập lại!"
        );
      } else {
        try {
          await this.actionChangePass({
            oldPassword: this.oldPassword,
            password: this.password,
          });
          this.$toaster.success("Thay đổi mật khẩu thành công.");
          this.resetForm();
          this.isShowChangePassword = false;
        } catch (error) {
          this.resetForm();
          this.$toaster.error("Đổi mật khẩu thất bại");
        }
      }
      this.hideOldPassword = true;
      this.hidePassword = true;
      this.hideConfirmPassword = true;
    },
    handleCancelChangePassword() {
      this.isShowChangePassword = false;
      this.resetForm();
    },
    logout() {
      this.actionLogout().then(() => {
        this.$toaster.success("Đăng xuất thành công!");
        this.$router.push("/login");
      });
    },
    resetForm() {
      this.oldPassword = "";
      this.password = "";
      this.confirmPassword = "";
    },
  },
};
</script>

<style scoped>
.c-icon {
  margin-right: 0.3rem;
}
</style>
