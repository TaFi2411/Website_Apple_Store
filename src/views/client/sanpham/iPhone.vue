

<template >
   
    <!-- Tab -->
    <div class="tab-container">
    <router-link to="/iphone" class="tab-item">
      <span><i class="bi bi-phone-fill"></i></span> Điện thoại
    </router-link>

    <router-link to="/laptop" class="tab-item">
      <span><i class="bi bi-laptop-fill"></i></span> Laptop
    </router-link>

    <router-link to="/ipad" class="tab-item">
      <span><i class="bi bi-tablet-fill"></i></span> iPad
    </router-link>

    <router-link to="/tainghe" class="tab-item">
      <span><i class="bi bi-earbuds"></i></span> Tai nghe
    </router-link>
  </div>

    <!-- Banner -->
    <video src="/images/banner-iphone.mp4.mp4" type="video/mp4" width="100%" height="460px" autoplay="autoplay" muted="" loop="">
    </video>

     <!-- Sản phẩm -->
     <div class="container mx-auto py-5">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div v-for="(phone) in iphones" :key="phone.id" class="product-card">
      
      <img :src="phone.image" :alt="phone.name"  class="product-image" />
      <h2 class="product-name">{{ phone.name }}</h2>
      
      <div class="d-flex justify-content-center align-items-center gap-2">  
      </div>
      <p class="product-price">{{ formatCurrency(phone.price) }}</p>
      
      <button  @click="upchitiet(phone.id, phone.type)" class="product-button">
        Mua hàng
      </button>
    </div>
  </div>
</div>

</template>
<script setup>


import { ref, onMounted } from 'vue';
const iphones = ref([]);
import { useRouter } from 'vue-router';

const router = useRouter();

const API_URL = "http://localhost:3000/phones";

const fetchProducts = async () => {
  try {
    const response = await fetch(API_URL);
    iphones.value = await response.json();
    
  } catch (error) {
    console.error("Lỗi khi tải sản phẩm:", error)
  }
}
const formatCurrency = (price) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
};



const upchitiet = (id, type) => {
  router.push(`/chitietsanpham/${type.toLowerCase()}s/${id}`);
};

onMounted(fetchProducts);
</script>
<style scoped>

.container {
  max-width: 1200px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 20px; 
}

.product-card {
  background-color: #f0f5f8;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s ease-in-out;
  min-height: 320px;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image {
  width: 200px;
  height: 200px;
  object-fit: contain;
  margin: 0 auto 15px;
}

.product-name {
  font-size: 18px;
  font-weight: bold;
}

.product-price {
  color: red;
  font-size: 20px;
  font-weight: 600;
}

.product-button {
  background-color: #ff4d4d;
  text-decoration: none;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  margin-top: 10px;
  transition: 0.3s;
}

.product-button:hover {
  background-color: #ff1a1a;
}

/* .............. */
.tab-container {
  margin-top: 160px;
  display: flex;
  justify-content: center;
  gap: 15px;
  padding: 10px 0;
  border-bottom: 2px solid #ddd;
}

.tab-item {
  text-decoration: none;
  color: black;
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 20px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 5px;
}

.tab-item:hover {
  background-color: #f0f0f0;
}

video{
    margin-top: 20px;
    object-fit: cover;
    border-radius: 60px;
    padding: 20px;
}

</style>