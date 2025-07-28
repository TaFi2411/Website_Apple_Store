<template>
    <section>
      <div class="formto">
        <h3 class="text-center font-bold">Đăng nhập</h3>
        <br />
        <form @submit.prevent="login">
          <div class="mb-3">
            <label for="email">Email</label>
            <input
              type="text"
              class="form-control"
              id="email"
              v-model="form.email"
              placeholder="Nhập email"
            />
            <span class="text-danger error">{{ errors.email }}</span>
          </div>
  
          <div class="mb-3">
            <label for="pass">Mật khẩu</label>
            <div class="input-group position-relative">
              <input
                :type="showPassword ? 'text' : 'password'"
                class="form-control pr-5 rounded-3"
                id="pass"
                v-model="form.pass"
                placeholder="Nhập mật khẩu"
              />
              <i
                :class="showPassword ? 'bi bi-eye-slash-fill' : 'bi bi-eye-fill'"
                class="eye-icon"
                @click="showPassword = !showPassword"
              ></i>
            </div>
            <span class="text-danger error">{{ errors.pass }}</span>
          </div>
  
          <div class="nhomatkhau mt-2">
            <p>
              <input type="checkbox" v-model="nhomatkhau" /> Nhớ mật khẩu
            </p>
            <router-link to="/quenmatkhau" style="text-decoration: none;">Quên mật khẩu?</router-link>
          </div>
  
          <button type="submit" class="btn " id="btndangnhap">Đăng nhập</button>
  
          <h5 class="text-center">or</h5>
          <div class="fg">
            <button type="button" id="facebook" @click="dangNhapFacebook">
              <i class="bi bi-facebook"></i> Facebook
            </button>
            <button type="button" id="google" @click="dangNhapGoogle">
              <i class="bi bi-google"></i> Google
            </button>
          </div>
          <p id="dangky">
            Bạn chưa có tài khoản? <a href="dangky">Đăng ký</a>
          </p>
        </form>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import axios from "axios";
  import validator from "validator";
  
  const form = ref({
    email: "",
    pass: "",
  });
  
  const errors = ref({});
  const router = useRouter();
  const showPassword = ref(false);
  

  const validateForm = () => {
    errors.value = {};
  
    if (validator.isEmpty(form.value.email.trim())) {
      errors.value.email = "Không được bỏ trống";
    } else if (!validator.isEmail(form.value.email)) {
      errors.value.email = "Nhập đúng định dạng email";
    }
  
    if (validator.isEmpty(form.value.pass.trim())) {
      errors.value.pass = "Không được bỏ trống";
    }
  };
  
  const login = async () => {
    validateForm();
    if (Object.keys(errors.value).length > 0) {
      return;
    }
  
    try {
      const response = await axios.get(`http://localhost:3000/auth?email=${form.value.email}`);
      const users = response.data;
  
      if (users.length === 0) {
        errors.value.email = "Email chưa được đăng ký!";
        return;
      }
  
      const user = users.find((u) => u.pass === form.value.pass);
  
      if (!user) {
        errors.value.pass = "Mật khẩu không đúng!";
        return;
      }

      if (user.status === "inactive") {
        errors.value.email = "Tài khoản đã bị dừng hoạt động!";
        return;
      }
  
      localStorage.setItem("user", JSON.stringify(user));
      router.push("/");
      window.dispatchEvent(new Event("user-updated"));
  
    } catch (error) {
      console.error("Lỗi kết nối đến server:", error);
      errors.value.email = "Lỗi kết nối đến máy chủ!";
    }
  };
  </script>
  
  <style scoped>
  .eye-icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    font-size: 18px;
    color: #6c757d;
  }
  .eye-icon:hover {
    color: #000;
  }
  
  section {
    display: flex;
    justify-content: center;
    margin-top: 160px;
    font-family: Arial, Helvetica, sans-serif;
  }
  
  .formto {
    width: 400px;
    border: 1px solid black;
    padding: 40px;
    padding-top: 20px;
    background-color: white;
    border-radius: 20px;
  }
  
  .nhomatkhau {
    display: flex;
    justify-content: space-between;
  }
  
  #btndangnhap {
    margin: 10px;
    background-color: #fd475a;
    width: 310px;
    height: 36px;
    border: none;
    font-weight: bold;
  }
  
  #btndangnhap:hover {
    cursor: pointer;
    background-color: #a12935;
  }
  
  .fg {
    text-align: center;
    margin: 10px;
  }
  
  #facebook {
    border: none;
    width: 143px;
    height: 30px;
    background-color: #4285F4;
    color: white;
    margin-right: 5px;
  }
  
  #facebook:hover {
    cursor: pointer;
    background-color: rgb(32, 89, 182);
  }
  
  #google {
    border: none;
    width: 145px;
    height: 30px;
    background-color: #EA4335;
    color: white;
    margin-left: 4px;
  }
  
  #google:hover {
    cursor: pointer;
    background-color: #c12f22;
  }
  
  #dangky {
    text-align: center;
  }
  </style>
  