import { createRouter, createWebHistory } from 'vue-router'

import AdminLayout from '@/layouts/AdminLayout.vue';
import ClientLayout from '@/layouts/ClientLayout.vue';

//client
import TrangChu from '@/views/client/TrangChu.vue';
import HoTro from '@/views/client/HoTro.vue';
import Gioithieu from '@/views/client/GioiThieu.vue';
import Iphone from '@/views/client/sanpham/iPhone.vue';
import Ipad from '@/views/client/sanpham/iPad.vue';
import Laptop from '@/views/client/sanpham/LapTop.vue';
import Tainghe from '@/views/client/sanpham/TaiNghe.vue';
import ChiTietSanPham from '@/views/client/sanpham/ChiTietSanPham.vue';
//admin
import Admin from '@/views/admin/Admin.vue';
import CreateProduct from '@/views/admin/Products/CreateProduct.vue';
import ListProduct from '@/views/admin/Products/ListProduct.vue';
import UpdateProduct from '@/views/admin/Products/UpdateProduct.vue';
import ListUser from '@/views/admin/ListUser.vue';
//auth
import DangKy from '@/views/auth/DangKy.vue';
import DangNhap from '@/views/auth/DangNhap.vue';
import QuenMatKhau from '@/views/auth/QuenMatKhau.vue';







const clientRouter =[
  { path: '', 
    component: TrangChu 
  },
  { path: 'gioithieu', 
    component: Gioithieu 
  },
  { path: 'hotro', 
    component: HoTro 
  },
  { path: 'iphone', 
    component: Iphone 
  },
  { path: 'ipad', 
    component: Ipad 
  },
  { path: 'laptop', 
    component: Laptop 
  },
  { path: 'tainghe', 
    component: Tainghe 
  },
  { path: 'chitietsanpham/:type/:id', 
    component: ChiTietSanPham 
  },
  { path: 'dangnhap', 
    component: DangNhap 
  },
  { path: 'dangky', 
    component: DangKy 
  },
  { path: 'quenmatkhau', 
    component: QuenMatKhau 
  },
];
const adminRouter =[
  { path: '/admin', component: Admin },
  { path: '/list-product', component: ListProduct },
  { path: '/create-product', 
    component: CreateProduct 
  },
  { path: '/update-product/:type/:id', 
    component: UpdateProduct 
  },
  { path: '/nguoidung', 
    component: ListUser 
  },
];


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'clientRouter',
      component: ClientLayout,
      children: clientRouter
    },
    {
      path: '/',
      name: 'adminRouter',
      component: AdminLayout,
      children: adminRouter
    },

  ]
})

export default router
