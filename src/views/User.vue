<template>
  <div class="c-app">
    <CWrapper>
      <TheHeader />
      <div class="c-body">
        <main class="c-main pt-3" style="background: white;">
          <CContainer fluid class="pl-3 pr-3">
            <CRow>
              {{ titles }}
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
                      <td class="text-center">
                        {{ data.index + 1 }}
                      </td>
                    </template>
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
import { mapActions, mapState } from "vuex";
import TheHeader from "@/containers/TheHeader";
import TheFooter from "@/containers/TheFooter";

export default {
  name: "User",
  components: {
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
  computed: {
    ...mapState({
      currentUser: (state) => state.auth.currentUser,
      titles: (state) => state.title.titles,
      title: (state) => state.title.title,
    }),
  },
  async mounted() {
    await this.getListTitles();
  },
  methods: {
    ...mapActions({
      getListTitles: "title/getListTitles",
      deleteTitle: "title/deleteTitleById",
      getTitleInfo: "title/getTitleInfo",
      updateTitleInfo: "title/updateTitleInfo",
    }),
    pageChange(val) {
      this.$router.push({ query: { page: val } });
      this.activePage = val;
    },
  },
};
</script>
