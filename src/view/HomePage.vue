<template>
  <a-layout style="position:absolute;left: 50%;transform: translate(-50%,0%);">
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys1" theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
        <a-menu-item key="1">
            <router-link to="/register">注册</router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/signIn">登录</router-link>
        </a-menu-item>
        <a-menu-item key="3">nav 3</a-menu-item>
      </a-menu>
      <div style="{ 
        width: 50px;
        height: 50px;
        float: right; }">
        <a-switch v-model:checked="checked" />
      </div>
    </a-layout-header>
    <a-layout-content style="position: relative; padding: 0 50px;left: 50%;transform: translate(-50%,0%);">
      <a-breadcrumb style="position: relative; margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout style=" position: relative;padding: 24px 0; background: #fff;width: 1426px;">
        <a-layout-sider width="200" style="background: #fff">

          <shop-dropdown />

        </a-layout-sider>
        <a-layout-content :style="{ padding: '0 24px', minHeight: '320px', with: '640' }">
          <carousel />
        </a-layout-content>
      </a-layout>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Design ©2022 Created by Xukai1666666
    </a-layout-footer>
  </a-layout>
</template>
<script setup lang="ts">

import { ref } from 'vue';
import ShopDropdown from '../components/ShopDropdown.vue';
import Carousel from '../components/Carousel.vue';

const checked = ref<boolean>(false);
const selectedKeys1 = ref<string[]>(['2']);

</script>
<style scoped>
#components-layout-demo-top-side .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
</style>
