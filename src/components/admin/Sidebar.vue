<template>
  <div v-if="auth.name" class="sidebar-container bg-dark">
    <!-- Sidebar -->
    <div class="sidebar">
      <a class="navbar-brand mb-3" href="/">
        <div class="logo-header">
          <i class="bi bi-apple"></i><span>TaFi Store</span>
        </div>
      </a>

      <!-- Các mục chính -->
      <router-link to="/admin" class="tab-link">Tổng quan</router-link>
      <router-link to="/list-product" class="tab-link">Sản phẩm</router-link>
      <router-link to="/nguoidung" class="tab-link">Người dùng</router-link>

      <!-- Nút đăng xuất -->
      <div class="logout-container">
        <button @click="handleLogout" class="tab-link logout-link">Đăng xuất</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const auth = ref({ name: "" });

onMounted(() => {
  const storedUser = localStorage.getItem("user");
  if (storedUser && storedUser !== "null") {
    const userData = JSON.parse(storedUser);
    auth.value.name = userData?.name || "";
  }
});

const handleLogout = () => {
  const cfm = confirm("Bạn có chắc chắn muốn đăng xuất không ?");
    if(cfm){
      localStorage.removeItem("user"); 
  auth.value.name = ""; 
  router.push("/dangnhap");

    }
  
};
</script>

<style scoped>
.sidebar-container {
  width: 250px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
}

/* Sidebar nội dung */
.sidebar {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
}

/* Logo */
.logo-header {
  font-weight: bolder;
  font-size: 18px;
  color: white;
  text-align: center;
  margin-bottom: 20px;
}
.logo-header span {
  font-size: 26px;
  margin-left: 10px;
}
.logo-header .bi.bi-apple {
  font-size: 40px;
}

/* Link sidebar */
.tab-link {
  color: white;
  text-decoration: none;
  padding: 12px 15px;
  padding-left: 60px;
  display: block;
  font-weight: bold;
  transition: background 0.3s ease;
}
.tab-link:hover {
  background-color: #495057;
  border-radius: 5px;
}

.router-link-active {
  background-color: #007bff;
  color: white;
  border-radius: 5px;
}

/* Nút đăng xuất */
.logout-container {
  margin-top: auto;
  padding-bottom: 20px;
}
.logout-link {
  font-weight: bold;
  cursor: pointer;
  background: none;
  border: none;
  color: white;
  width: 100%;
  text-align: left;
}
.logout-link:hover {
  color: #ff4d4d;
}
</style>
