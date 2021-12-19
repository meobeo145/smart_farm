export default [
  {
    _name: "CSidebarNav",
    _children: [
      {
        _name: "CSidebarNavTitle",
        _children: ["Quản lý"],
      },
      {
        _name: "CSidebarNavItem",
        name: "Quản trị viên",
        to: "/system-user",
        icon: "cil-user",
      },
      {
        _name: "CSidebarNavItem",
        name: "Khách hàng",
        to: "/users",
        icon: "cil-people",
      },
      {
        _name: "CSidebarNavItem",
        name: "Sản phẩm",
        to: "/products",
        icon: "cil-layers",
      },
      {
        _name: "CSidebarNavItem",
        name: "Quản lý nhóm",
        to: "/groups",
        icon: "cil-chat-bubble",
      },
      {
        _name: "CSidebarNavItem",
        name: "Quản lý thông báo",
        to: "/notifications",
        icon: "cil-bell",
      },

      {
        _name: "CSidebarNavItem",
        name: "Hồ sơ sản phẩm",
        to: "/productProfiles",
        icon: "cil-list",
      },
      {
        _name: "CSidebarNavItem",
        name: "Crawls",
        to: "/crawls",
        icon: "cil-bug",
      },
      {
        _name: "CSidebarNavItem",
        name: "Chuẩn hóa",
        to: "/acronyms",
        icon: "cil-voice-over-record",
      },
    ],
  },
];
