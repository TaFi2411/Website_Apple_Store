<script setup>
import HeaderAd from '@/components/admin/HeaderAd.vue';
import FooterAd from '@/components/admin/FooterAd.vue';
import Sidebar from '@/components/admin/Sidebar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="layout"> 
    <Sidebar />
    <div class="main-content">
      <div class="content-wrapper">
        <HeaderAd />
        <div class="content">
          <RouterView />
        </div>
        <FooterAd />
      </div>
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  height: 100vh; 
}


.sidebar {
  width: 250px;
  background: #343a40;
  color: white;
  position: fixed;
  height: 100vh;
  left: 0;
  top: 0;
  padding: 20px;
}


.main-content {
  margin-left: 250px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}


.content-wrapper {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto; 
}


.content {
  flex-grow: 1;
  padding: 20px;
  background: #f8f9fa;
}
</style>
