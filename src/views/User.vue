<template>
  <div class="c-app">
    <TheSidebar />
    <CWrapper>
      <TheHeader />
      <div class="c-body">
        <main class="c-main pt-3" style="background: white;">
          <CContainer fluid class="pl-3 pr-3">
            <CRow>
              <CCol col="12">
                <CCardBody>
                  <CDataTable
                    hover
                    striped
                    border
                    :items="listDeviceFilter"
                    :fields="fields"
                    :items-per-page="10"
                    clickable-rows
                    :pagination="{ doubleArrows: false, align: 'center' }"
                    @page-change="pageChange"
                    :noItemsView="{ noItems: 'Không có thiết bị nào' }"
                    sorter
                  >
                    <template #no="data">
                      <td class="text-center">{{ data.index + 1 }}</td>
                    </template>
                    <!-- <template #action="{ item }">
                      <td class="text-center">
                        <CButton
                          color="info"
                          sm
                          square
                          @click="openShow(item)"
                          class="m-1"
                        >
                          Chi tiết
                        </CButton>
                      </td>
                    </template> -->
                  </CDataTable>
                </CCardBody>
              </CCol>
            </CRow>
          </CContainer>
        </main>
        <TheFooter />
      </div>
    </CWrapper>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import TheSidebar from "@/containers/TheSidebar";
import TheHeader from "@/containers/TheHeader";
import TheFooter from "@/containers/TheFooter";

export default {
  name: "User",
  components: {
    TheSidebar,
    TheHeader,
    TheFooter,
  },
  data() {
    return {
      fields: [
        { key: "no", label: "STT", _style: "width:30px; text-align: center;" },
        {
          key: "nameDevice",
          label: "Tên thiết bị",
        },
        {
          key: "information",
          label: "Thông tin",
          _style: "text-align: center",
          sorter: false,
        },
      ],
      listDeviceFilter: [
        { nameDevice: "Cảm biến mực nước", information: "Mức 5" },
        { nameDevice: "Cảm biến ánh sáng", information: "Độ rọi: 1500Lux" },
        { nameDevice: "Nồng độ dinh dưỡng hòa tan", information: "1000ppm" },
      ],
    };
  },
  methods: {
    ...mapActions({
      actionLogin: "auth/actionLogin",
    }),
    pageChange(val) {
      this.$router.push({ query: { page: val } });
      this.activePage = val;
    },
    openShow() {},
  },
};
</script>
