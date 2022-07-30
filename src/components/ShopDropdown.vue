<template>

  <a-menu v-model:selectedKeys="selectedKeys2" v-model:openKeys="openKeys" mode="inline" style="height: 100%">
    <a-sub-menu key="sub1">
      <template #title>
        <span>
          <fire-outlined />
          Hot
        </span>
      </template>
      <a-menu-item v-for="(hot, index) in hots" :key=index @click="hotsRetrun">{{ hot.category }}</a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub2">
      <template #title>
        <span>
          <laptop-outlined />
          subnav 2
        </span>
      </template>
      <a-menu-item key="5">option5</a-menu-item>
      <a-menu-item key="6">option6</a-menu-item>
      <a-menu-item key="7">option7</a-menu-item>
      <a-menu-item key="8">option8</a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub3">
      <template #title>
        <span>
          <notification-outlined />
          subnav 3
        </span>
      </template>
      <a-menu-item key="9">option9</a-menu-item>
      <a-menu-item key="10">option10</a-menu-item>
      <a-menu-item key="11">option11</a-menu-item>
      <a-menu-item key="12">option12</a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>
<script setup lang="ts" >
import { FireOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons-vue';
import { reactive, ref } from 'vue';
import { HotService } from './hot-service'
const selectedKeys2 = ref<string[]>(['1']);
const openKeys = ref<string[]>(['sub1']);

let hotservices: HotService = new HotService()

let hots = hotservices.getHotServiceData();

function hotsRetrun() {
  console.log(hots)
}
</script>