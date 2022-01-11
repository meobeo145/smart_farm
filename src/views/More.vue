<template>
  <div class="c-app">
    <CWrapper>
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
      </div>
    </CWrapper>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "More",
  data() {
    return {
      fields: [
        { key: "no", label: "STT", _style: "width:30px; text-align: center;" },
        {
          key: "treeSpecies",
          label: "Loài cây",
        },
        {
          key: "light",
          label: "Độ sáng",
          _style: "text-align: center",
          sorter: false,
        },
        {
          key: "pH",
          label: "Nồng độ pH",
          _style: "text-align: center",
          sorter: false,
        },
        {
          key: "ppm",
          label: "Nồng độ ppm",
          _style: "text-align: center",
          sorter: false,
        },
      ],
      listDeviceFilter: [
        {
          treeSpecies: "Húng quế",
          light: "Ánh sáng mạnh",
          pH: "5.5 - 6.5",
          ppm: "700 ~ 1120",
        },
        {
          treeSpecies: "Đậu cove",
          light: "Ánh sáng mạnh",
          pH: "6.0",
          ppm: "1400 ~ 2800",
        },
        {
          treeSpecies: "Nồng độ dinh dưỡng hòa tan",
          light: "Ánh sáng mạnh, vừa",
          pH: "6 - 6.8",
          ppm: "1900 ~ 2450",
        },
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
