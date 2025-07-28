<template>
  <div class="container p-5">
    <h2 class="mb-5 text-center">Quản lý người dùng</h2>

    <div class="d-flex justify-content-center mb-3">
      <input
        type="text"
        class="form-control w-50"
        placeholder="Tìm kiếm tài khoản..."
        v-model="searchQuery"
      />
      <button class="btn bg-primary text-light ms-3 me-3" type="submit">Tìm kiếm</button>
    </div>

    <div class="row mt-3">
      <table class="table table-bordered table-hover">
        <thead class="table-dark">
          <tr>
            <th>ID</th>
            <th>Tên tài khoản</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Vai trò</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in filteredUsers" :key="user.id">
            <th>{{ user.id }}</th>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.role }}</td>
            <td>
              <span :class="user.status === 'active' ? 'text-success' : 'text-danger'">
                {{ user.status === 'active' ? 'Hoạt động' : 'Bị dừng' }}
              </span>
            </td>
            <td>
              <button 
                class="btn btn-warning me-2"
                @click="toggleUserStatus(user)"
                :disabled="user.role === 'admin'"
              >
                {{ user.status === 'active' ? 'Dừng hoạt động' : 'Mở khóa' }}
              </button>
              
              <button 
                class="btn btn-danger"
                @click="deleteUser(user.id)"
                :disabled="user.id === currentUser.id"
              >
                Xóa
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";

const API_URL = "http://localhost:3000/auth"; 
const users = ref([]); 
const searchQuery = ref(""); 
const currentUser = ref({});


const loadCurrentUser = () => {
  const storedUser = localStorage.getItem("user");
  currentUser.value = storedUser ? JSON.parse(storedUser) : {};
};

const filteredUsers = computed(() => {
  return users.value.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    user.phone.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    user.role.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});


const fetchUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    users.value = response.data.map(user => ({...user,
      status: user.status || "active" 
    }));
  } catch (error) {
    console.error("Lỗi khi lấy danh sách người dùng:", error);
  }
};


const deleteUser = async (id) => {
  if (id === currentUser.value.id) {
    alert("Bạn không thể xóa tài khoản đang đăng nhập!");
    return;
  }

  const cfm = confirm("Bạn có chắc chắn muốn xóa tài khoản này không?");
  if (cfm) {
    try {
      await axios.delete(`${API_URL}/${id}`);
      users.value = users.value.filter(user => user.id !== id);
      alert("Xóa thành công!");
    } catch (error) {
      console.error("Lỗi khi xóa người dùng:", error);
    }
  }
};


const toggleUserStatus = async (user) => {
  if (user.role === "admin") {
    alert("Không thể dừng hoạt động tài khoản admin!");
    return;
  }

  const newStatus = user.status === "active" ? "inactive" : "active";
  const confirmMsg = newStatus === "inactive"
    ? `Bạn có chắc muốn dừng hoạt động tài khoản "${user.name}" không?`
    : `Bạn có chắc muốn mở khóa tài khoản "${user.name}" không?`;

  if (confirm(confirmMsg)) {
    try {
      await axios.patch(`${API_URL}/${user.id}`, { status: newStatus });
      user.status = newStatus;
      alert(`Tài khoản "${user.name}" đã chuyển sang trạng thái ${newStatus === 'active' ? 'Hoạt động' : 'Bị dừng'}`);
    } catch (error) {
      console.error("Lỗi khi cập nhật trạng thái người dùng:", error);
    }
  }
};

onMounted(() => {
  loadCurrentUser();
  fetchUsers();
});
</script>

<style scoped>
/* Giữ tiêu đề bảng cố định khi cuộn */
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

/* Căn giữa nội dung */
.table th,
.table td {
  vertical-align: middle;
  text-align: center;
}

/* Màu trạng thái */
.text-success {
  color: green;
  font-weight: bold;
}
.text-danger {
  color: red;
  font-weight: bold;
}
</style>
