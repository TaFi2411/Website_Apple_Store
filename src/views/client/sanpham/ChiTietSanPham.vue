<template>
    <div class="container" style="margin-top: 200px; padding: 20px;">
        <div class="row">
            <div class="col-lg-5">
                <div class="khunganh" v-if="form.image">
                    <img :src="form.image" alt="Ảnh xem trước" class="img-preview" style="width: 100%; height: 100%;" />
                </div>
            </div>
            <div class="col-lg-7 ps-5">
                <h1 class="title"><strong>{{ form.name }}</strong></h1>
                <h2 class="title"><strong class="text-danger">{{ formatCurrency(form.price) }}</strong></h2>

                <div class="dungluong mt-3" v-if="form.type !== 'iPod'">
                    <h5><strong>Dung lượng</strong></h5>
                    <div class="gb d-flex">
                        <router-link>128GB</router-link>
                        <router-link>256GB</router-link>
                        <router-link>512GB</router-link>
                        <router-link>1TB</router-link>
                    </div>
                </div>

                <div class="mausac mt-4">
                    <h5><strong>Màu sắc</strong></h5>
                    <div class="color d-flex">
                        <router-link style="background-color: black;"></router-link>
                        <router-link style="background-color: white;"></router-link>
                        <router-link style="background-color: grey;"></router-link>
                        <router-link style="background-color: blue;"></router-link>
                    </div>
                </div>

                <div class="soluong mt-3">
                    <div class="title">
                        <h5><strong>Số lượng</strong></h5>
                    </div>
                    <div class="d-flex quantity-box">
                        <button @click="decreaseQuantity" class="quantity-btn"><i class="bi bi-dash-lg"></i></button>
                        <input type="text" v-model="quantity" readonly class="quantity-input">
                        <button @click="increaseQuantity" class="quantity-btn"><i class="bi bi-plus-lg"></i></button>
                    </div>
                </div>

                <div class="d-flex mt-3 button-group">
                    <button type="button" class="btn btn-outline-dark" style="height: 50px;">Thêm vào giỏ hàng</button>
                    <button type="button" class="btn btn-dark ms-4" style="width: 200px; font-weight: bold;">Mua ngay</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const API_URL = "http://localhost:3000/";

const form = ref({
    name: "",
    price: "",
    image: "",
    type: ""
});

const quantity = ref(1);

const formatCurrency = (price) => {
    return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    }).format(price);
};

const increaseQuantity = () => {
    quantity.value++;
};

const decreaseQuantity = () => {
    if (quantity.value > 1) {
        quantity.value--;
    }
};

const productList = async () => {
    try {
        const [iPhones, iPads, iPods, laptops] = await Promise.all([
            axios.get(`${API_URL}phones`),
            axios.get(`${API_URL}ipads`),
            axios.get(`${API_URL}ipods`),
            axios.get(`${API_URL}laptops`)
        ]);

        const allProducts = [
            ...iPhones.data,
            ...iPads.data,
            ...iPods.data,
            ...laptops.data
        ];
        const product = allProducts.find(p => p.id == route.params.id);

        if (product) {
            form.value = product;
        } else {
            console.error("Không tìm thấy sản phẩm!");
        }
    } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
    }
};

onMounted(productList);
</script>

<style scoped>
.khunganh {
    border: 2px solid black;
    border-radius: 20px;
    width: 100%;
    height: 460px;
    padding: 20px;
    box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.2);
}


.dungluong>.gb>a {
    text-align: center;
    color: white;
    width: 80px;
    text-decoration: none;
    padding: 10px;
    margin-right: 20px;
    background-color: darkslategray;
    border-radius: 10px;
}
.dungluong>.gb>a:hover {
    background-color: rgb(99, 123, 123);
}


.mausac>.color>a {
    text-align: center;
    width: 50px;
    height: 50px;
    text-decoration: none;
    padding: 10px;
    margin-right: 20px;
    border: 1px solid black;
    border-radius: 50%;
    box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.2);
}


.quantity-box {
    border: 2px solid black;
    width: 120px;
    border-radius: 20px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
}

.quantity-btn {
    background-color: transparent;
    border: none;
    font-size: 18px;
    font-weight: bold;
    width: 30px;
    cursor: pointer;
}

.quantity-input {
    width: 50px;
    height: 100%;
    border: none;
    text-align: center;
    font-size: 16px;
    outline: none;
    border-left: 2px solid black;
    border-right: 2px solid black;
}


</style>
