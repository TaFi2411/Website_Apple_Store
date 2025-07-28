<template>
    <div class="container p-5">
      <h2 class="mb-5 text-center">Quản lý sản phẩm</h2>
      
      <div class="d-flex justify-content-end mb-3">

        <div class="sapxep" style=" width: 150px; margin-right: 24px;">
              
              <select class="form-select" aria-label="Default select example" v-model="selectedType">
                  <option value="all">Tất cả</option>
                  <option value="Phone">iPhone</option>
                  <option value="iPad">iPad</option>
                  <option value="iPod">iPod</option>
                  <option value="LapTop">Lap top</option>
              </select>
              </div>


        <input
          type="text"
          class="form-control w-50"
          placeholder=" Tìm kiếm sản phẩm..."
          v-model="searchQuery"
        />
         <button class="btn bg-primary text-light ms-3 me-3 " type="submit">Tìm kiếm</button>
         <div style="width: 200px;" >
            <router-link to="/create-product" class="btn btn-success w-100" > Thêm sản phẩm</router-link>
        </div>
      </div>
  
      <div class="table-container">
  <table class="table table-bordered table-hover">
    <thead class="table-dark">
      <tr>
        <th>ID</th>
        <th>Tên sản phẩm</th>
        <th>Giá</th>
        <th>Màu sắc</th>
        <th>Dung lượng</th>
        <th>Loại</th>
        <th>Số lượng</th>
        <th>Hình ảnh</th>
        <th>Thao tác</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="phone in timkiem" :key="phone.id">
        <th>{{ phone.id }}</th>
        <td>{{ phone.name }}</td>
        <td>{{ formatCurrency(phone.price) }}</td>
        <td>{{ phone.color }}</td>
        <td>{{ phone.capacity}}</td>
        <td>{{ phone.type }}</td>
        <td>{{ phone.quantity > 0 ? parseInt(phone.quantity, 10) : "Hết hàng" }}</td>

        <td>
          <img :src="phone.image || '/images/default.png'" class="img-thumbnail" style="width: 50px; height: 50px" />
        </td>
        <td>
          <button class="btn btn-primary me-2"  @click="editProduct(phone.id, phone.type)">Chỉnh sửa</button>
          
          <button class="btn btn-danger" @click="deleteProduct(phone.id, phone.type)">Xóa</button>
          
        </td>
      </tr>
    </tbody>
  </table>
</div>

    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from "vue";
  import { useRouter } from "vue-router";
  import axios from "axios";
  
  const router = useRouter();

  const phones = ref([]);
  const searchQuery = ref("");
  const selectedType = ref("all");

  const editProduct = (id, type) => {
    router.push(`/update-product/${type.toLowerCase()}s/${id}`);
};

  
  
  const formatCurrency = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };
  
  const timkiem = computed(() => {
  return phones.value.filter((phone) => {
    const search =
      phone.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      phone.color.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      phone.capacity.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      phone.type.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      phone.quantity.toString().toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      phone.price.toString().toLowerCase().includes(searchQuery.value.toLowerCase());

    const type = selectedType.value === "all" || phone.type === selectedType.value;

    return search && type;
  });
});

  
  
const productList = async () => {
  try {
    const [iPhones, iPads, iPods, LapTops] = await Promise.all([
      axios.get("http://localhost:3000/phones"),
      axios.get("http://localhost:3000/ipads"),
      axios.get("http://localhost:3000/ipods"),
      axios.get("http://localhost:3000/laptops"),
    ]);
    phones.value = [
      ...iPhones.data,
      ...iPads.data,
      ...iPods.data,
      ...LapTops.data,
    ];
  } catch (error) {
    console.error("Lỗi khi lấy danh sách sản phẩm:", error);
  }
};

const deleteProduct = async (id, type) => {
  const cfm = confirm("Bạn có chắc chắn muốn xóa không?");
  if (cfm) {
    try {
      let apiUrl = `http://localhost:3000/${type.toLowerCase()}s/${id}`;
      await axios.delete(apiUrl);
      alert("Xóa thành công!");

      await productList();
      
    } catch (error) {
      console.error("Lỗi khi xóa sản phẩm:", error);
      alert("Xóa thất bại!");
      console.log("Deleting from:", apiUrl);

    }
  }
};




  onMounted(productList);
  </script>
  
  <style scoped>

.table-container {
  max-height: 500px; 
  overflow-y: auto;
}
.table thead {
  position: sticky;
  top: 0;
  background-color: #212529;
  color: white;
  z-index: 1000;
}

  .table th,
  .table td {
    vertical-align: middle;
    text-align: center;
  }
  </style>
  