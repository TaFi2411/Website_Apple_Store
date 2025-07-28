<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-0" id="header">
    <div class="container">
      
      <router-link to="/" class="navbar-brand">
        <div class="logo-header">
          <i class="bi bi-apple"></i>
          <p>TaFi Store</p>
        </div>
      </router-link>

      
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      
      <div class="collapse navbar-collapse" id="navbarText">
        <div class="container-fluid" style="width: 800px; height: 80px; margin-top: 26px;">
          
          <form class="d-flex">
            <input class="form-control me-2 mb-1" type="search" placeholder="Bạn muốn tìm gì ?" aria-label="Search" />
            <button class="btn btn-outline-light" >Tìm</button>
          </form>

          
          <div class="container-tab">
            <router-link class="tab-link" to="/">Trang chủ</router-link>
            <router-link class="tab-link" to="/iphone">Sản phẩm</router-link>
            <router-link class="tab-link" to="/gioithieu">Giới thiệu</router-link>
            <router-link class="tab-link" to="/hotro">Hỗ trợ</router-link>

            <li v-if="user && user.role === 'admin'">
              <router-link class="tab-link-admin" to="/admin">Quản lý</router-link>
            </li>
            <li v-if="user">
              <router-link class="tab-link-user" to="/admin" >Quản lý</router-link>
            </li>

          


          </div>
        </div>

        
        <div class="dropdown me-2">
          <button class="btn" style="padding: 0; margin: 0; border: 0; margin-bottom: 16px;" type="button" id="dropdownMenu2">
            <router-link to="/giohang" class="nav-link active" style="font-size: 40px; color: white; ">
              <i class="bi bi-cart3"></i>
            </router-link>
          </button>
        </div>
        
        <div class=" d-flex align-items-center" style="width: 200px;">
        <button class="btn d-flex align-items-center" style="padding: 0; margin: 0; border: 0; margin-bottom: 16px; margin-left: 20px;" type="button" id="dropdownMenu2">
          <router-link to="/dangnhap" class="nav-link active d-flex align-items-center" >
            <i class="bi bi-person-circle" style="font-size: 40px; color: white;"></i>
            <strong v-if="auth.name" class="nameAuth text-light ms-2">{{ auth.name }}</strong>
              <strong v-else class="nameAuth text-light ms-2">Khách</strong>
          </router-link>
        </button>
      </div>
            <div class="btn d-flex align-items-center" style="padding: 0; margin: 0; border: 0; margin-bottom: 16px;" type="button" id="dropdownMenu2">
             
              <li v-if="auth.name !== 'Khách'" class="nav-link active d-flex align-items-center mt-3">
                <button class="btn d-flex align-items-center" style="padding: 0; margin: 0; border: 0; margin-bottom: 16px; " @click="handleLogout">
                  <i class="bi bi-box-arrow-right" style="font-size: 30px; color: white;"></i>
                </button>
              </li>

            </div>

        
        
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const user = ref(null);
const auth = ref({ name: "Khách" });

const handleLogout = () => {
  const cfm = confirm("Bạn có chắc chắn muốn đăng xuất không ?");
    if(cfm){
      localStorage.removeItem("user"); 
      auth.value = { name: "Khách" }; 
      user.value = null;
      
      window.dispatchEvent(new Event("user-updated")); 

    }
};


const loadUser = () => {
  const storedUser = localStorage.getItem("user");
  user.value = storedUser ? JSON.parse(storedUser) : null;
  auth.value = user.value ? { name: user.value.name } : { name: "Khách" };
};


const handleUserUpdate = () => {
  loadUser();
};

onMounted(() => {
  loadUser();
  window.addEventListener("user-updated", handleUserUpdate);
  
});

onUnmounted(() => {
  window.removeEventListener("user-updated", handleUserUpdate);
});

</script>
<style scoped>
.nameAuth{
  
  margin: 0px;
  margin-top:3px ;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px solid white;
  border-left: none;
  border-radius: 0px 10px 10px 0px;
}
    #header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1030;
    
    
}

.logo-header{
    width: 120px;
    font-weight: bolder;
    font-size: 18px;
    color: white;
    text-align: center;
    
}
.logo-header>p{
    margin: 0px;
    text-align: center;
}
.logo-header>.bi.bi-apple{
font-size: 46px;
}


/*--------------------------------------------------------------*/
.container-tab{
    display: flex;
    gap: 60px;
    justify-content: center;
    align-items: center;
    height: 36px;
    
}
.container-tab .tab-link{
    text-decoration: none;
    color: white;
    font-size: 15px;
    font-weight: bold;
    padding: 0px 6px 0px 6px;
    border-radius: 20px;
    
}

.container-tab .tab-link:hover{
    background-color: white;
    color: black;
    
}
.container-tab .tab-link-admin{
    text-decoration: none;
    color: white;
    font-size: 15px;
    font-weight: bold;
    padding: 0px 6px 0px 6px;
    border-radius: 20px;
    
}

.container-tab .tab-link-admin:hover{
    background-color: white;
    color: black;
    
}
.container-tab .tab-link-user{
  display: none !important;
}


</style>