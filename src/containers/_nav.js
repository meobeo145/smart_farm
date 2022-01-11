export default [
  {
    _name: "CSidebarNav",
    _children: [
      {
        _name: "CSidebarNavTitle",
        _children: ["Khách hàng"],
        role:[],
      },
      {
        _name: "CSidebarNavItem",
        name: "Trang chủ",
        to: "/user",
        icon: "cil-user",
        role:[],
      },
      {
        _name: "CSidebarNavItem",
        name: "Danh mục tham khảo",
        to: "/more",
        icon: "cil-infinity",
        role:[],
      },
    ],
  },
];
