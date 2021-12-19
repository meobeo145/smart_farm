<template>
  <div>
    <CRow>
      <CCol col="12">
        <CCard>
          <CCardHeader>
            <h4>Danh sách khách hàng</h4>
          </CCardHeader>
          <CCardBody> </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Users",
  data() {
    return {
      fields: [
        { key: "no", label: "STT", _style: "width:50px; text-align: center" },
        {
          key: "email",
          label: "Email",
          _style: "width:250px; ",
        },
        {
          key: "name",
          label: "Tên khách hàng",
          _style: "width:250px; text-align: center",
        },
        {
          key: "phoneNumber",
          label: "Số điện thoại",
          _style: "width:200px; text-align: center",
        },
        {
          key: "status",
          label: "Trạng thái tài khoản",
          _style: "width:150px;text-align: center",
        },
        {
          key: "createdAt",
          label: "Ngày đăng ký",
          _style: "width:200px;text-align: center",
        },
        {
          key: "updatedAt",
          label: "Lần cập nhật cuối",
          _style: "width:200px; text-align: center",
        },
        {
          key: "action",
          label: "Chức năng",
          _style: "width:100px; text-align: center",
        },
      ],
    };
  },
  async mounted() {},
  methods: {
    ...mapActions({}),
  },
};
</script>
<style scoped>
.bg-color {
  background-color: #f8f8fb;
}
.down_span {
  display: inline-flex;
}
</style>
