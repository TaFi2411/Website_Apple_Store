<template>
    <section>
        <div class="formto">
            <h3 class="text-center font-bold"><strong>Đăng ký</strong></h3>
            <br />
            <form @submit.prevent="dangKy">
                <div class="mb-3">
                    <label for="name">Tên tài khoản</label>
                    <input type="text" class="form-control" id="name" v-model="form.name" placeholder="Nhập tên tài khoản" />
                    <span class="text-danger error">{{ errors.name }}</span>
                </div>
                <div class="mb-3">
                    <label for="email">Email</label>
                    <input type="text" class="form-control" id="email" v-model="form.email" placeholder="Nhập email" />
                    <span class="text-danger error">{{ errors.email }}</span>
                </div>
                <div class="mb-3">
                    <label for="phone">Số điện thoại</label>
                    <input type="text" class="form-control" id="phone" v-model="form.phone" placeholder="Nhập số điện thoại" />
                    <span class="text-danger error">{{ errors.phone }}</span>
                </div>

                <div class="mb-3">
                    <label for="pass">Mật khẩu</label>
                    <div class="input-group position-relative">
                        <input :type="showPassword ? 'text' : 'password'" class="form-control pr-5 rounded-3" id="pass" v-model="form.pass" placeholder="Nhập mật khẩu" />
                        <i :class="showPassword ? 'bi bi-eye-slash-fill' : 'bi bi-eye-fill'"
                        class="eye-icon"
                        @click="showPassword = !showPassword"></i>
                    </div>
                    <span class="text-danger error">{{ errors.pass }}</span>
                </div>

                <div class="mb-3">
                    <label for="cfpass">Xác nhận mật khẩu</label>
                    <div class="input-group position-relative">
                        <input :type="showCfPassword ? 'text' : 'password'" class="form-control pr-5 rounded-3" id="cfpass" v-model="cfpass" placeholder="Nhập lại mật khẩu" />
                        <i :class="showCfPassword ? 'bi bi-eye-slash-fill' : 'bi bi-eye-fill'"
                        class="eye-icon"
                        @click="showCfPassword = !showCfPassword"></i>
                    </div>
                    <span class="text-danger error">{{ errors.cfpass }}</span>
                </div>


                <!-- Checkbox Đồng ý điều khoản -->
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="terms" v-model="agreeTerms" />
                    <label class="form-check-label" for="terms">Tôi đồng ý với <a href="#">các điều khoản</a></label>
                    <span class="text-danger error">{{ errors.terms }}</span>
                </div>

                <button type="submit" class="btn btn-primary" id="btndangky" :disabled="!agreeTerms">Đăng ký</button>
                <button class="btn mt-0" id="btndangnhap" @click="back">Hủy</button>
            </form>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import validator from "validator";

const API_URL = "http://localhost:3000/";
const router = useRouter();

const errors = ref({});
const agreeTerms = ref(false);
const showPassword = ref(false);
const showCfPassword = ref(false);

const form = ref({
    name:"",
    email:"",
    phone:"",
    pass:"",
    role:"user"
    
})
const cfpass = ref(""); 

const validateForm = () => {
    errors.value = {};

    if (validator.isEmpty(form.value.email.trim())) {
    errors.value.email = "Không được bỏ trống";

  } else if (!validator.isEmail(form.value.email)) {
    errors.value.email = "Nhập đúng định dạng email";
  }

    if (validator.isEmpty(form.value.name.trim())) {
    errors.value.name = "Không được bỏ trống";
  } else if (form.value.name.length > 20) {
    errors.value.name = "Tên không quá 20 kí tự";
  }

  if (validator.isEmpty(String(form.value.phone))) {
    errors.value.phone = "Không được bỏ trống";
  } else if (!validator.isNumeric(String(form.value.phone))) {
    errors.value.phone = "Chỉ được nhập số";
  } else if (form.value.phone.length > 10) {
    errors.value.phone = "Không được quá 10 số";
  }
   else if (form.value.phone.length < 10) {
    errors.value.phone = "Số điện thoại phải 10 số.";
  }

  if (validator.isEmpty(form.value.pass.trim())) {
    errors.value.pass = "Không được bỏ trống";
  }

    

  if (validator.isEmpty(cfpass.value.trim())) {
        errors.value.cfpass = "Không được bỏ trống";
    } else if (cfpass.value !== form.value.pass) {
        errors.value.cfpass = "Mật khẩu không khớp";
    }

    if (!agreeTerms.value) {
        errors.value.terms = "Bạn phải đồng ý với điều khoản";
    }

};

const back = async () => {
       
       router.push("/dangnhap");
   
}
const dangKy = async () => {
    validateForm();
    if (Object.keys(errors.value).length > 0) {
        return;
    }

    try {
        await axios.post(API_URL + "auth", form.value);
        alert("Đăng ký thành công");
        router.push("/dangnhap");
    } catch (error) {
        console.error("Lỗi khi thêm khách hàng:", error);
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

#tendangnhap {
    margin: 10px;
    width: 310px;
    height: 40px;
}

#matkhau {
    margin: 10px;
    width: 310px;
    height: 40px;
}

#xacnhanmatkhau {
    margin: 10px;
    width: 310px;
    height: 40px;
}

section>.formto>form {
    width: 330px;
}



#btndangnhap {
    margin: 10px 10px 0px 10px;
    
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
#btndangky {
    margin: 10px;
    
    width: 310px;
    height: 36px;
    border: none;
    font-weight: bold;
    
}

#btndangky:hover {
    cursor: pointer;
    
}



</style>
