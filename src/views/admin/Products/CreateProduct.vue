<template>
      <h1 class="title ms-4 text-center">Thêm sản phẩm</h1> 
  <div class="container p-5">
    
    <div class="row ">
      <span class="text-danger error" style="padding-left: 40px;" >{{ errors.image }}</span>
            <div class="col-lg-3 text-center me-4" id="anhsanpham">
              
                <label class="form-label">Hình ảnh</label>
                <input type="file"  id="chonanh" class="form-control" @change="(e) => convertToBase64(e.target.files[0])" />
                
                
              
                <div v-if="form.image" class="mt-2" >
                  
                <img  :src="form.image" alt="Ảnh xem trước" class="img-preview" style="width: 100%;"/>
                
                </div>
                
            </div>
            
            
            <div class="col-lg-9 p-5 pt-0 pe-0">
             
              <div class="row mb-3">
                <div class="col-lg-6">
                  <div class="col-12">
                    <label for="name" class="form-label">Tên sản phẩm</label><span class="text-danger error">{{ errors.name }}</span>
                    <input type="text" class="form-control" id="name" v-model="form.name" >
                    
                </div>
                
                </div>
                <div class="col-lg-6">
                  <div class="col-12">
                    <label for="color" class="form-label"  >Màu sắc</label><span class="text-danger error">{{ errors.color }}</span>
                    <select class="form-select" v-model="form.color" aria-label="Default select example">
                    <option value="" disabled >Màu sắc</option>
                    <option value="Đen">Đen</option>
                    <option value="Trắng">Trắng</option>
                    <option value="Vàng">Vàng</option>
                    <option value="Xanh">Xanh</option>
                    <option value="Tím">Tím</option>
                </select>
                   
                </div>
                
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="mb-3">
                <label for="capacity" class="form-label">Dung lượng</label><span class="text-danger error">{{ errors.capacity }}</span>
                <select class="form-select" v-model="form.capacity" aria-label="Default select example">
                    <option value="" disabled >Dung lượng</option>
                    <option value="128GB">128GB</option>
                    <option value="256GB">256GB</option>
                    <option value="512GB">512GB</option>
                    <option value="1TB">1TB</option>
                    
                </select>
                
                </div>
                
                </div>
                <div class="col-lg-6">
                  <div class="mb-3">
                <label for="color" class="form-label">Loại</label><span class="text-danger error">{{ errors.type }}</span>
                <select class="form-select" v-model="form.type" aria-label="Default select example">
                    <option value="" disabled >Loại</option>
                    <option value="Phone">iPhone</option>
                    <option value="iPad">iPad</option>
                    <option value="iPod">iPod</option>
                    <option value="Laptop">Laptop</option>
                </select>
                
                </div>
                
                </div>
              </div>
              <div class="row mb-5">
                  <div class="col-lg-6">
                    <label for="quantity" class="form-label">Số lượng</label><span class="text-danger error">{{ errors.quantity }}</span>
                    <input type="text" class="form-control" id="quantity" v-model="form.quantity" >
                    
                </div>
                  <div class="col-lg-6">
                    <label for="price" class="form-label">Giá</label><span class="text-danger error">{{ errors.price }}</span>
                    <input type="text" class="form-control" id="price" v-model="form.price" >
                    
                </div>
                
                </div>
                <button type="button" class="btn btn-primary " @click="createProduct">Thêm mới</button>
                <router-link to="list-product" class="btn btn-danger mt-3" >Hủy bỏ</router-link>
            </div>
      </div>
  </div>

</template>
<script setup>
import { ref,onMounted,computed } from 'vue';
import axios from 'axios';
import { useRoute , useRouter } from 'vue-router';
import validator from "validator";


const API_URL = "http://localhost:3000/";
const router = useRouter();
const route = useRoute();

const form = ref({
    name:"",
    price:"",
    color:"",
    capacity:"",
    quantity:"",
    type:"",
    image:""
});

const errors = ref({});

  const convertToBase64 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        form.value.image = reader.result; 
    };

};

const validateForm = () => {
    errors.value = {};

    if (validator.isEmpty(form.value.name.trim())) {
        errors.value.name = "Không được bỏ trống";
    }
    if (validator.isEmpty(form.value.image.trim())) {
        errors.value.image = "Không được bỏ trống";
    }
    if (validator.isEmpty(form.value.color.trim())) {
        errors.value.color = "Không được bỏ trống";
    }
    if (validator.isEmpty(form.value.capacity.trim())) {
        errors.value.capacity = "Không được bỏ trống";
    }
    if (validator.isEmpty(form.value.type.trim())) {
        errors.value.type = "Không được bỏ trống";
    }
    if (validator.isEmpty(form.value.quantity.trim())) {
        errors.value.quantity = "Không được bỏ trống";
    } else if (!validator.isNumeric(form.value.quantity.trim())) {
        errors.value.quantity = "Số lượng phải là số";
    }
    if (validator.isEmpty(form.value.price.trim())) {
        errors.value.price = "Không được bỏ trống";
    } else if (!validator.isNumeric(form.value.price.trim())) {
        errors.value.price = "Giá phải là số";
    }
};



const createProduct = async () => {
  validateForm();
  if (Object.keys(errors.value).length > 0) {
    return;
  }

  try {
    let dbjson;
    if (form.value.type === "iPad") {
      dbjson = "ipads";
    } else if (form.value.type === "iPod") {
      dbjson = "ipods";
    } else if (form.value.type === "Laptop") { 
      dbjson = "laptops";
    } else {
      dbjson = "phones";
    }


    const response = await axios.get(`${API_URL}${dbjson}`);
    const kiemtra = response.data.find((p) =>
      p.name.trim().toLowerCase() === form.value.name.trim().toLowerCase() &&
      p.price.trim() === form.value.price.trim() &&
      p.color.trim() === form.value.color.trim() &&
      p.capacity.trim() === form.value.capacity.trim() &&
      p.type.trim() === form.value.type.trim()
    );

    if (kiemtra) {
      const updatedQuantity = parseInt(kiemtra.quantity) + parseInt(form.value.quantity);
      await axios.patch(`${API_URL}${dbjson}/${kiemtra.id}`, { quantity: updatedQuantity });
      alert("Cập nhật số lượng sản phẩm thành công!");
    } else {
      await axios.post(`${API_URL}${dbjson}`, form.value);
      alert("Thêm sản phẩm mới thành công!");
    }

    router.push("/list-product");
    resetForm();
  } catch (error) {
    console.error("Lỗi khi thêm sản phẩm:", error);
  }
};


const resetForm = () => {
    form.value = { id: "", name: "", price: "", color: "", capacity: "", type: "", image: "" , quantity:""};
};
</script>

<style scoped>
  #anhsanpham{
  width: 230px;
  height: 280px;
  border: 1.5px solid black;

}




#chonanh {
  opacity: 0;
  position: fixed;
  width: 200px;
  height: 230px;
  cursor: pointer;
  z-index: 9999; 
}

.btn{
  width: 100%;
  font-weight: bold;
}
</style>