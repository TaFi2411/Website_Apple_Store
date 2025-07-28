<script setup>

</script>

<template>

    <!-- Banner -->
     <div class="container-banner">
        <div id="carouselExampleControls"  class="carousel slide mt-3" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="/images/banner-trangchu-1.png" class="d-block w-100" alt="Banner 1">
            </div>
            <div class="carousel-item">
                <img src="/images/banner-trangchu-2.png" class="d-block w-100" alt="Banner 2">
            </div>
            <div class="carousel-item">
                <img src="/images/banner-trangchu-3.png" class="d-block w-100" alt="Banner 3">
            </div>
            <div class="carousel-item">
                <img src="/images/banner-trangchu-4.jpg" class="d-block w-100" alt="Banner 3">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
     </div>
    <!-- ... -->
    <div class="d-flex flex-column align-items-center mt-4">
        <i class="bi bi-apple" style="font-size: 66px;"> </i>
      <h3 class="mt-2 fw-bold">TaFi Store</h3>
    </div>
    <!-- Tab -->
    <div class="container mt-4">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col">
        <a href="/iphone" class="card-link">
          <div class="card text-center p-3">
            <img src="/images/logo-tab-trangchu-iphone.png" class="card-img-top" alt="Điện thoại" />
            <div class="card-body">
              <h5 class="card-title">Điện thoại</h5>
            </div>
          </div>
        </a>
      </div>
      <div class="col">
        <a href="/ipad" class="card-link">
          <div class="card text-center p-3">
            <img src="/images/logo-tab-trangchu-ipad.png" class="card-img-top" alt="iPad" />
            <div class="card-body">
              <h5 class="card-title">iPad</h5>
            </div>
          </div>
        </a>
      </div>
      <div class="col">
        <a href="/laptop" class="card-link">
          <div class="card text-center p-3">
            <img src="/images/logo-tab-trangchu-laptop.png" class="card-img-top" alt="Laptop" />
            <div class="card-body">
              <h5 class="card-title">Laptop</h5>
            </div>
          </div>
        </a>
      </div>
      <div class="col">
        <a href="/tainghe" class="card-link">
          <div class="card text-center p-3">
            <img src="/images/logo-tab-trangchu-tainghe.png" class="card-img-top" alt="Tai nghe" />
            <div class="card-body">
              <h5 class="card-title">Tai nghe</h5>
            </div>
          </div>
        </a>
      </div>
    </div>
    </div>
    <!-- ... -->

    <!-- Sản phẩm 1 -->
    <img class="banner-sanpham" src="/images/banner-trangchu-1.png">
    <div class="container mt-3" >
    <div class="row justify-content-center">
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card text-center p-4 shadow-sm" style="background-color: #ffffff; border-radius: 10px;">
          <img src="/images/Ip16prm-1tb.png" class="card-img-top" alt="iPhone 16 Promax" />
          <div class="card-body">
            <h5 class="card-title fw-bold">iPhone 16 Promax</h5>
            <p class="text-danger fw-bold">40,999,000đ</p>
            <button class="btn btn-danger">Mua hàng</button>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card text-center p-4 shadow-sm" style="background-color: #ffffff; border-radius: 10px;">
          <img src="/images/Ip15prm.png" class="card-img-top" alt="iPhone 15 Promax" />
          <div class="card-body">
            <h5 class="card-title fw-bold">iPhone 15 Promax</h5>
            <p class="text-danger fw-bold">36,999,000đ</p>
            <button class="btn btn-danger">Mua hàng</button>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card text-center p-4 shadow-sm" style="background-color: #ffffff; border-radius: 10px;">
          <img src="/images/ip14-pro-tim.png" class="card-img-top" alt="iPhone 14 Promax" />
          <div class="card-body">
            <h5 class="card-title fw-bold">iPhone 14 Promax</h5>
            <p class="text-danger fw-bold">26,999,000đ</p>
            <button class="btn btn-danger">Mua hàng</button>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center ">
      <button class="btn btn-dark">Xem thêm sản phẩm</button>
    </div>
    </div>
    <hr>
    <!-- Sản phẩm 2 -->
    <img class="banner-sanpham" src="/images/banner-trangchu-2.png">
    <div class="container mt-3">
    <div class="row justify-content-center">
      <div class="col-lg-4 col-md-6 mb-5">
        <div class="card text-center p-4 shadow-sm" style="background-color: #ffffff; border-radius: 15px;">
          <img src="/images/mac-air-15inch-m3.png" class="card-img-top" alt="Macbook Air 15inch M3" />
          <div class="card-body">
            <h5 class="card-title fw-bold">Macbook Air 15inch M3</h5>
            <p class="text-danger fw-bold">30,999,000đ</p>
            <button class="btn btn-danger">Mua hàng</button>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-5">
        <div class="card text-center p-4 shadow-sm" style="background-color: #ffffff; border-radius: 15px;">
          <img src="/images/macbook-air-15-inch-M2.png" class="card-img-top" alt="Macbook Air 15inch M2" />
          <div class="card-body">
            <h5 class="card-title fw-bold">Macbook Air 15inch M2</h5>
            <p class="text-danger fw-bold">26,999,000đ</p>
            <button class="btn btn-danger">Mua hàng</button>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-5">
        <div class="card text-center p-4 shadow-sm" style="background-color: #ffffff; border-radius: 15px;">
          <img src="/images/mb-air-15-m3-vang.png" class="card-img-top" alt="Macbook Air M3 Gold" />
          <div class="card-body">
            <h5 class="card-title fw-bold">Macbook Air M3 Gold</h5>
            <p class="text-danger fw-bold">28,999,000đ</p>
            <button class="btn btn-danger">Mua hàng</button>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">
      <button class="btn btn-dark">Xem thêm sản phẩm</button>
    </div>
    </div>
    <!-- Sản phẩm 3 -->
    <hr>
    <img class="banner-sanpham" src="/images/banner-trangchu-3.png">
    <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-lg-4 col-md-6 mb-5">
        <div class="card text-center p-4 shadow-sm" style="background-color: #ffffff; border-radius: 15px;">
          <img src="/images/ipad-9-den-1.png" class="card-img-top" alt="iPad 9 Black" />
          <div class="card-body">
            <h5 class="card-title fw-bold">iPad 9 Black</h5>
            <p class="text-danger fw-bold">32,999,000đ</p>
            <button class="btn btn-danger">Mua hàng</button>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-5">
        <div class="card text-center p-4 shadow-sm" style="background-color: #ffffff; border-radius: 15px;">
          <img src="/images/ipad-air-6-m2-13inch-6.png" class="card-img-top" alt="iPad Air 6 M2 13inch" />
          <div class="card-body">
            <h5 class="card-title fw-bold">iPad Air 6 M2 13inch</h5>
            <p class="text-danger fw-bold">22,999,000đ</p>
            <button class="btn btn-danger">Mua hàng</button>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-5">
        <div class="card text-center p-4 shadow-sm" style="background-color: #ffffff; border-radius: 15px;">
          <img src="/images/ipad-pro-m4-13-inch-2.png" class="card-img-top" alt="iPad Pro M4 13inch" />
          <div class="card-body">
            <h5 class="card-title fw-bold">iPad Pro M4 13inch</h5>
            <p class="text-danger fw-bold">28,999,000đ</p>
            <button class="btn btn-danger">Mua hàng</button>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center ">
      <button class="btn btn-dark">Xem thêm sản phẩm</button>
    </div>
    </div>
    <hr>
    <!-- Sản phẩm 4 -->
    <img class="banner-sanpham" src="/images/banner-trangchu-4.jpg">
    <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-lg-4 col-md-6 mb-5">
        <div class="card text-center p-4 shadow-sm" style="background-color: #ffffff; border-radius: 15px;">
          <img src="/images/ipod-max-3.png" class="card-img-top" alt="iPod Max 3" />
          <div class="card-body">
            <h5 class="card-title fw-bold">iPod Max 3</h5>
            <p class="text-danger fw-bold">10,999,000đ</p>
            <button class="btn btn-danger">Mua hàng</button>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-5">
        <div class="card text-center p-4 shadow-sm" style="background-color: #ffffff; border-radius: 15px;">
          <img src="/images/ipod-pro-usb-c-5.png" class="card-img-top" alt="iPod Pro Usb C 5" />
          <div class="card-body">
            <h5 class="card-title fw-bold">iPod Pro Usb C 5</h5>
            <p class="text-danger fw-bold">4,999,000đ</p>
            <button class="btn btn-danger">Mua hàng</button>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-5">
        <div class="card text-center p-4 shadow-sm" style="background-color: #ffffff; border-radius: 15px;">
          <img src="/images/ipod2-sac-lightning-6.png" class="card-img-top" alt="iPod2 Sạc Lightning" />
          <div class="card-body">
            <h5 class="card-title fw-bold">iPod2 Sạc Lightning</h5>
            <p class="text-danger fw-bold">2,999,000đ</p>
            <button class="btn btn-danger">Mua hàng</button>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center mt-4">
      <button class="btn btn-dark">Xem thêm sản phẩm</button>
    </div>
  </div>

</template>

<style scoped>
/*------------------------------ Banner --------------------------------*/
.container-banner{
        padding-top: 90px;
}
#carouselExampleControls>.carousel-control-prev{
    background-color: rgb(117, 117, 117);
    width: 50px;
    height: 50px;
    top: 175px;
    border-radius: 50%;
    margin-left: 60px;
}
#carouselExampleControls>.carousel-control-next{
    background-color: rgb(117, 117, 117);
    width: 50px;
    height: 50px;
    top: 175px;
    border-radius: 50%;
    margin-right: 60px;
}

.carousel-item img {
    height: 400px; 
    object-fit: cover;
}

/* Tab */
.container {
  max-width: 900px;
}
.card {
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 20px;
  background: #fff;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
.card-img {
  width: 80px;
  height: auto;
  margin: 0 auto;
  display: block;
}
.card-body {
  padding-top: 10px;
}
.card-title {
  font-size: 1rem;
  font-weight: bold;
  color: #333;
}
.card-link {
  text-decoration: none;
  color: inherit;
}
/* ... */

/* Banner sản phẩm */
.banner-sanpham{
    padding: 60px;
    width: 100%;
    height: 400px;
    border-radius: 1000px;
}
/* ... */
.card img {
  max-width: 100%;
  height: auto;
  border-radius: 15px;
  transition: transform 0.3s ease-in-out;
}

.card img:hover {
  transform: scale(1.1);
}

.product-category {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 15px;
}

</style>
