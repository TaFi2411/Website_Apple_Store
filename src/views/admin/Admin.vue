<template>
    <div class="content">
      <div id="tongquan" class="tab-content active">
        <div class="container mt-4">
          <h2 class="text-center mb-4">Tổng quan</h2>
  
          <div class="row mb-4">
            <div class="col-md-4">
              <div class="card text-center p-3">
                <h4>Tổng Doanh Thu</h4>
                <p class="fs-4 text-success">500.000.000 VNĐ</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card text-center p-3">
                <h4>Tổng Đơn Hàng</h4>
                <p class="fs-4 text-primary">1500</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card text-center p-3">
                <h4>Khách Hàng Mới</h4>
                <p class="fs-4 text-warning">320</p>
              </div>
            </div>
          </div>
  
          <div class="row">
            <div class="col-md-6">
              <canvas ref="revenueChart"></canvas>
            </div>
            <div class="col-md-6">
              <canvas ref="ordersChart"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>

   


  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import Chart from "chart.js/auto";
  
  const revenueChart = ref(null);
  const ordersChart = ref(null);
  
  onMounted(() => {
    if (revenueChart.value) {
      new Chart(revenueChart.value, {
        type: "bar",
        data: {
          labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6"],
          datasets: [
            {
              label: "Doanh thu (VNĐ)",
              data: [80000000, 92000000, 75000000, 82000000, 90000000, 95000000],
              backgroundColor: "rgba(75, 192, 192, 0.6)",
            },
          ],
        },
      });
    }
  
    if (ordersChart.value) {
      new Chart(ordersChart.value, {
        type: "line",
        data: {
          labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6"],
          datasets: [
            {
              label: "Số đơn hàng",
              data: [120, 135, 110, 140, 150, 160],
              borderColor: "rgba(255, 99, 132, 1)",
              fill: false,
            },
          ],
        },
      });
    }
  });
  </script>
  
  <style scoped>
  .chart-container {
    width: 100%;
    max-width: 600px;
    height: 300px;
    background: linear-gradient(to top, #4caf50 50%, transparent 50%);
    border: 1px solid #ccc;
    position: relative;
    margin: auto;
  }
  
  .bar {
    width: 40px;
    background-color: #007bff;
    position: absolute;
    bottom: 0;
    text-align: center;
    color: white;
  }
  </style>
  