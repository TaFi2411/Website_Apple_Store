<template>
    <nav class="navbar navbar-expand-lg navbar-dark p-0" id="header" style="background-color: black;">
    <div class="container p-0 pe-2">


      
      <div class="collapse navbar-collapse" id="navbarText">
        <div class="container" style=" height: 50px; margin-top: 26px;">
          
          <div class="container-tab">
            <router-link class="tab-link" to="/">Trang chủ</router-link>
            <router-link class="tab-link" to="/iphone">Sản phẩm</router-link>
            <router-link class="tab-link" to="/gioithieu">Giới thiệu</router-link>
            <router-link class="tab-link"to="/hotro">Hỗ trợ</router-link>
            <router-link class="tab-link" to="/admin">Quản lý</router-link>

       
          </div>
          
        </div>
        <div class=" d-flex align-items-center" style="width: 260px; ">
        <button class="btn d-flex align-items-center" style="padding: 0; margin: 0; border: 0; margin-left: 20px;" type="button" id="dropdownMenu2">
          <router-link to="/dangnhap" class="nav-link active d-flex align-items-center" >
            <i class="bi bi-person-circle" style="font-size: 40px; color: white;"></i>
            <strong v-if="auth.name" class="nameAuth text-light ms-2 ">{{ auth.name }}</strong>
              <strong v-else class="nameAuth text-light ms-2">Khác</strong>
          </router-link>
        </button>
      </div>
      

      </div>
    </div>
        </nav>
</template>
<script setup>
  import { ref, onMounted } from 'vue';

const auth = ref({ name: "" }); 

onMounted(() => {
  const storedUser = localStorage.getItem("user");
  if (storedUser && storedUser !== "null") {
    const userData = JSON.parse(storedUser);
    auth.value.name = userData?.name ; 
  }
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
.tab-link{
    text-decoration: none;
    color: white;
    font-size: 15px;
    font-weight: bold;
    padding: 0px 6px 0px 6px;
    border-radius: 20px;
    
}
.container-tab>.duocchon{
    background-color: white;
    color: black;
}
.container-tab>.tab-link:hover{
    background-color: white;
    color: black;
    
}
</style>